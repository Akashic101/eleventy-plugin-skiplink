# eleventy-plugin-skiplink

Automatically insert a skiplink on your 11ty-page to improve accessibility for readers who navigate with a keyboard. [What is a skiplink and why you should use one?](https://www.w3.org/WAI/test-evaluate/easy-checks/skip-link/)

## How to use

1. Install this plugin with `npm install eleventy-plugin-skiplink`
2. In your `.eleventy.js`:

```js
const skipLink = require("eleventy-plugin-skiplink");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(skipLink, {
    id: "main-content",
    text: "Jump to main content",
  });
};
```

## Optional Variables

| Variable | Description                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------- |
| `id`     | Defines the id that the skipLink will jump to. Enter with without `#`. `main-content` by default. |
| `text`   | Defines the text that the skipLink will display. `Jump to main-content` by default.               |

## Usage in 11ty

This plugin creates a skipLink where places which is only visible when in focus. Place is as the first element in your header so it will be the first element that gets focused when pressing tab. Use it as a [shortcode](https://www.11ty.dev/docs/shortcodes/)

```njk
{% skipLink %} <-- Liquid & Nunjuck
```
