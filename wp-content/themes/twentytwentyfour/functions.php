<?php
/**
 * Twenty Twenty-Four functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Twenty Twenty-Four
 * @since Twenty Twenty-Four 1.0
 */

/**
 * Register block styles.
 */

$includes = sprintf('%s/includes', get_template_directory());
$inc = sprintf('%s/includes/', get_stylesheet_directory());
$blocks = sprintf('%s/blocks/', $inc);


require $includes . '/enqueuer.php';
require_once $blocks . 'blog-card.php';



function custom_register_blog_posts_cpt() {
    $labels = array(
        'name'               => 'Blog Posts',
        'singular_name'      => 'Blog Post',
        'add_new'            => 'Add Blog Posts',
        'add_new_item'       => 'Add New Blog Posts',
        'edit_item'          => 'Edit Blog Posts',
        'new_item'           => 'New Blog Posts',
        'view_item'          => 'View Blog Posts',
        'search_items'       => 'Search Blog Posts',
        'not_found'          => 'No Blog Posts found',
        'not_found_in_trash' => 'No Blog Posts found in Trash',
        'parent_item_colon'  => '',
        'menu_name'          => 'Blog Posts'
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-welcome-write-blog',
        'rewrite'             => array('slug' => 'blog_posts'),
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'),
    );

    register_post_type('blog_posts', $args);
}
add_action('init', 'custom_register_blog_posts_cpt');

// Register Custom Taxonomy
function custom_register_taxonomy() {

    $labels = array(
        'name'                       => 'category',
        'singular_name'              => 'category',
        'menu_name'                  => 'category',
        'all_items'                  => 'All category',
        'parent_item'                => 'Parent category',
        'parent_item_colon'          => 'Parent category:',
        'new_item_name'              => 'New category Name',
        'add_new_item'               => 'Add New category',
        'edit_item'                  => 'Edit category',
        'update_item'                => 'Update category',
        'view_item'                  => 'View category',
        'separate_items_with_commas' => 'Separate category with commas',
        'add_or_remove_items'        => 'Add or remove category',
        'choose_from_most_used'      => 'Choose from the most used',
        'popular_items'              => 'Popular category',
        'search_items'               => 'Search category',
        'not_found'                  => 'Not Found',
        'no_terms'                   => 'No genres',
        'items_list'                 => 'category list',
        'items_list_navigation'      => 'category list navigation',
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true, // true for categories, false for tags
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'category', array( 'blog_posts' ), $args );

}
add_action( 'init', 'custom_register_taxonomy', 0 );



function custom_register_review_posts_cpt() {
    $labels = array(
        'name'               => 'Review Posts',
        'singular_name'      => 'Review Post',
        'add_new'            => 'Add Review Posts',
        'add_new_item'       => 'Add New Review Posts',
        'edit_item'          => 'Edit Review Posts',
        'new_item'           => 'New Review Posts',
        'view_item'          => 'View Review Posts',
        'search_items'       => 'Search Review Posts',
        'not_found'          => 'No Review Posts found',
        'not_found_in_trash' => 'No Review Posts found in Trash',
        'parent_item_colon'  => '',
        'menu_name'          => 'Review Posts'
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'menu_icon'           => 'dashicons-welcome-write-blog',
        'rewrite'             => array('slug' => 'review_posts'),
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'comments'),
    );

    register_post_type('review_posts', $args);
}
add_action('init', 'custom_register_review_posts_cpt');

