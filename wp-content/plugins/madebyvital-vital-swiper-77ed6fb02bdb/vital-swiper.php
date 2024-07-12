<?php

/**
 * Plugin Name:       Vital Swiper
 * Description:       Powered by Swiper JS and love.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.7
 * Author:            Vital
 * Author URI:        https://vitaldesign.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 */

defined('ABSPATH') || exit;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_slider_block_init() {
    register_block_type(__DIR__ . '/build/slide');
    register_block_type(__DIR__ . '/build/slider');
}
add_action('init', 'create_block_slider_block_init');

define('VITAL_SWIPER_VERSION', '1.0.7');

if (!class_exists('Skeletor\Plugin_Updater')) {
    require_once(__DIR__ . '/class--plugin-updater.php');
}

$updater = new Skeletor\Plugin_Updater(
    plugin_basename(__FILE__),
    VITAL_SWIPER_VERSION,
    'https://bitbucket.org/madebyvital/vital-swiper/raw/HEAD/package.json'
);
