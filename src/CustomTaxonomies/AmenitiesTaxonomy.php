<?php

/**
 * @package    BFBH 
 * @subpackage CustomTaxonomies\CustomTaxonomy
 * @version    1.0.0
 */

namespace BFBH\CustomTaxonomies;

use Timber;
use BFBH\CustomTaxonomies\CustomTaxonomy;

class AmenitiesTaxonomy extends CustomTaxonomy
{
    public $slug = 'amenities';
    public $singular_name = 'Amenity';
    public $plural_name = 'Amenities';
    public $objects = ['house'];
    public $icon = '';
}