<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/dh_q3buk8/johnic32.dreamhosters.com/wp-content/plugins/wp-super-cache/' );
define('DB_NAME', 'johnic32_dreamhosters_co');

/** MySQL database username */
define('DB_USER', 'johnic32dreamhos');

/** MySQL database password */
define('DB_PASSWORD', 'mnCbGtMb');

/** MySQL hostname */
define('DB_HOST', 'mysql.johnic32.dreamhosters.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '"Qcr96@C;HFPC*xD1lLMQKNPIMXtQ&nEt2IMY10$c$8EA/1^8a|bF4QvxGpnoi4Q');
define('SECURE_AUTH_KEY',  '(vq3Z)ldlS!o2aVW3W*!$Mh*foe~q!wXp4_ReV|G2tDnRe!i"4|Hynv+;yqG#Cef');
define('LOGGED_IN_KEY',    '7o&nI%VNqo5l6X(GkU)UN~|*F?3*k!No#;)w~)&o7R;C__xSL`g072P`4kOLGrGu');
define('NONCE_KEY',        '3&"j6EVbrq6eOH~v~zZa/O$~5A7S~4!Vj%cbd~LDUwA%%bqlG^|0~*5nCc/g#%e$');
define('AUTH_SALT',        'UyEK""C|FFb9;+Vb(pa08L%/u:/FjbIZBZo|8Mv;M1kaP*zZKDSm&Q0ZMw+C3#:&');
define('SECURE_AUTH_SALT', '#V_MULY5A@%a5%+x6?x43&BxGgUBJWL`MOe5aVTT"fC3":8hPI/;9~OOiG%*_t"5');
define('LOGGED_IN_SALT',   ')+ju`*TP?NtfQG46cl3%eBcM9lUBc*qU5i2MC`YR:%c&/MDjVRqrYD_|N+v_|x;p');
define('NONCE_SALT',       'qIwjU%2x0%t%Xy/@p8DbL"e+BAeg_Jrfrhj^/Y:XymXr~k6coVJ0EK#+N*P5eu3m');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_ugdbfn_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

define('DISABLE_WP_CRON', true);
/**
 * Removing this could cause issues with your experience in the DreamHost panel
 */

if (preg_match("/^(.*)\.dream\.website$/", $_SERVER['HTTP_HOST'])) {
        $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        define('WP_SITEURL', $proto . '://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME',    $proto . '://' . $_SERVER['HTTP_HOST']);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

