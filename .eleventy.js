module.exports = function (eleventyConfig, options = {}) {
  const id = options.id || 'main-content';
  const text = options.text || 'Jump to main content';

  eleventyConfig.addShortcode("skiplink", function () {
    return `
      <a href="#${id}" 
         style="position: absolute; top: -40px; left: 10px; background: #000; color: #fff; padding: 8px; z-index: 100;"
         onfocus="this.style.top='10px'" 
         onblur="this.style.top='-40px'">
        ${text}
      </a>
    `;
  });
};
