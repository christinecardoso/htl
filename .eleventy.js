const fs = require('fs');
const mapPlugin = require('eleventy-plugin-googlestaticmaps');
const GOOGLE_MAPS_KEY = 'AIzaSyApXjqPtmM7cm78vdnfydAN79k9PNQUpjQ';

module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // Static assets to pass through
  config.addPassthroughCopy('./src/images');
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
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid', 'njk'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
