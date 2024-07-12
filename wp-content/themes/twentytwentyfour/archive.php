<?php
$args = array(
    'post_type' => array( 'post', 'blog_posts' ), // Include both post and your CPT
    'posts_per_page' => 10
);
$custom_posts = new WP_Query( $args );

if ( $custom_posts->have_posts() ) :
    while ( $custom_posts->have_posts() ) : $custom_posts->the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <h2 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
            </header><!-- .entry-header -->

            <div class="entry-content">
                <?php the_excerpt(); ?>
            </div><!-- .entry-content -->

            <footer class="entry-footer">
                <?php
                // Display taxonomy terms (Customers)
                $terms = get_the_terms( get_the_ID(), 'customers' ); // Replace 'customers' with your taxonomy slug
                echo '<pre>';
                print_r($terms); // Debugging output
                echo '</pre>';

                if ( $terms && ! is_wp_error( $terms ) ) :
                    echo '<div class="entry-terms">';
                    echo '<span class="entry-terms-label">Customers: </span>';
                    $term_links = array();
                    foreach ( $terms as $term ) {
                        $term_links[] = '<a href="' . get_term_link( $term ) . '">' . $term->name . '</a>';
                    }
                    echo implode( ', ', $term_links );
                    echo '</div>';
                else :
                    echo 'No customers found.'; // Error handling
                endif;
                ?>
            </footer><!-- .entry-footer -->
        </article><!-- #post-<?php the_ID(); ?> -->
        <?php
    endwhile;
    wp_reset_postdata();
else :
    echo 'No posts found.';
endif;
?>
