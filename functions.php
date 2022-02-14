<?php

require_once 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$timber = new Timber\Timber();
Timber::$dirname = ['views'];

add_action('after_setup_theme', 'bfbh_theme_setup');

function bfbh_theme_setup(): void
{
    (new BFBH\Managers\AcfManager)->run();
    (new BFBH\Managers\ThemeManager)->run();
    (new BFBH\Managers\GutenbergManager)->run();
    (new BFBH\Managers\WordPressManager)->run();
    new BFBH\Services\MailService();
}
