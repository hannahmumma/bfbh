<?php

/**
 * @package    BFBH 
 * @subpackage AcfBlocks\AcfBlock
 * @version    1.0.0
 */
namespace BFBH\AcfBlocks;

use Timber;

class AcfBlock
{
    /** 
     * @var string $slug block slug
     */    
    protected $slug = '';

    /** 
     * @var string $title block title
     */        
    protected $title = '';

    /** 
     * @var string $description block description
     */        
    protected $description = '';

    /** 
     * @var string $category block category
     */
    protected $category = 'bfbh-blocks';

    /** 
     * @var string $icon block icon
     */
    protected $icon = '';

    /** 
     * @var array $keywords block keywords
     */    
    protected $keywords = [];

    /** 
     * @var string $mode block mode
     */
    protected $mode = 'edit';

    /** 
     * @var array $default_context block context
     */
    protected $default_context = [];

    
    public function __construct()
    {
        $this->keywords = array_merge(['custom', 'bfbh'], $this->keywords);
        $this->register();
    }

    protected function register()
    {
        if (!function_exists('acf_register_block_type') ) {
            return;
        }

        $settings = apply_filters(
            'acf_block_args', [
                'name'            => $this->slug,
                'title'           => $this->title,
                'description'     => $this->description,
                'render_callback' => [$this, 'render'],
                'category'        => $this->category,
                'icon'            => $this->icon,
                'keywords'        => $this->keywords,
                'mode'            => $this->mode,    
                'supports'        => [
                    'align'             => false,
                    'anchor'            => true,
                    'customClassName'   => true,
                    'jsx'               => true,
                ],
            ], $this->slug
        );

        acf_register_block_type($settings);
    }

    public function render($block, $content = '', $is_preview = false)
    {
        $slug = $this->slug;
        $context = $this->processContext($block, $content = '', $is_preview);
        $templates = apply_filters(
            'acf_block_templates', [
            "blocks/{$slug}.twig"
            ], $slug, $context
        );

        Timber::render($templates, $context);
    }

    public function processContext($block, $content = '', $is_preview = false)
    {
        $context = $this->default_context;
        $context['block'] = $block;
        $context['is_preview'] = $is_preview;    
        $context['block_fields'] = get_fields();
        $context['options'] = get_fields('option');
        $context['google_api_key'] = getenv('GOOGLE_API_KEY');
        
        return apply_filters('acf_block_context', $context, $this->slug);
    }
}
