const mix = require("laravel-mix");

mix.disableSuccessNotifications();
mix.setPublicPath("./public/");

mix.js("src/editor.js", "dist/js");

if (mix.inProduction()) {
  mix.version();
}
