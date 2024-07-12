<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ngppay_project' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fE4iz4T3jd?FQCC*Xf~+B4.cHeF<0qh2`:3w3g+p+eKL?;tCRm%d+XB-z&ko_b~X' );
define( 'SECURE_AUTH_KEY',  'Z[r<k]h.4% 0Ub5q0@-W-O(!RoY0w?9?eWP+M^g*Am|:f{V6fnV&oe-<1KO-?kO<' );
define( 'LOGGED_IN_KEY',    'e@c?y]9rrHq&6sSBI.SK,QcoJjzuP)Whfeu&4Y`NbU~RV:R+CrU}hK3Mt-_~Tn{}' );
define( 'NONCE_KEY',        '_3(B>mK^oc[g+DfZfN !56_p5$V*cv>4?/j]gGl,Ayw3Xh?^%a)O/Fly6uaOlXI6' );
define( 'AUTH_SALT',        'yF[i[#MOVZBe2b<PUmWuv2>:^+qz^@|rk;*:7L([i4Z]B2fJN@*y;I0Y8eIg.h]!' );
define( 'SECURE_AUTH_SALT', '8TKmQAF=M^@P7u=yYHW&`pNgE *b^|O{,.e@=55Nx:#Yq7~+^2ES*r S%O.i9- .' );
define( 'LOGGED_IN_SALT',   '9P2#r~,ydqO:j~l7vqZ9:JK2,fB5Ls31+J>v-VHUG<guc)3B%G?)w?;W5VAx4wRK' );
define( 'NONCE_SALT',       'MASgw&f#Ae@LkoDl:}hyAg9#MZQ(VEX7~Z[aozq(OE`56hzg)v@4upO>(a@?v([e' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true); // Enable Debug logging to the /wp-content/debug.log file
define('WP_DEBUG_DISPLAY', true); // Disable display of errors by WP
@ini_set('display_errors', 1);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
