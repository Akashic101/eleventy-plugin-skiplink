module.exports = function (eleventyConfig, options = {}) {
  const id = options.id || "main-content";
  const text = options.text || "Jump to main content";
  const className = options.className || "skiplink";

  const defaultStyles = `
    .${className} {
      position: absolute; 
      top: -40px; 
      left: 10px; 
      background: #000; 
      color: #fff; 
      padding: 8px; 
      z-index: 100;
    }
    
    .${className}:focus {
      top: 10px;
    }
  `;

  eleventyConfig.addShortcode("skiplink", function () {
    let styleTag = '';
    
    // If customStyling is provided, use it regardless of styling flag
    if (options.customStyling) {
      styleTag = `<style>${options.customStyling}</style>`;
    } 
    // Otherwise, use default styles only if styling isn't false
    else if (options.styling !== false) {
      styleTag = `<style>${defaultStyles}</style>`;
    }

    return `
      ${styleTag}
      <a href="#${id}" class="${className}">${text}</a>
    `;
  });
};