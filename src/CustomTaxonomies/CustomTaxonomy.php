<?php

/**
 * @package    BFBH 
 * @subpackage CustomTaxonomies\CustomTaxonomy
 * @version    1.0.0
 */

namespace BFBH\CustomTaxonomies;

class CustomTaxonomy
{
    protected $slug              = 'taxonomy-slug';
    protected $singular_name     = 'Taxonomy Name';
    protected $plural_name       = 'Taxonomy Names';
    protected $objects           = [];
    protected $hierarchical      = true;
    protected $show_ui           = true;
    protected $show_admin_column = true;
    protected $query_var         = true;
    protected $show_in_rest      = true;

    public function __construct()
    {
        $this->register();
    }

    private function register()
    {
        
        $labels = [
            'name'              => $this->plural_name,
            'singular_name'     => $this->singular_name,
        ];

        $args = apply_filters(
            'bfbh_taxonomy_args', [
            'labels'            => $labels,
            'hierarchical'      => $this->hierarchical,
            'show_ui'           => $this->show_ui,
            'show_admin_column' => $this->show_admin_column,
            'query_var'         => $this->query_var,
            'rewrite'           => ['slug' => $this->slug],
            'show_in_rest'      => $this->show_in_rest
            ], $this->slug
        );

        register_taxonomy($this->slug, $this->objects, $args);
    }
}