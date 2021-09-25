<?php

$options['dump-dir'] = '/home/rcpi/dark/backup';
$options['result-file'] = TRUE;

// Add tables to structure-only list
// Set default if it doesn't exist. Copied from example.drushrc.php
if (!isset($options['structure-tables']['common'])) {
$options['structure-tables']['common'] = array('cache', 'cache_filter', 'cache_menu', 'cache_page', 'history', 'sessions', 'watchdog');
}

$options['structure-tables']['common'] = array_merge($options['structure-tables']['common'], array(
  'cache_admin_menu',
  'cache_block',
  'cache_bootstrap',
  'cache_field',
  'cache_form',
  'cache_image',
  'cache_l10n_update',
  'cache_libraries',
  'cache_token',
  'cache_update',
  'cache_variable',
  'cache_views',
  'cache_views_data',
  )
);

// By default don't download the search index tables though
$options['structure-tables']['common'] = array_merge($options['structure-tables']['common'], array(
  'search_dataset',
  'search_index',
  'search_total',
));
