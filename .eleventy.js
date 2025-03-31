module.exports = function (eleventyConfig, options = {}) {

const id = options.id || 'main-content'
const text = options.text || 'Jump to main content'

  eleventyConfig.addShortcode("skiplink", function () {
    return `
        <style>
          .skip-link {
              position: absolute;
              top: -40px;
              left: 10px;
              background: #000;
              color: #fff;
              padding: 8px;
              z-index: 100;
          }
          .skip-link:focus {
              top: 10px;
          }
        </style>
        <a href="#${id}" class="skip-link">${text}</a>
      `;
  });
};
