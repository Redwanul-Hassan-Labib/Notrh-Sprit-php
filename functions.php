<?php

add_action("wp_enqueue_scripts", "firstphp_enqueue_scripts");

function firstphp_enqueue_scripts() {
    // Bootstrap CSS
    wp_enqueue_style('bootstrap-min-css', get_stylesheet_directory_uri() . '/bootstrap/bootstrap.min.css', array(), '5.3.5', 'all');
    
    // Slick CSS
    wp_enqueue_style('slick-css', get_stylesheet_directory_uri() . '/slick/slick.css', array(), '1.8.1', 'all');
    
    // Slick Theme CSS (Depends on slick-css)
    wp_enqueue_style('slick-theme-css', get_stylesheet_directory_uri() . '/slick/slick-theme.css', array('slick-css'), '1.8.1', 'all');
    
    // Font Awesome CSS
    wp_enqueue_style('font-awesome', get_stylesheet_directory_uri() . '/font-awesome/all.min.css', array(), '6.4.0', 'all');
    
    // Responsive CSS
    wp_enqueue_style('responsive-min-css', get_stylesheet_directory_uri() . '/css/responsive.css', array(), '1.0.0', 'all');

    // popup CSS
    wp_enqueue_style('popup-min-css', get_stylesheet_directory_uri() . './css/popup.css', array(), '1.0.0', 'all');

    // Image resizer CSS
    wp_enqueue_style('image-resizer-min-css', get_stylesheet_directory_uri() . './css/imageREsizer.css', array(), '1.0.0', 'all');

    // Contact CSS
    wp_enqueue_style('contact-min-css', get_stylesheet_directory_uri() . './css/contact.css', array(), '1.0.0', 'all');

    // cocktail_newsletter CSS
    wp_enqueue_style('cocktail-newsletter-css', get_stylesheet_directory_uri() . './css/cocktail_newsletter.css', array(), '1.0.0', 'all');
    
    // Custom Style CSS
    wp_enqueue_style('min-css', get_stylesheet_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');




    // added the Script


       // Custom JS
    wp_enqueue_script( 'min-script', get_template_directory_uri() . './js/script.js', array(), '1.0.0', true );

    // Bootstrap JS
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . './bootstrap/bootstrap.min.js', array(), '5.3.5', true );

      // Slick js
    wp_enqueue_script( 'slick-css-js', get_template_directory_uri() . './slick/slick.min.js', array(), '1.8.1', true );
}

?>