<?php

/**
 * @package    BFBH 
 * @subpackage Managers\GutenbergManager
 * @version    1.0.0 
 */
namespace BFBH\Managers;

class GutenbergManager
{
    private $full_width = '';
    private $allowed_core_blocks = [
        'core/audio',
        'core/button',
        'core/embed',
        'core/file',
        'core/heading',
        'core/html',
        'core/image',
        'core/list',
        'core/media-text',
        'core/paragraph',
        'core/pullquote',
        'core/quote',
        'core/separator',
        'core/subhead',
        'core/video',
    ];

    /**
     * @method run    initialize
     * @return void
     */
    public function run(): void
    {    
        add_action('enqueue_block_editor_assets', [$this, 'enqueueBlocksScripts']);
        add_filter('script_loader_tag', [$this, 'addScriptAttributes'], 10, 3);
        add_action('init', [$this, 'registerBlocks']);
        add_action('acf/init', [$this, 'initAcfBlocks']);
        add_filter('block_categories_all', [$this, 'addBlockCategories'], 10, 2);
        add_filter('allowed_block_types_all', [$this,'setAllowedBlocks']);
        add_filter('use_block_editor_for_post', [$this,'disableBlockEditor'], 10, 2);
    }

    public function enqueueBlocksScripts(): void
    {
        wp_register_script('bfbh-blocks', get_template_directory_uri() . '/assets/dist/js/blocks.js', []);
        wp_enqueue_script('bfbh-blocks', get_stylesheet_directory_uri() . '/assets/dist/js/blocks.js', []);
    }

    public function addScriptAttributes($tag, $handle, $src): string
    {
        if ('bfbh-blocks' !== $handle ) {
            return $tag;
        }

        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';

        return $tag;
    }

    public function registerBlocks(): void
    {
        if (!function_exists('register_block_type') ) {
            return;
        }

        register_block_type(
            'bfbh/hero-block', array(
            'editor-script' => 'bfbh-blocks'
            )
        );
    }

    /**
     * @method registerAcfBlocks    register blocks
     * @return void
     */    
    public function initAcfBlocks()
    {      
        new \BFBH\AcfBlocks\AccordionBlock();
        new \BFBH\AcfBlocks\AmenitiesBlock();
        new \BFBH\AcfBlocks\AvailabilityBlock();
        new \BFBH\AcfBlocks\GoogleCalendarBlock();
        new \BFBH\AcfBlocks\GoogleMapBlock();
        new \BFBH\AcfBlocks\ImageTextBlock();
        new \BFBH\AcfBlocks\SliderBlock();
    }

    public function addBlockCategories($block_categories, $editor_context): ?array
    {
        if (!$editor_context->post) {
            return null;
        }

        $bfbh_category = [
            'slug'  => 'bfbh-blocks',
            'title' => 'BFBH Blocks',
            'icon'  => null,
        ];

        $categories = [];
        $categories[0] = $bfbh_category;

        foreach ($block_categories as $category) {
            $categories[] = $category;
        }

        return $categories;
    }
    
    /**
     * @method allowed                  enables certain blocks in the Gutenberg editor
     * @param  array $allowed_blocks list of allowed blocks
     * @return array                    list of allowed blocks
     */
    public function setAllowedBlocks($allowed_blocks): array
    {
        $custom_blocks = [
            'acf/accordion-block',
            'acf/amenities-block',
            'acf/availability-block',
            'acf/google-calendar-block',
            'acf/google-map-block',
            'acf/image-text-block',
            'acf/slider-block',
            'bfbh/hero-block',
        ];

        $allowed_blocks = array_merge($custom_blocks, $this->allowed_core_blocks);

        return $allowed_blocks;
    }

    public function disableBlockEditor($use_block_editor, $post): bool
    {
        $disable_on_posts = [];

        return $use_block_editor;
    }
}
