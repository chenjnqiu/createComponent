const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/mnt/f/personTest/createComponent/README.md"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/mnt/f/personTest/createComponent/src/components/Button/button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/f/personTest/createComponent/.docz/src/pages/404.js")))
}

