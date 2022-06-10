const fs = require('fs');
const mapPlugin = require('eleventy-plugin-googlestaticmaps');
const GOOGLE_MAPS_KEY = 'AIzaSyApXjqPtmM7cm78vdnfydAN79k9PNQUpjQ';
const Image = require('@11ty/eleventy-img');
const path = require('path');
const outdent = require("outdent");

// const isDev = process.env.ELEVENTY_ENV === 'development';
const baseUrl = `https://coupon.hometownlube.com/`;

/** Given a local or remote image source, returns the absolute URL
 * to the image that will eventually get generated once the site is built.
 * @param {string} src The full path to the source image.
 * @param {null|number} width The width of the image whose URL we want to return.
 */

/**
* Prefixes the given URL with the site's base URL.
* @param {string} url
*/
const toAbsoluteUrl = (url) => {
  return new URL(url, baseUrl).href;
}

const toAbsoluteImageUrl = async (src, width = null) => {
  const imageOptions = {
    // We only need the original width and format
    widths: [width],
    formats: [null],
    // Where the generated image files get saved
    outputDir: './_site/assets/',
    // Public URL path that's referenced in the img tag's src attribute
    urlPath: '/assets/',
  };
  const stats = await Image(src, imageOptions);
  const imageUrl = Object.values(stats)[0][0].url;
  return toAbsoluteUrl(imageUrl);
};

async function imageShortcode(src, alt, sizes='', classattr='') {

  let metadata = await Image(src, {
    widths: [25, 320, 640, 960, 1200, 1800, 2400],
    formats: ["webp", "avif","jpeg"],
    urlPath: "/assets/",
    outputDir: "./_site/assets/",
  });

  let imageAttributes = {
    alt,
    sizes,
    class: classattr,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

async function imageUrlOnlyShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [960, 1800],
    formats: ["webp","avif", "jpeg"],
    urlPath: "/assets/",
    outputDir: "./_site/assets/",
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return highsrc.url;
}

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  config.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  config.addFilter('toAbsoluteImageUrl', toAbsoluteImageUrl);
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addShortcode('image', imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);

  config.addShortcode('imageUrl', imageUrlOnlyShortcode);
  config.addLiquidShortcode('imageUrl', imageUrlOnlyShortcode);
  config.addNunjucksAsyncShortcode('imageUrl', imageUrlOnlyShortcode);
  config.addJavaScriptFunction('imageUrl', imageUrlOnlyShortcode);

  // Static assets to pass through
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/assets');
  config.addPassthroughCopy('./src/public');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/scripts');
  config.addPassthroughCopy('./src/main.js');

  config.addPlugin(mapPlugin, {
		key:GOOGLE_MAPS_KEY
	});

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
    baseUrl: baseUrl,
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid', 'njk'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
