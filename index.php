<?php

$context = Timber::context();
$context['post'] = Timber::get_post();
$context['override_page_title'] = get_field('override_page_title');
$context['is_hero'] = get_field('is_hero');

Timber::render('pages/index.twig', $context);
