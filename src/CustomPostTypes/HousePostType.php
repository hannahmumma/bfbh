<?php

/**
 * @package    BFBH 
 * @subpackage CustomPostTypes\HousePostType
 * @version    1.0.0 
 */

namespace BFBH\CustomPostTypes;

use BFBH\CustomPostTypes\CustomPostType;

class HousePostType extends CustomPostType
{
    public $slug             = 'house';
    public $singular_name     = 'House';
    public $plural_name     = 'Houses';
    public $menu_position      = 4;  
    public $menu_icon         = 'dashicons-admin-home';
}
