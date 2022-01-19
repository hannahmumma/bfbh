<?php
/**
 * Template Name: Single House
 *
 */

$context = Timber::context();
$context['post'] = Timber::get_post();

Timber::render('pages/single.twig', $context);

