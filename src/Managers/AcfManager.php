<?php

/**
 * @package    BFBH 
 * @subpackage Managers\AcfManager
 * @version    1.0.0
 */
namespace BFBH\Managers;

class AcfManager
{
    /**
     * @method run    initialize
     * @return void
     */            
    public function run():void
    {
        add_action('acf/init', [$this, 'registerOptionsPage'], 1, 3);
    }

    /**
     * @method registerOptionsPage    add options page to WP admin
     * @return void
     */    
    public function registerOptionsPage(): void
    {
        if (!function_exists('acf_add_options_page') ) {
            return;
        }

        $settings = [
            'page_title'        => 'Global Settings',
            'menu_title'        => 'Global Settings',
            'menu_slug'            => 'global-settigns',
            'position'          => '2',            
            'icon_url'          => 'dashicons-admin-site',
        ];

        acf_add_options_page($settings);
    }   
}
