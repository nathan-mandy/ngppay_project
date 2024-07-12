<?php

use \Vital\Skeletor_Block;

if (!class_exists('\Vital\Skeletor_Block')) {
    return;
}

class Blog_Post_Card extends Skeletor_Block { 
    public static $title = 'Blog post card';
    public static $name = 'blog_post_card';

    public static $block_settings = [
        'description' => 'An accordion to display a series of posts.',
    ];
    
}

add_action('after_setup_theme', ['Blog_Post_Card', 'init']);