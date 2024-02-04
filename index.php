<?php
require_once('./php/xsrf.php');

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
setXsrfCookie();
?>
<!doctype html>
<html lang="en">
  <head>
    <title>Deep Dive Dylan</title>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/deepdivedylan.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="I am Deep Dive Dylan, a web developer with a great passion for elegant code, efficient backends, cybersecurity, and Star Trek.">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://www.deepdivedylan.io">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Deep Dive Dylan">
    <meta property="og:description" content="I am Deep Dive Dylan, a web developer with a great passion for elegant code, efficient backends, cybersecurity, and Star Trek.">
    <meta property="og:image" content="https://www.deepdivedylan.io/images/deepdivedylan-opengraph.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="deepdivedylan.io">
    <meta property="twitter:url" content="https://www.deepdivedylan.io">
    <meta name="twitter:title" content="Deep Dive Dylan">
    <meta name="twitter:description" content="I am Deep Dive Dylan, a web developer with a great passion for elegant code, efficient backends, cybersecurity, and Star Trek.">
    <meta name="twitter:image" content="https://www.deepdivedylan.io/images/deepdivedylan-opengraph.png">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
