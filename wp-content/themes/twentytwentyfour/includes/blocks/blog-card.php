<?php

use \Vital\Skeletor_Block;

if (!class_exists('\Vital\Skeletor_Block')) {
    return;
}

class Blog_Post_Card extends Skeletor_Block { 
    public static $title = 'Blog post card';
    public static $name = 'blog_post_card';

    public static $field_group = [
        [
            'label'     => 'Post',
            'type'      => 'post_object',
            'post_type' => 'blog_posts',
        ],
    ];

    public static function get_post_category($post) {
        $taxonomies = get_object_taxonomies($post->post_type);
        $post_category = wp_get_post_terms( $post->ID, $taxonomies, array( 'fields' => 'all' ) );

        if ($category = array_pop($post_category)) {
            return $category->name;
        } else {
            return $post->post_type;
        }
    }
    public static $block_settings = [
        'description' => 'An accordion to display a series of FAQ posts.',
	];

     public static function before_render($block_data) {

        $post = $block_data['post'];
        $featured_image = get_the_post_thumbnail($post,'large');

   
        $block_data['catgeory']  = self::get_post_category($post);
        $block_data['title']     = get_the_title($post);
        $block_data['image'] = $featured_image;
        $block_data['content']   = get_the_excerpt($post);
        $block_data['cta']       = __('Continue Reading');
        $block_data['href'] = get_the_permalink($post); 
        return $block_data;
    }

}

add_action('after_setup_theme', ['Blog_Post_Card', 'init']);