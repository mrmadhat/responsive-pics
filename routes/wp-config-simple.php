<?php
/**
 * Create simple wp configuration for Rest API routes
 *
 * @since 1.6.0
 */

define('SHORTINIT', true);

if (!isset($_SERVER['DOCUMENT_ROOT'])) {
	return;
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/wp/wp-load.php';