// Register Custom Taxonomy
function custom_customer_taxonomy() {

    $labels = array(
        'name'                       => 'Customers',
        'singular_name'              => 'customer',
        'menu_name'                  => 'Customers',
        'all_items'                  => 'All Customers',
        'parent_item'                => 'Parent Customers',
        'parent_item_colon'          => 'Parent Customers:',
        'new_item_name'              => 'New Customers Name',
        'add_new_item'               => 'Add New Customers',
        'edit_item'                  => 'Edit Customers',
        'update_item'                => 'Update Customers',
        'view_item'                  => 'View Customers',
        'separate_items_with_commas' => 'Separate Customers with commas',
        'add_or_remove_items'        => 'Add or remove Customers',
        'choose_from_most_used'      => 'Choose from the most used',
        'popular_items'              => 'Popular Customers',
        'search_items'               => 'Search Customers',
        'not_found'                  => 'Not Found',
        'no_terms'                   => 'No Customers',
        'items_list'                 => 'Customers list',
        'items_list_navigation'      => 'Customers list navigation',
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true, // true for categories, false for tags
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'customers', array( 'review_posts' ), $args );

}
add_action( 'init', 'custom_customer_taxonomy', 0 );




  

if ( ! function_exists( 'twentytwentyfour_block_styles' ) ) :
	/**
	 * Register custom block styles
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_styles() {

		register_block_style(
			'core/details',
			array(
				'name'         => 'arrow-icon-details',
				'label'        => __( 'Arrow icon', 'twentytwentyfour' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
				.is-style-arrow-icon-details {
					padding-top: var(--wp--preset--spacing--10);
					padding-bottom: var(--wp--preset--spacing--10);
				}

				.is-style-arrow-icon-details summary {
					list-style-type: "\2193\00a0\00a0\00a0";
				}

				.is-style-arrow-icon-details[open]>summary {
					list-style-type: "\2192\00a0\00a0\00a0";
				}',
			)
		);
		register_block_style(
			'core/post-terms',
			array(
				'name'         => 'pill',
				'label'        => __( 'Pill', 'twentytwentyfour' ),
				/*
				 * Styles variation for post terms
				 * https://github.com/WordPress/gutenberg/issues/24956
				 */
				'inline_style' => '
				.is-style-pill a,
				.is-style-pill span:not([class], [data-rich-text-placeholder]) {
					display: inline-block;
					background-color: var(--wp--preset--color--base-2);
					padding: 0.375rem 0.875rem;
					border-radius: var(--wp--preset--spacing--20);
				}

				.is-style-pill a:hover {
					background-color: var(--wp--preset--color--contrast-3);
				}',
			)
		);
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfour' ),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/WordPress/gutenberg/issues/51480
				 */
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
		register_block_style(
			'core/navigation-link',
			array(
				'name'         => 'arrow-link',
				'label'        => __( 'With arrow', 'twentytwentyfour' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			)
		);
		register_block_style(
			'core/heading',
			array(
				'name'         => 'asterisk',
				'label'        => __( 'With asterisk', 'twentytwentyfour' ),
				'inline_style' => "
				.is-style-asterisk:before {
					content: '';
					width: 1.5rem;
					height: 3rem;
					background: var(--wp--preset--color--contrast-2, currentColor);
					clip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');
					display: block;
				}

				/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue */
				.is-style-asterisk:empty:before {
					content: none;
				}

				.is-style-asterisk:-moz-only-whitespace:before {
					content: none;
				}

				.is-style-asterisk.has-text-align-center:before {
					margin: 0 auto;
				}

				.is-style-asterisk.has-text-align-right:before {
					margin-left: auto;
				}

				.rtl .is-style-asterisk.has-text-align-left:before {
					margin-right: auto;
				}",
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_styles' );

/**
 * Enqueue block stylesheets.
 */

if ( ! function_exists( 'twentytwentyfour_block_stylesheets' ) ) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_stylesheets() {
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'twentytwentyfour-button-style-outline',
				'src'    => get_parent_theme_file_uri( 'assets/css/button-outline.css' ),
				'ver'    => wp_get_theme( get_template() )->get( 'Version' ),
				'path'   => get_parent_theme_file_path( 'assets/css/button-outline.css' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_stylesheets' );

/**
 * Register pattern categories.
 */

if ( ! function_exists( 'twentytwentyfour_pattern_categories' ) ) :
	/**
	 * Register pattern categories
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfour_page',
			array(
				'label'       => _x( 'Pages', 'Block pattern category', 'twentytwentyfour' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfour' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_pattern_categories' );
