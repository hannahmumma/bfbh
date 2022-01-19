<?php

/**
 * @package    BFBH 
 * @subpackage CustomPostTypes\CustomPostType
 * @version    1.0.0 
 */
namespace BFBH\CustomPostTypes;

class CustomPostType
{
    protected $slug                = "custom-post-type-slug";
    protected $singular_name       = "Custom Post Type Name";
    protected $plural_name         = "Custom Post Type Names";
    protected $public              = true;
    protected $publicly_queryable  = true;
    protected $show_ui             = true;
    protected $show_in_menu        = true;
    protected $query_var           = true;
    protected $capability_type     = "post";
    protected $has_archive         = true;
    protected $hierarchical        = true;
    protected $menu_position       = null;
    protected $menu_icon           = "dashicons-admin-post";
    protected $supports            = [ "title", "editor", "thumbnail" ];
    protected $taxonomies          = [];
    protected $show_in_rest        = true;
    protected $with_front          = true;

    public function __construct()
    {
        $this->register();
    }

    private function register()
    {
        $labels = [
            "name"              => $this->plural_name,
            "singular_name"        => $this->singular_name,
        ];

        $args = apply_filters(
            'bfbh_cpt_register_args', [
            "labels"             => $labels,
            "public"             => $this->public,
            "publicly_queryable" => $this->publicly_queryable,
            "show_ui"            => $this->show_ui,
            "show_in_menu"       => $this->show_in_menu,
            "query_var"          => $this->query_var,
            "rewrite"            => ["slug" => $this->slug, "with_front" => $this->with_front],
            "capability_type"    => $this->capability_type,
            "has_archive"        => $this->has_archive,
            "hierarchical"       => $this->hierarchical,
            "menu_position"      => $this->menu_position,
            "menu_icon"          => $this->menu_icon,
            "supports"           => $this->supports,
            "taxonomies"         => $this->taxonomies,
            "show_in_rest"       => $this->show_in_rest,
            ], $this->slug 
        );

        register_post_type($this->slug, $args);
    }
}
