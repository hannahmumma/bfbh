<?php

/**
 * @package    BFBH 
 * @subpackage Managers\ThemeManager
 * @version    1.0.0 
 */
namespace BFBH\Managers;

use Timber;
use Timber\Menu;
use Timber\Twig_Filter;
use Timber\Twig_Function;

class ThemeManager
{
    public function run(): void
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue'], 999);
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdmin'], 999);

        add_action('init', [$this, 'initCustomPostsTypes']);
        add_action('init', [$this, 'initCustomTaxonomies']);
        add_action('init', [$this,'registerMenus']);
        add_action('init', [$this, 'addThemeSupport']);
        
        add_filter('timber/context', [$this, 'addToTimberContext']);
        add_filter('timber/twig', [$this, 'addToTwig']);
        add_filter('script_loader_tag', [$this, 'addAttributesToScript'], 10, 2);
    }

    public function enqueue(): void
    {
        wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/assets/dist/css/index.css', [], '1.0');
        wp_enqueue_script('script', get_stylesheet_directory_uri()  . '/assets/dist/js/index.js', [], '1.0', false);
        wp_localize_script('script', 'ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
    }

    public function enqueueAdmin(): void
    {
        wp_enqueue_style('admin-styles', get_stylesheet_directory_uri() . '/assets/dist/css/admin.css', [], '1.0');
        wp_enqueue_script('admin-script', get_stylesheet_directory_uri()  . '/assets/dist/js/admin.js', [], '1.0', true);
    }

    /**
     * @method registerCustomPostTypes    register CPTs
     * @return void
     */    
    public function initCustomPostsTypes(): void
    {
        new \BFBH\CustomPostTypes\HousePostType();
    }    

    public function initCustomTaxonomies(): void
    {
        new \BFBH\CustomTaxonomies\AmenitiesTaxonomy();
    }

    public function registerMenus(): void
    {
        register_nav_menus(
            [
                'main_menu'   => 'Main Menu',
                'social_menu'  => 'Social Menu',
                'footer_menu' => 'Footer Menu',
            ]
        );
    }

    public function addThemeSupport(): void
    {
        add_theme_support('menus');
        add_theme_support('post-thumbnails');
    }

    public function addToTimberContext( $context ): array
    {
        $context['main_menu'] = new Menu('main_menu');
        $context['footer_menu'] = new Menu('footer_menu');
        $context['social_menu'] = new Menu('social_menu');

        if (class_exists('acf') ) {
            $context['options'] = get_fields('option');
            $context['fields'] = get_fields();
        }

        return $context;
    }
    
    public function addToTwig( $twig ): object
    {
        $twig->addFunction( 
            new Twig_Function(
                'getTimberTerms', [$this, 'getTimberTerms']
            )
        );

        $twig->addFunction( 
            new Twig_Function(
                'processParentTerms', [$this, 'processParentTerms']
            )
        );        

        $twig->addFunction(
            new Twig_Function(
                'inlineSvg', [$this, 'inlineSvg']
            )            
        );

        $twig->addFunction( 
            new Twig_Function(
                'getExtension', [$this, 'getExtension']
            )            
        );          

        return $twig;
    }

    public function getTimberTerms($terms): array
    {
        return Timber::get_terms($terms);
    }

    // return full parent terms
    public function processParentTerms($terms_field): array
    {
        $array = [];
        $parent_terms = Timber::get_terms(array('taxonomy' => $terms_field, 'parent' => 0));
        $fields = get_field($terms_field);

        foreach ($parent_terms as $parent_term) {
            if ($fields ) {
                foreach ($fields as $field) {
                    if ($parent_term->term_id === $field->parent) {
                        $array = array_merge($array, [$parent_term]);
                    }
                }
            }
        }
        return array_unique($array);
    }

    public function inlineSvg($url): string
    {
        $path = $this->convertUrlToPath($url);

        return file_get_contents($path);
    }

    private function convertUrlToPath($url): string
    {
        $file_location = substr($url, strpos($url, 'uploads') + 7);
        $uploads_dir = wp_upload_dir();
        $path = $uploads_dir['basedir'] . $file_location;

        return $path;
    }

    public function getExtension($url): string
    {
        $index = getenv('ENVIRONMENT') === 'dev' ? 1 : 2;
        $ext = explode('.', $url)[$index];

        return $ext;
    }
    
    public function addAttributesToScript($tag, $handle): string
    {
        if ('script' !== $handle ) {

            return $tag;
        }

        return str_replace(' src', ' defer src', $tag);
    }
}