<?php

/**
 * Decoupled WordPress API Routes
 *
 * https://www.smashingmagazine.com/2018/10/headless-wordpress-decoupled/#improving-performance-decoupled-json-approach
 */
require_once(dirname(__FILE__) .'/wp-config-simple.php');

header('Access-Control-Allow-Origin: *');

// Check for cache
get_page_cache_name_by_slug($post_slug, $post_type);

// Return error on false.
if ($cache === false) {
	wp_send_json('Error, this image does not exist or it is not cached correctly. Please try rebuilding cache and try again!');
}

// Decode json for output.
wp_send_json(json_decode($cache));