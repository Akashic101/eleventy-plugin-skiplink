module.exports = function (eleventyConfig, options = {}) {
  // Set default options
  const id = options.id || "main-content";
  const text = options.text || "Jump to main content";
  const className = options.className || "skiplink";

  eleventyConfig.addShortcode("skiplink", function () {
    // Define default styles
    let baseStyles =
      "position:absolute;left:10px;background:#000;color:#fff;padding:8px;z-index:100;";
    let hiddenState = "top:-40px;";
    let visibleState = "top:10px;";

    // Override with custom styles if provided
    if (options.customStyles) {
      if (options.customStyles.base) baseStyles = options.customStyles.base;
      if (options.customStyles.hidden)
        hiddenState = options.customStyles.hidden;
      if (options.customStyles.visible)
        visibleState = options.customStyles.visible;
    }

    // No styling if explicitly disabled
    if (options.styling === false) {
      baseStyles = hiddenState = visibleState = "";
    }

    // Combine base and hidden styles for initial state
    const initialStyles = baseStyles + hiddenState;

    // Combine base and visible styles for focus state
    const focusStyles = baseStyles + visibleState;

    // Create the HTML with inline styles and event handlers
    return `<a href="#${id}" class="${className}" 
       style="${initialStyles}" 
       onFocus="this.style.cssText = '${focusStyles}'" 
       onBlur="this.style.cssText = '${initialStyles}'">${text}</a>`;
  });
};
