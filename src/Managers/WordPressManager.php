<?php

/**
 * @package    BFBH 
 * @subpackage Managers\WordPressManager
 * @version    1.0.0 
 */
namespace BFBH\Managers;

class WordPressManager
{
    
    public function run():void
    {
        add_filter('wp_check_filetype_and_ext', [$this, 'fileTypes'], 10, 4);
        add_filter('upload_mimes', [$this, 'mimeTypes']);
        add_action('wp_default_scripts', [$this, 'removeJQueryMigrate'], 999);        
        add_filter('show_admin_bar', [$this, 'disableAdminFromFrontEnd']);
    }

    public function deregister(): void
    {
        wp_deregister_style('wp-block-library');
    }    

    public function fileTypes($data, $file, $filename, $mimes): array
    {
        $filetype = wp_check_filetype($filename, $mimes);

        return [
            'ext'             => $filetype['ext'],
            'type'            => $filetype['type'],
            'proper_filename' => $data['proper_filename']
        ];
    }

    public function mimeTypes($mimes)
    {
        $mimes['svg'] = 'image/svg+xml';

        return $mimes;
    }

    public function removeJQueryMigrate( $scripts ) 
    {
        if (! is_admin() && isset($scripts->registered['jquery']) ) {
            $script = $scripts->registered['jquery'];
            
            if ($script->deps ) { 
                $script->deps = array_diff($script->deps, array( 'jquery-migrate' ));
            }
        }
    }

    public function disableAdminFromFrontEnd()
    {
        if (is_blog_admin()) {
            return true;
        }

        return false;
    }

}