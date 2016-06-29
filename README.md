# intro-guide-js
A JS library for creating a beautiful step-by-step introduction to your web application's functionality. Nothing more, nothing less.

## Dependencies
No jQuery, only PopperJS and FontAwesome. For latest update, check `dependencies` in [package.json](https://github.com/johanlahti/intro-guide-js/blob/master/package.json)

## Install
`npm install --save intro-guide-js`

## How to
1. Insert the CSS `<link rel="stylesheet" href="./the-path/dist/css/bundle.css" />`
2. Create an empty div where the intro-guide's GUI elements can reside: `<div id="intro" />`
3. Import the JS to your application:
  - Using ES2015 import syntax: [Example](https://github.com/johanlahti/intro-guide-js/blob/master/test/js/initWithEs2015.js).
  - Using traditional global include: [Example](https://github.com/johanlahti/intro-guide-js/blob/master/test/js/initWithGlobal.js). This also requires you to include the `<script>` which defines the global variable: `<script src="./the-path/dist/js/bundle.js"></script>`. Full HTML example [here](https://github.com/johanlahti/intro-guide-js/blob/master/test/html5up-strata/index_global.html).
