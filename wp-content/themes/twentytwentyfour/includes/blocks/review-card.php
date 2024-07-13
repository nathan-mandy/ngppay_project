<?php

use \Vital\Skeletor_Block;

if (!class_exists('\Vital\Skeletor_Block')) {
    return;
}

class Review_Post_Card extends Skeletor_Block { 
    public static $title = 'Review post card';
    public static $name = 'review_post_card';

    public static $field_group = [
        [
            'label'     => 'Post',
            'type'      => 'post_object',
            'post_type' => 'review_posts',
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
        $featured_image = get_the_post_thumbnail($post,'small');

   
        $block_data['catgeory']  = self::get_post_category($post);
        $block_data['title']     = get_the_title($post);
        $block_data['image'] = $featured_image;
        $block_data['content']   = get_the_excerpt($post);
        $block_data['cta']       = __('Read More');
        $block_data['href'] = get_the_permalink($post); 
        $post_author_id = get_post_field('post_author', $post);
        $post_author_id = get_post_field('post_author', $post);
        $author_name = get_the_author_meta('display_name', $post_author_id);

        // Get post author's image
        $author_image = get_field('author_image', 'user_' . $post_author_id); // Replace 'author_image' with the custom field key storing the author's image

        // If ACF (Advanced Custom Fields) is not available, fall back to default WordPress method
        if (empty($author_image)) {
            $author_avatar = get_avatar_url($post_author_id);
        } else {
            $author_image_url = wp_get_attachment_image_url($author_image, 'thumbnail');
            $author_avatar = ($author_image_url) ? $author_image_url : get_avatar_url($post_author_id);
        }

        $block_data['author_name'] = $author_name;
        $block_data['author_avatar'] = $author_avatar;
        return $block_data;
    }

}

add_action('after_setup_theme', ['Review_Post_Card', 'init']);