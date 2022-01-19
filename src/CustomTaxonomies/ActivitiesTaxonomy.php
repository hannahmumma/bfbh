<?php

/**
 * @package    BFBH 
 * @subpackage CustomTaxonomies\CustomTaxonomy
 * @version    1.0.0
 */

namespace BFBH\CustomTaxonomies;

use Timber;
use BFBH\CustomTaxonomies\CustomTaxonomy;

class ActivitiesTaxonomy extends CustomTaxonomy
{
    public $slug = 'activities';
    public $singular_name = 'Activity';
    public $plural_name = 'Activities';
    public $objects = ['house'];
    public $icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>canoe</title><g id="budicon-canoe"><path d="M9,17a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V13H9Zm1-3h2v3H10Zm10.8721,9.1655L16.2313,18.009A19.64,19.64,0,0,0,17,12.5C17,6.48,14.4486,1.4365,11,0,8.785.9227,6.9449,3.3378,5.9084,6.5394L2.8721,3.1655a.5.5,0,0,0-.7441.6689L5.5848,7.6756A19.9065,19.9065,0,0,0,5,12.5C5,18.52,7.5514,23.5635,11,25c2.0643-.86,3.8017-3.0181,4.8682-5.8986l4.26,4.733a.5.5,0,0,0,.7441-.6689ZM11,23.8965C8.08,22.3716,6,17.6836,6,12.5a18.9741,18.9741,0,0,1,.4067-3.9111l2.7671,3.0746a.5.5,0,0,0,.7441-.6689L6.6989,7.4177c.8439-2.96,2.39-5.3163,4.3011-6.3142C13.92,2.6284,16,7.3164,16,12.5S13.92,22.3716,11,23.8965Z"/></g></svg>';
}