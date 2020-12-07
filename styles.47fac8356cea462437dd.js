(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../../slides-render-angular/node_modules/css-loader/dist/cjs.js?!../../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src/index.js?!../../../../slides-render-angular/node_modules/less-loader/dist/cjs.js?!../../styles/styles.less":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/dev/slides-render-angular/node_modules/css-loader/dist/cjs.js??ref--15-1!C:/dev/slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src??embedded!C:/dev/slides-render-angular/node_modules/less-loader/dist/cjs.js??ref--15-3!C:/dev/slides-bare-angular/render/styles/styles.less ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../slides-render-angular/node_modules/css-loader/dist/runtime/api.js */ "../../../../slides-render-angular/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../slides-render-angular/node_modules/css-loader/dist/cjs.js?!../../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src/index.js?!../../../../slides-render-angular/node_modules/resolve-url-loader/index.js?!../../../../slides-render-angular/node_modules/sass-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../../styles/styles.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/dev/slides-render-angular/node_modules/css-loader/dist/cjs.js??ref--14-1!C:/dev/slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src??embedded!C:/dev/slides-render-angular/node_modules/resolve-url-loader??ref--14-3!C:/dev/slides-render-angular/node_modules/sass-loader/dist/cjs.js??ref--14-4!./node_modules/postcss-loader/dist/cjs.js??ref--18!C:/dev/slides-bare-angular/render/styles/styles.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../slides-render-angular/node_modules/css-loader/dist/runtime/api.js */ "../../../../slides-render-angular/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type=button] {\n  -webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n/**\nRestore the focus styles unset by the previous rule.\n*/\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 1 */\n  line-height: 1.5;\n  /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n.bg-red-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(254, 202, 202, var(--tw-bg-opacity));\n}\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(209, 250, 229, var(--tw-bg-opacity));\n}\n.bg-green-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(167, 243, 208, var(--tw-bg-opacity));\n}\n.bg-blue-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));\n}\n.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.bg-indigo-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n.bg-pink-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(219, 39, 119, var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.dark .dark\\:bg-indigo-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n.bg-opacity-25 {\n  --tw-bg-opacity: 0.25;\n}\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\n.hover\\:bg-opacity-25:hover {\n  --tw-bg-opacity: 0.25;\n}\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgba(243, 244, 246, var(--tw-border-opacity));\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(107, 114, 128, var(--tw-border-opacity));\n}\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n}\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgba(99, 102, 241, var(--tw-border-opacity));\n}\n.border-indigo-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(79, 70, 229, var(--tw-border-opacity));\n}\n.focus\\:border-blue-300:focus {\n  --tw-border-opacity: 1;\n  border-color: rgba(147, 197, 253, var(--tw-border-opacity));\n}\n.focus\\:border-indigo-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgba(79, 70, 229, var(--tw-border-opacity));\n}\n.rounded-none {\n  border-radius: 0px;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-t-none {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n.rounded-r-none {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n.rounded-b-none {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.rounded-l-none {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-r-md {\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n.rounded-l-md {\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n}\n.rounded-tl-lg {\n  border-top-left-radius: 0.5rem;\n}\n.rounded-tr-lg {\n  border-top-right-radius: 0.5rem;\n}\n.rounded-br-lg {\n  border-bottom-right-radius: 0.5rem;\n}\n.rounded-bl-lg {\n  border-bottom-left-radius: 0.5rem;\n}\n.border-none {\n  border-style: none;\n}\n.border {\n  border-width: 1px;\n}\n.border-r-0 {\n  border-right-width: 0px;\n}\n.border-l-0 {\n  border-left-width: 0px;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-b-4 {\n  border-bottom-width: 4px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.content-center {\n  align-content: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n.flex-none {\n  flex: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.font-thin {\n  font-weight: 100;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.leading-4 {\n  line-height: 1rem;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-none {\n  line-height: 1;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.leading-loose {\n  line-height: 2;\n}\n.m-8 {\n  margin: 2rem;\n}\n.-m-2 {\n  margin: -0.5rem;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.mx-12 {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.-my-2 {\n  margin-top: -0.5rem;\n  margin-bottom: -0.5rem;\n}\n.-mx-2 {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.-mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.-mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n.-mx-8 {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mr-6 {\n  margin-right: 1.5rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mt-10 {\n  margin-top: 2.5rem;\n}\n.mr-10 {\n  margin-right: 2.5rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mb-16 {\n  margin-bottom: 4rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.-mb-4 {\n  margin-bottom: -1rem;\n}\n.-mb-6 {\n  margin-bottom: -1.5rem;\n}\n.-mt-12 {\n  margin-top: -3rem;\n}\n.-ml-px {\n  margin-left: -1px;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-5xl {\n  max-width: 64rem;\n}\n.max-w-6xl {\n  max-width: 72rem;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.opacity-25 {\n  opacity: 0.25;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-px {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.pl-1 {\n  padding-left: 0.25rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pt-3 {\n  padding-top: 0.75rem;\n}\n.pl-3 {\n  padding-left: 0.75rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n.pt-8 {\n  padding-top: 2rem;\n}\n.pr-10 {\n  padding-right: 2.5rem;\n}\n.pl-10 {\n  padding-left: 2.5rem;\n}\n.pt-12 {\n  padding-top: 3rem;\n}\n.pb-12 {\n  padding-bottom: 3rem;\n}\n.pt-24 {\n  padding-top: 6rem;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n* {\n  --tw-shadow: 0 0 #0000;\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n.fill-current {\n  fill: currentColor;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgba(243, 244, 246, var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n}\n.text-red-800 {\n  --tw-text-opacity: 1;\n  color: rgba(153, 27, 27, var(--tw-text-opacity));\n}\n.text-red-900 {\n  --tw-text-opacity: 1;\n  color: rgba(127, 29, 29, var(--tw-text-opacity));\n}\n.text-yellow-600 {\n  --tw-text-opacity: 1;\n  color: rgba(217, 119, 6, var(--tw-text-opacity));\n}\n.text-yellow-800 {\n  --tw-text-opacity: 1;\n  color: rgba(146, 64, 14, var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgba(5, 150, 105, var(--tw-text-opacity));\n}\n.text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 95, 70, var(--tw-text-opacity));\n}\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgba(6, 78, 59, var(--tw-text-opacity));\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgba(59, 130, 246, var(--tw-text-opacity));\n}\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 64, 175, var(--tw-text-opacity));\n}\n.text-blue-900 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 58, 138, var(--tw-text-opacity));\n}\n.text-indigo-100 {\n  --tw-text-opacity: 1;\n  color: rgba(224, 231, 255, var(--tw-text-opacity));\n}\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgba(129, 140, 248, var(--tw-text-opacity));\n}\n.text-indigo-500 {\n  --tw-text-opacity: 1;\n  color: rgba(99, 102, 241, var(--tw-text-opacity));\n}\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.text-indigo-700 {\n  --tw-text-opacity: 1;\n  color: rgba(67, 56, 202, var(--tw-text-opacity));\n}\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 48, 163, var(--tw-text-opacity));\n}\n.text-purple-500 {\n  --tw-text-opacity: 1;\n  color: rgba(139, 92, 246, var(--tw-text-opacity));\n}\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.hover\\:text-gray-100:hover {\n  --tw-text-opacity: 1;\n  color: rgba(243, 244, 246, var(--tw-text-opacity));\n}\n.hover\\:text-gray-400:hover {\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.hover\\:text-gray-800:hover {\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.hover\\:text-indigo-600:hover {\n  --tw-text-opacity: 1;\n  color: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.hover\\:text-indigo-900:hover {\n  --tw-text-opacity: 1;\n  color: rgba(49, 46, 129, var(--tw-text-opacity));\n}\n.dark .dark\\:text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgba(229, 231, 235, var(--tw-text-opacity));\n}\n.dark .dark\\:text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgba(209, 213, 219, var(--tw-text-opacity));\n}\n.dark .dark\\:text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.dark .dark\\:text-blue-300 {\n  --tw-text-opacity: 1;\n  color: rgba(147, 197, 253, var(--tw-text-opacity));\n}\n.dark .dark\\:text-indigo-100 {\n  --tw-text-opacity: 1;\n  color: rgba(224, 231, 255, var(--tw-text-opacity));\n}\n.dark .dark\\:text-purple-200 {\n  --tw-text-opacity: 1;\n  color: rgba(221, 214, 254, var(--tw-text-opacity));\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.underline {\n  text-decoration: underline;\n}\n.no-underline {\n  text-decoration: none;\n}\n.hover\\:underline:hover {\n  text-decoration: underline;\n}\n.hover\\:no-underline:hover {\n  text-decoration: none;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-48 {\n  width: 12rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-80 {\n  width: 20rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-px {\n  width: 1px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-1\\/6 {\n  width: 16.666667%;\n}\n.w-5\\/6 {\n  width: 83.333333%;\n}\n.w-7\\/12 {\n  width: 58.333333%;\n}\n.w-full {\n  width: 100%;\n}\n.w-screen {\n  width: 100vw;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.z-50 {\n  z-index: 50;\n}\n.focus\\:z-10:focus {\n  z-index: 10;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n}\n.-translate-x-full {\n  --tw-translate-x: -100%;\n}\n.transition {\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n@media (min-width: 640px) {\n  .sm\\:rounded-lg {\n    border-radius: 0.5rem;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:flex-1 {\n    flex: 1 1 0%;\n  }\n\n  .sm\\:h-5 {\n    height: 1.25rem;\n  }\n\n  .sm\\:h-64 {\n    height: 16rem;\n  }\n\n  .sm\\:my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .sm\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:-mt-6 {\n    margin-top: -1.5rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:w-5 {\n    width: 1.25rem;\n  }\n\n  .sm\\:w-64 {\n    width: 16rem;\n  }\n\n  .sm\\:w-1\\/2 {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .md\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .md\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .md\\:w-1\\/6 {\n    width: 16.666667%;\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:bg-transparent {\n    background-color: transparent;\n  }\n\n  .lg\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:inline-block {\n    display: inline-block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:order-1 {\n    order: 1;\n  }\n\n  .lg\\:order-2 {\n    order: 2;\n  }\n\n  .lg\\:order-3 {\n    order: 3;\n  }\n\n  .lg\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:-mt-24 {\n    margin-top: -6rem;\n  }\n\n  .lg\\:p-0 {\n    padding: 0px;\n  }\n\n  .lg\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .lg\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:pr-16 {\n    padding-right: 4rem;\n  }\n\n  .lg\\:static {\n    position: static;\n  }\n\n  .lg\\:inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  .lg\\:text-center {\n    text-align: center;\n  }\n\n  .lg\\:text-right {\n    text-align: right;\n  }\n\n  .lg\\:w-auto {\n    width: auto;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .lg\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .lg\\:w-1\\/5 {\n    width: 20%;\n  }\n\n  .lg\\:w-2\\/5 {\n    width: 40%;\n  }\n\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .lg\\:translate-x-0 {\n    --tw-translate-x: 0px;\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .xl\\:w-2\\/4 {\n    width: 50%;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../slides-render-angular/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************!*\
  !*** C:/dev/slides-render-angular/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../../slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************!*\
  !*** C:/dev/slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../styles/styles.less":
/*!************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/styles/styles.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../slides-render-angular/node_modules/css-loader/dist/cjs.js??ref--15-1!../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src??embedded!../../../slides-render-angular/node_modules/less-loader/dist/cjs.js??ref--15-3!./styles.less */ "../../../../slides-render-angular/node_modules/css-loader/dist/cjs.js?!../../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src/index.js?!../../../../slides-render-angular/node_modules/less-loader/dist/cjs.js?!../../styles/styles.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../../styles/styles.scss":
/*!************************************************************!*\
  !*** C:/dev/slides-bare-angular/render/styles/styles.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../slides-render-angular/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../slides-render-angular/node_modules/css-loader/dist/cjs.js??ref--14-1!../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src??embedded!../../../slides-render-angular/node_modules/resolve-url-loader??ref--14-3!../../../slides-render-angular/node_modules/sass-loader/dist/cjs.js??ref--14-4!../node_modules/slides-render-angular/node_modules/postcss-loader/dist/cjs.js??ref--18!./styles.scss */ "../../../../slides-render-angular/node_modules/css-loader/dist/cjs.js?!../../../../slides-render-angular/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/src/index.js?!../../../../slides-render-angular/node_modules/resolve-url-loader/index.js?!../../../../slides-render-angular/node_modules/sass-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../../styles/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************!*\
  !*** multi C:/dev/slides-bare-angular/render/styles/styles.less C:/dev/slides-bare-angular/render/styles/styles.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\dev\slides-bare-angular\render\styles\styles.less */"../../styles/styles.less");
module.exports = __webpack_require__(/*! C:\dev\slides-bare-angular\render\styles\styles.scss */"../../styles/styles.scss");


/***/ })

},[[2,"runtime"]]]);