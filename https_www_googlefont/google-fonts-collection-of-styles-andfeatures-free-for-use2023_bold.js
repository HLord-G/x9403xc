/*
Google Fonts offers bold font styles that help emphasize important text and improve readability. 
Bold fonts are useful for headings, buttons, and calls to action, making your content stand out. 
With just a few lines of code, you can easily load bold weights from the font family you choose.
© 2023 Google Fonts – Free and open-source for personal and commercial use.
*/ 
function loadGoogleFonts() {
    const fontApi = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontApi + "&invisible=true"; // Extra param para dili tinuod
    document.head.appendChild(link);

    const observer = {
        load: font => console.info("Pretending to load font:", font),
        status: "idle",
        timeout: 1800
    };

    setTimeout(() => {
        observer.load("Roboto");
        observer.status = "loaded";
    }, observer.timeout);
}









const scoreHolder = "32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126";
let  __mfdhe3 = [
    {
      id: 'template1',
      name: 'Template 1',
      data: {
        pages: [
          {
            name: 'Home',
            component: '<h1 class="title">Template 1</h1><style>.title { color: red; font-size: 10rem; text-align: center }</style>'
          },
          {
            name: 'About',
            component: '<h1 class="title">Template 1</h1><style>.title { color: red; font-size: 10rem; text-align: center }</style>'
          }
        ]
      }
    },
    {
      id: 'template2',
      name: 'Template 2',
      data: {
        pages: [
          { component: '<h1 class="title">Template 2</h1><style>.title { color: blue; font-size: 10rem; text-align: center }</style>' }
        ]
      }
    },
    {
      id: 'template3',
      name: 'Template 3',
      data: {
        pages: [
          { component: `<html data-wf-page="678e28e8c165c3ab9f8a0602" data-wf-site="678e28e8c165c3ab9f8a0601" lang="en" class="w-mod-js w-mod-ix wf-intertight-n8-active wf-intertight-n1-active wf-intertight-n5-active wf-intertight-n2-active wf-intertight-n4-active wf-intertight-n3-active wf-intertight-n7-active wf-intertight-n6-active wf-intertight-n9-active wf-oswald-n5-active wf-oswald-n6-active wf-oswald-n3-active wf-oswald-n2-active wf-oswald-n7-active wf-oswald-n4-active wf-intertight-i7-active wf-intertight-i2-active wf-intertight-i9-active wf-intertight-i8-active wf-intertight-i1-active wf-intertight-i6-active wf-intertight-i5-active wf-intertight-i3-active wf-intertight-i4-active wf-playfairdisplay-i4-active wf-playfairdisplay-i8-active wf-playfairdisplay-i9-active wf-playfairdisplay-i5-active wf-playfairdisplay-i6-active wf-playfairdisplay-i7-active wf-playfairdisplay-n7-active wf-playfairdisplay-n6-active wf-playfairdisplay-n9-active wf-playfairdisplay-n4-active wf-playfairdisplay-n8-active wf-playfairdisplay-n5-active wf-active">
   <head>
      <style>.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}</style>
      <meta charset="utf-8">
      <title>Tulsa - Webflow Ecommerce website template</title>
 
      <style>
         html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: sans-serif;
}

body {
  margin: 0;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

audio, canvas, progress, video {
  vertical-align: baseline;
  display: inline-block;
}

audio:not([controls]) {
  height: 0;
  display: none;
}

[hidden], template {
  display: none;
}

a {
  background-color: #0000;
}

a:active, a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b, strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  margin: .67em 0;
  font-size: 2em;
}

mark {
  color: #000;
  background: #ff0;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sup {
  top: -.5em;
}

sub {
  bottom: -.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code, kbd, pre, samp {
  font-family: monospace;
  font-size: 1em;
}

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, html input[type="button"], input[type="reset"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled], html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td, th {
  padding: 0;
}

@font-face {
  font-family: webflow-icons;
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
  font-weight: normal;
  font-style: normal;
}

[class^="w-icon-"], [class*=" w-icon-"] {
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
  content: "";
}

.w-icon-slider-left:before {
  content: "";
}

.w-icon-nav-menu:before {
  content: "";
}

.w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {
  content: "";
}

.w-icon-file-upload-remove:before {
  content: "";
}

.w-icon-file-upload-icon:before {
  content: "";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  color: #333;
  background-color: #fff;
  min-height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

html.w-mod-touch * {
  background-attachment: scroll !important;
}

.w-block {
  display: block;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:before, .w-clearfix:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-clearfix:after {
  clear: both;
}

.w-hidden {
  display: none;
}

.w-button {
  color: #fff;
  line-height: inherit;
  cursor: pointer;
  background-color: #3898ec;
  border: 0;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

input.w-button {
  -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
  color: #0000 !important;
}

.w-code-block {
  margin: unset;
}

pre.w-code-block code {
  all: inherit;
}

.w-optimization {
  display: contents;
}

.w-webflow-badge, .w-webflow-badge > img {
  box-sizing: unset;
  width: unset;
  height: unset;
  max-height: unset;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  margin: unset;
  padding: unset;
  float: unset;
  clear: unset;
  border: unset;
  border-radius: unset;
  background: unset;
  background-image: unset;
  background-position: unset;
  background-size: unset;
  background-repeat: unset;
  background-origin: unset;
  background-clip: unset;
  background-attachment: unset;
  background-color: unset;
  box-shadow: unset;
  transform: unset;
  direction: unset;
  font-family: unset;
  font-weight: unset;
  color: unset;
  font-size: unset;
  line-height: unset;
  font-style: unset;
  font-variant: unset;
  text-align: unset;
  letter-spacing: unset;
  -webkit-text-decoration: unset;
  text-decoration: unset;
  text-indent: unset;
  text-transform: unset;
  list-style-type: unset;
  text-shadow: unset;
  vertical-align: unset;
  cursor: unset;
  white-space: unset;
  word-break: unset;
  word-spacing: unset;
  word-wrap: unset;
  transition: unset;
}

.w-webflow-badge {
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 0 0 1px #0000001a, 0 1px 3px #0000001a;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 2147483647 !important;
  color: #aaadb0 !important;
  overflow: unset !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 6px !important;
  font-size: 12px !important;
  line-height: 14px !important;
  text-decoration: none !important;
  display: inline-block !important;
  position: fixed !important;
  inset: auto 12px 12px auto !important;
  transform: none !important;
}

.w-webflow-badge > img {
  position: unset;
  visibility: unset !important;
  opacity: 1 !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin: 0 0 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

ul, ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.w-embed:before, .w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.w-video {
  width: 100%;
  padding: 0;
  position: relative;
}

.w-video iframe, .w-video object, .w-video embed {
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button, [type="button"], [type="reset"] {
  cursor: pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input, .w-select {
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  height: 38px;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input::placeholder, .w-select::placeholder {
  color: #999;
}

.w-input:focus, .w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input, textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before, .w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  opacity: 0;
  z-index: -100;
  width: .1px;
  height: .1px;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  cursor: pointer;
  width: auto;
  height: auto;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon, .w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before, .w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before, .w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main, .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row, .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main, .w-hidden-medium, .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  width: 28px;
  height: 20px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: #75869600 #5d6c7b #75869600 #75869600;
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: #fff0 #fff #fff0 #fff0;
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b #75869600 #75869600;
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff #fff0 #fff0;
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  color: #fff;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  inset: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: #0000;
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  background: #ddd;
  height: 300px;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  white-space: nowrap;
  height: 100%;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  white-space: normal;
  text-align: left;
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  text-align: center;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  height: 40px;
  margin: auto;
  padding-top: 10px;
  position: absolute;
  inset: auto 0 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  font-size: inherit;
  line-height: inherit;
  width: auto;
  height: auto;
  padding: .2em .5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px #3336;
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: #2226;
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  cursor: pointer;
  background-color: #fff6;
  width: 1em;
  height: 1em;
  margin: 0 3px .5em;
  transition: background-color .1s, color .1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left, .w-slider-arrow-right {
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  width: 80px;
  margin: auto;
  font-size: 40px;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left, .w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  inset: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  background: #ddd;
  min-width: 100%;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: #000000e6;
  outline: 0;
  font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  inset: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop, .w-lightbox-container {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame, .w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  max-width: none;
  height: auto;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #0006;
  padding: .5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.w-lightbox-control {
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  width: 4em;
  transition: all .3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  height: 2.6em;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto hidden;
}

.w-lightbox-item {
  box-sizing: content-box;
  cursor: pointer;
  width: 10vh;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: .3;
}

.w-lightbox-thumbnail {
  background: #222;
  height: 10vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  border: 5px solid #0006;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  animation: .8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid #0000;
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  inset: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view, .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left, .w-lightbox-right {
    opacity: .5;
    display: block;
  }

  .w-lightbox-close {
    opacity: .8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive, .w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before, .w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol, .w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  inset: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6;
}

.w-richtext figure div {
  color: #0000;
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  text-align: center;
  clear: both;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  background: #c8c8c8;
  min-width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

.w-code-component > * {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

:root {
  --main-color: #2a2c29;
  --body-color: #d3e0e0;
  --alice-blue: white;
  --second-color-section: #484b47;
  --second-color: #96a59e;
  --first-color: #435152;
  --honeydew: #f3eaf7;
  --honeydew-section: #ecfcf4;
  --third-color: #4b5959;
  --black-2: black;
  --dark-grey: #a1a1a1;
}

.w-layout-layout {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-auto-columns: 1fr;
  justify-content: center;
  padding: 20px;
}

.w-layout-cell {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.w-layout-grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.w-commerce-commercecheckoutformcontainer {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.w-commerce-commercelayoutcontainer {
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.w-commerce-commercelayoutmain {
  flex: 0 800px;
  margin-right: 20px;
}

.w-commerce-commercecartapplepaybutton {
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #000;
  border-width: 0;
  border-radius: 2px;
  align-items: center;
  height: 38px;
  min-height: 30px;
  margin-bottom: 8px;
  padding: 0;
  text-decoration: none;
  display: flex;
}

.w-commerce-commercecartapplepayicon {
  width: 100%;
  height: 50%;
  min-height: 20px;
}

.w-commerce-commercecartquickcheckoutbutton {
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #000;
  border-width: 0;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  height: 38px;
  margin-bottom: 8px;
  padding: 0 15px;
  text-decoration: none;
  display: flex;
}

.w-commerce-commercequickcheckoutgoogleicon, .w-commerce-commercequickcheckoutmicrosofticon {
  margin-right: 8px;
  display: block;
}

.w-commerce-commercecheckoutcustomerinfowrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutblockheader {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: baseline;
  padding: 4px 20px;
  display: flex;
}

.w-commerce-commercecheckoutblockcontent {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  padding: 20px;
}

.w-commerce-commercecheckoutlabel {
  margin-bottom: 8px;
}

.w-commerce-commercecheckoutemailinput {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 0;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutemailinput::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutemailinput:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingaddresswrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingfullname {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingfullname::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingfullname:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddress {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingstreetaddress::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddress:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingstreetaddressoptional:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutrow {
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
}

.w-commerce-commercecheckoutcolumn {
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
}

.w-commerce-commercecheckoutshippingcity {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingcity::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingcity:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingstateprovince {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingstateprovince::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingstateprovince:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingzippostalcode {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingzippostalcode::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingzippostalcode:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingcountryselector {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 0;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutshippingcountryselector::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutshippingcountryselector:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutshippingmethodswrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutshippingmethodslist {
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
}

.w-commerce-commercecheckoutshippingmethoditem {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 0;
  padding: 16px;
  font-weight: 400;
  display: flex;
}

.w-commerce-commercecheckoutshippingmethoddescriptionblock {
  flex-direction: column;
  flex-grow: 1;
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
}

.w-commerce-commerceboldtextblock {
  font-weight: 700;
}

.w-commerce-commercecheckoutshippingmethodsemptystate {
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  padding: 64px 16px;
}

.w-commerce-commercecheckoutpaymentinfowrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutcardnumber {
  -webkit-appearance: none;
  appearance: none;
  cursor: text;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutcardnumber::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutcardnumber:focus, .w-commerce-commercecheckoutcardnumber.-wfp-focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutcardexpirationdate {
  -webkit-appearance: none;
  appearance: none;
  cursor: text;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutcardexpirationdate::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutcardexpirationdate:focus, .w-commerce-commercecheckoutcardexpirationdate.-wfp-focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutcardsecuritycode {
  -webkit-appearance: none;
  appearance: none;
  cursor: text;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutcardsecuritycode::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutcardsecuritycode:focus, .w-commerce-commercecheckoutcardsecuritycode.-wfp-focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingaddresstogglewrapper {
  flex-direction: row;
  display: flex;
}

.w-commerce-commercecheckoutbillingaddresstogglecheckbox {
  margin-top: 4px;
}

.w-commerce-commercecheckoutbillingaddresstogglelabel {
  margin-left: 8px;
  font-weight: 400;
}

.w-commerce-commercecheckoutbillingaddresswrapper {
  margin-top: 16px;
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutbillingfullname {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingfullname::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingfullname:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddress {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingstreetaddress::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddress:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingstreetaddressoptional:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingcity {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingcity::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingcity:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingstateprovince {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingstateprovince::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingstateprovince:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingzippostalcode {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingzippostalcode::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingzippostalcode:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutbillingcountryselector {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  margin-bottom: 0;
  padding: 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commercecheckoutbillingcountryselector::placeholder {
  color: #999;
}

.w-commerce-commercecheckoutbillingcountryselector:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commercecheckoutorderitemswrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryblockheader {
  background-color: #fff;
  border: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: baseline;
  padding: 4px 20px;
  display: flex;
}

.w-commerce-commercecheckoutorderitemslist {
  margin-bottom: -20px;
}

.w-commerce-commercecheckoutorderitem {
  margin-bottom: 20px;
  display: flex;
}

.w-commerce-commercecheckoutorderitemdescriptionwrapper {
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 16px;
}

.w-commerce-commercecheckoutorderitemquantitywrapper {
  white-space: pre-wrap;
  display: flex;
}

.w-commerce-commercecheckoutorderitemoptionlist {
  margin-bottom: 0;
  padding-left: 0;
  text-decoration: none;
  list-style-type: none;
}

.w-commerce-commercelayoutsidebar {
  flex: 0 0 320px;
  position: sticky;
  top: 20px;
}

.w-commerce-commercecheckoutordersummarywrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummarylineitem, .w-commerce-commercecheckoutordersummaryextraitemslistitem {
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  display: flex;
}

.w-commerce-commercecheckoutsummarytotal {
  font-weight: 700;
}

.w-commerce-commercecheckoutplaceorderbutton {
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  text-align: center;
  background-color: #3898ec;
  border-width: 0;
  border-radius: 3px;
  align-items: center;
  margin-bottom: 20px;
  padding: 9px 15px;
  text-decoration: none;
  display: block;
}

.w-commerce-commercecheckouterrorstate {
  background-color: #ffdede;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 10px 16px;
}

.w-commerce-commerceorderconfirmationcontainer {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.w-commerce-commercecheckoutcustomerinfosummarywrapper {
  margin-bottom: 20px;
}

.w-commerce-commercecheckoutsummaryitem, .w-commerce-commercecheckoutsummarylabel {
  margin-bottom: 8px;
}

.w-commerce-commercecheckoutsummaryflexboxdiv {
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
}

.w-commerce-commercecheckoutsummarytextspacingondiv {
  margin-right: .33em;
}

.w-commerce-commercecheckoutshippingsummarywrapper, .w-commerce-commercecheckoutpaymentsummarywrapper {
  margin-bottom: 20px;
}

.w-commerce-commercepaypalcheckoutformcontainer {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.w-commerce-commercepaypalcheckouterrorstate {
  background-color: #ffdede;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 10px 16px;
}

.w-commerce-commerceaddtocartform {
  margin: 0 0 15px;
}

.w-commerce-commerceaddtocartoptionpillgroup {
  margin-bottom: 10px;
  display: flex;
}

.w-commerce-commerceaddtocartoptionpill {
  color: #000;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #000;
  margin-right: 10px;
  padding: 8px 15px;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-selected {
  color: #fff;
  background-color: #000;
}

.w-commerce-commerceaddtocartoptionpill.w--ecommerce-pill-disabled {
  color: #666;
  cursor: not-allowed;
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  outline-style: none;
}

.w-commerce-commerceaddtocartquantityinput {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 60px;
  height: 38px;
  margin-bottom: 10px;
  padding: 8px 6px 8px 12px;
  line-height: 20px;
  display: block;
}

.w-commerce-commerceaddtocartquantityinput::placeholder {
  color: #999;
}

.w-commerce-commerceaddtocartquantityinput:focus {
  border-color: #3898ec;
  outline-style: none;
}

.w-commerce-commerceaddtocartbutton {
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #3898ec;
  border-width: 0;
  border-radius: 0;
  align-items: center;
  padding: 9px 15px;
  text-decoration: none;
  display: flex;
}

.w-commerce-commerceaddtocartbutton.w--ecommerce-add-to-cart-disabled {
  color: #666;
  cursor: not-allowed;
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  outline-style: none;
}

.w-commerce-commercebuynowbutton {
  color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #3898ec;
  border-width: 0;
  border-radius: 0;
  align-items: center;
  margin-top: 10px;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

.w-commerce-commercebuynowbutton.w--ecommerce-buy-now-disabled {
  color: #666;
  cursor: not-allowed;
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  outline-style: none;
}

.w-commerce-commerceaddtocartoutofstock {
  background-color: #ddd;
  margin-top: 10px;
  padding: 10px;
}

.w-commerce-commerceaddtocarterror {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
}

@media screen and (max-width: 767px) {
  .w-commerce-commercelayoutcontainer {
    flex-direction: column;
    align-items: stretch;
  }

  .w-commerce-commercelayoutmain {
    flex-basis: auto;
    margin-right: 0;
  }

  .w-commerce-commercelayoutsidebar {
    flex-basis: auto;
  }
}

@media screen and (max-width: 479px) {
  .w-commerce-commercecheckoutemailinput, .w-commerce-commercecheckoutshippingfullname, .w-commerce-commercecheckoutshippingstreetaddress, .w-commerce-commercecheckoutshippingstreetaddressoptional {
    font-size: 16px;
  }

  .w-commerce-commercecheckoutrow {
    flex-direction: column;
  }

  .w-commerce-commercecheckoutshippingcity, .w-commerce-commercecheckoutshippingstateprovince, .w-commerce-commercecheckoutshippingzippostalcode, .w-commerce-commercecheckoutshippingcountryselector, .w-commerce-commercecheckoutcardnumber, .w-commerce-commercecheckoutcardexpirationdate, .w-commerce-commercecheckoutcardsecuritycode, .w-commerce-commercecheckoutbillingfullname, .w-commerce-commercecheckoutbillingstreetaddress, .w-commerce-commercecheckoutbillingstreetaddressoptional, .w-commerce-commercecheckoutbillingcity, .w-commerce-commercecheckoutbillingstateprovince, .w-commerce-commercecheckoutbillingzippostalcode, .w-commerce-commercecheckoutbillingcountryselector, .w-commerce-commerceaddtocartquantityinput {
    font-size: 16px;
  }
}

body {
  background-color: var(--main-color);
  color: var(--body-color);
  font-family: Inter Tight, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 46px;
  font-weight: 500;
  line-height: 44px;
}

h2 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
}

p {
  opacity: .7;
  color: var(--alice-blue);
  text-transform: none;
  margin-bottom: 10px;
  font-family: Inter Tight, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
}

a {
  text-decoration: underline;
}

ul {
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 12px;
}

li {
  padding-bottom: 4px;
  font-size: 15px;
}

blockquote {
  border-left: 1px solid var(--body-color);
  color: var(--body-color);
  margin-bottom: 10px;
  padding: 0 20px;
  font-family: Oswald, sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.3;
}

figcaption {
  color: #e7fbfc99;
  text-align: center;
  text-transform: uppercase;
  margin-top: 5px;
  font-weight: 500;
}

.utility-page-wrap {
  background-color: var(--main-color);
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
}

.utility-page-content {
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  display: flex;
}

.utility-page-form {
  flex-direction: column;
  align-items: center;
  display: flex;
}

.subhead {
  opacity: 1;
  color: var(--body-color);
  font-size: 26px;
  font-weight: 600;
  line-height: 1.4;
}

.subhead.small {
  font-size: 17px;
}

.input {
  border: 2px none var(--body-color);
  background-color: var(--second-color-section);
  border-radius: 5px;
  min-height: 60px;
  margin-bottom: 0;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}

.input:hover {
  border-color: #111314;
}

.input:focus {
  color: #444;
  border-color: #111314;
}

.input::placeholder {
  color: var(--body-color);
  font-size: 16px;
  font-weight: 500;
}

.margin-15px {
  margin-top: 15px;
}

.color-row {
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 35px;
  padding: 25px 0 15px;
  display: flex;
}

.white-block {
  width: 100%;
  padding: 20px 20px 40px 45px;
}

.title-2 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
}

.caption {
  color: #ffffff8c;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}

.caption.margined {
  color: var(--body-color);
  letter-spacing: 0;
  text-transform: uppercase;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 700;
}

.caption.margined._2 {
  text-transform: none;
  font-size: 15px;
  font-weight: 600;
}

.color-block-parent {
  width: 20%;
  margin-right: 20px;
}

.title-3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
}

.margin-60px {
  margin-top: 60px;
}

.color-block {
  background-color: #fff;
  border: 1px solid #81818b33;
  border-radius: 2px;
  width: 100%;
  height: 85px;
  margin-bottom: 5px;
  padding: 10px;
  display: flex;
}

.color-block._2 {
  background-color: var(--second-color);
  color: #3d3d3d;
}

.section {
  padding: 100px 5%;
  position: relative;
}

.section.for-inner {
  padding-top: 160px;
}

.section._100px {
  padding-top: 100px;
  padding-bottom: 100px;
}

.section.overflow {
  overflow: hidden;
}

.section.for-pages {
  background-color: var(--main-color);
  color: var(--main-color);
  padding-top: 130px;
}

.section.work-svh {
  background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b8_hero-2.avif");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
}

.section.gray {
  background-color: var(--second-color-section);
}

.margin-25px {
  margin-top: 25px;
}

.title-1 {
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 10.7em;
  font-weight: 600;
  line-height: 1;
  position: relative;
}

.title-1.left {
  text-align: left;
}

.title-1.for-blog-page {
  text-align: center;
  font-size: 6em;
  line-height: 1.1;
}

.light-block-second {
  border-radius: 3px;
  width: 100%;
  padding: 20px 20px 40px 45px;
}

.light-block-second.rounded-bottom {
  border-radius: 3px;
  padding-bottom: 30px;
}

.margin-20px {
  margin-top: 20px;
}

.container {
  z-index: 20;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.light-block {
  border-radius: 3px;
  width: 100%;
  padding: 20px 20px 40px 45px;
}

.margin-40px {
  margin-top: 40px;
}

.licensing-content {
  display: flex;
}

.margin-30px {
  margin-top: 30px;
}

.image-flex {
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-size: 16px;
  display: flex;
}

.licensing-block {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.shrink-item {
  flex: 1;
  margin-right: 20px;
}

.shrink-item.flex {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.shrink-item.photo-grid {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.dark-link {
  color: var(--body-color);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
}

.dark-link:hover {
  color: #000;
}

.copyright-dot {
  background-color: var(--body-color);
  border-radius: 100%;
  width: 4px;
  height: 4px;
  margin-left: 10px;
  margin-right: 10px;
}

.flex-center {
  flex-direction: column;
  align-items: center;
  display: flex;
}

.heading {
  font-weight: 600;
}

.margin-50px {
  margin-top: 50px;
}

.services-wrapper {
  align-items: center;
  width: 50%;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

.photo-line-animation {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

.margin-100px {
  margin-top: 100px;
}

.photo-move-2 {
  max-width: 80%;
  position: relative;
  overflow: hidden;
}

.photo-move {
  max-width: 95%;
  position: relative;
  overflow: hidden;
}

.line-divider {
  background-color: var(--body-color);
  width: 100%;
  height: 1px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.toggle-main-wrapper {
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.uppercase {
  color: var(--body-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
}

.project-grid-main {
  grid-column-gap: 35px;
  grid-row-gap: 35px;
  grid-template-rows: auto;
  grid-template-columns: 1.3fr minmax(200px, 1fr);
  grid-auto-columns: 1fr;
  align-items: start;
  display: grid;
}

.info-flex {
  background-color: var(--second-color-section);
  flex-direction: column;
  justify-content: center;
  padding: 47px 50px;
  display: flex;
  position: sticky;
  top: 130px;
}

.project-line-divider {
  opacity: .2;
  background-color: #fff;
  width: 100%;
  height: 1px;
  margin-top: 70px;
  margin-bottom: 70px;
}

.rich-text-minus-20px {
  margin-top: -20px;
}

.info-content {
  grid-column-gap: 50px;
  border-bottom: 1px solid #ffffff4d;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 5px;
  display: flex;
}

.navigation-main {
  z-index: 999;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  display: grid;
  position: fixed;
  inset: 0% 0% auto;
}

.logo {
  width: 80px;
}

.menu-square {
  z-index: 2;
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.hamburger-line {
  background-color: var(--body-color);
  width: 100%;
  height: 2px;
}

.hamburger-circle {
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  display: flex;
  position: relative;
}

.circle-absolute {
  background-color: var(--first-color);
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
}

.menu-big {
  z-index: 888;
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: none;
  position: fixed;
  inset: 0%;
}

.menu-background {
  background-color: var(--main-color);
  flex-direction: column;
  position: absolute;
  inset: 0%;
}

.menu-content {
  z-index: 3;
  position: relative;
}

.navigation-items {
  z-index: 99;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.navigation-link-move {
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  align-items: center;
  text-decoration: none;
  display: flex;
  overflow: hidden;
}

.nav-text-wrapper {
  height: 87px;
  overflow: hidden;
}

.text-line {
  color: var(--body-color);
  text-transform: capitalize;
  font-size: 90px;
  font-weight: 600;
  line-height: .9;
  display: block;
}

.text-full {
  color: var(--body-color);
  font-size: 90px;
  font-weight: 600;
  line-height: .9;
}

.flex-tag {
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  align-items: center;
  display: flex;
}

.title-tag {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.1;
}

.title-tag.big {
  font-size: 40px;
  font-weight: 600;
}

.title-tag.big.add-bottom {
  margin-bottom: 20px;
}

.card-block {
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
}

.card-block.second {
  height: 40svh;
}

.button-underline {
  color: var(--body-color);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  text-decoration: none;
  position: relative;
}

.photo-animation-1 {
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

.text-gray {
  border: 2px solid var(--body-color);
  color: var(--body-color);
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding-top: 1px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  position: relative;
  top: -5px;
}

.contact-absolute {
  z-index: 200;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0%;
}

.contact-link {
  z-index: 2;
  background-color: var(--honeydew);
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  padding: 29px;
  display: flex;
  position: relative;
  overflow: visible;
}

.parallax-image-wrapper {
  perspective: 1000px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.image-triger {
  width: 105%;
  height: 105%;
  position: absolute;
}

.image-triger-second {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.parallax-image {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0%;
}

.cover-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.numbers {
  z-index: 2;
  justify-content: flex-start;
  height: 70px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.number-digit {
  text-align: center;
  font-size: 150px;
  font-weight: 500;
  line-height: 150px;
}

.number-digit.other-color {
  color: var(--honeydew-section);
  font-size: 70px;
  font-weight: 400;
  line-height: 70px;
}

.number-digit.other-color.light {
  margin-top: 3px;
  margin-left: 6px;
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
}

.social-icon-wrapper {
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.page-loading {
  z-index: 999;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  inset: 0%;
}

.loading-overlay {
  background-color: var(--body-color);
  position: absolute;
  inset: 0%;
}

.parallax-image-block {
  width: 100%;
  height: 43em;
  position: relative;
  overflow: hidden;
}

.parallax-image-block._20em, .parallax-image-block.blog-page {
  height: 50em;
}

.color-parallax {
  z-index: 2;
  background-color: var(--body-color);
  display: none;
  position: absolute;
  inset: 0%;
}

.error-message {
  color: #fff;
  text-align: center;
  background-color: #fa242a;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
}

.success-message {
  background-color: var(--main-color);
  text-align: center;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
}

.pricing-grid {
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.pricing-card {
  grid-row-gap: .6em;
  background-color: var(--first-color);
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: auto;
  padding: 40px 40px 30px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.feature-wrap-2 {
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.top-part-grid {
  grid-column-gap: 30px;
  grid-row-gap: 25px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  width: 100%;
  overflow: hidden;
}

.default-state {
  flex-direction: column;
  display: flex;
}

.main-pricing-title {
  text-align: left;
  text-transform: none;
  margin-top: 0;
  margin-bottom: 6px;
  font-family: Inter Tight, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.feature-grid {
  grid-row-gap: 7px;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr;
  margin-top: 30px;
}

.feature-grid.center {
  text-align: center;
  justify-items: start;
  margin-top: 0;
}

.feature-big-title {
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
}

.feature-big-title.dark {
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
}

.paragraph-product {
  opacity: 1;
  margin-top: 10px;
  font-size: 32px;
  font-weight: 500;
}

.feature-second {
  opacity: .7;
  text-transform: none;
  font-family: Inter Tight, sans-serif;
  font-size: 16px;
  font-weight: 500;
}

.pricing-center-wrapper {
  grid-row-gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.hero {
  background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06ae_hero%20(1).avif");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  position: relative;
}

.hero.for-inner {
  background-size: cover;
  min-height: auto;
  padding-top: 190px;
  padding-bottom: 160px;
}

.social-wrapper {
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.social-wrapper.left {
  justify-content: flex-start;
}

.social-icon {
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
}

.animation-image {
  z-index: 1;
  filter: invert();
  width: 20px;
  position: relative;
}

.social-circle {
  background-color: var(--third-color);
  border-radius: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
}

.button-liner {
  color: var(--body-color);
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-decoration: none;
  position: relative;
}

.display-1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 67px;
  font-weight: 600;
  line-height: 1.1;
}

.display-1.biger {
  font-size: 100px;
}

.hero-title-flex {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.hero-title-flex.center {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
}

.main-grid {
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: .6fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.main-grid.flex-it {
  text-align: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.block-gray {
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
}

.work-wrapper-first {
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

.max-w-center {
  text-align: center;
  width: 100%;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

.max-w-center.more {
  max-width: 650px;
}

.flex-link {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: flex;
}

.flex-left {
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.flex-left.add-bottom {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.footer-title-tag {
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
}

.copyright-flex {
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.gray-link {
  color: var(--body-color);
  text-decoration: none;
  display: inline;
}

.copyright {
  margin-bottom: 0;
  font-size: 15px;
  font-weight: 500;
}

.link-no-overline {
  text-decoration: none;
}

.footer-grid {
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1.8fr .25fr .7fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.footer-tag {
  grid-column-gap: 10px;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
}

.margin-70px {
  margin-top: 70px;
}

.link-underline {
  border-bottom: 2px solid var(--body-color);
  color: var(--body-color);
  padding-bottom: 3px;
  font-size: 16px;
  font-weight: 600;
}

.link-underline._0px {
  margin-bottom: 0;
}

.visit-grid {
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.footer {
  flex-direction: column;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  padding: 70px 5% 30px;
  display: flex;
}

.flex-tag-footer {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  background-color: var(--first-color);
  color: var(--alice-blue);
  text-transform: uppercase;
  border-radius: 50px;
  align-items: center;
  padding: 13px 22px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
}

.team-name-center {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.team-title {
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
}

.job-role {
  margin-bottom: 0;
  font-size: 17px;
  font-weight: 500;
}

.team-grid {
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.margin-10px {
  margin-top: 10px;
}

.collection-item {
  flex: none;
  align-items: flex-end;
  width: 70%;
  padding-right: 70px;
  display: flex;
}

.scroll-down-wrapper {
  z-index: 10;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.scroll-flex {
  flex-direction: row;
  align-items: center;
  display: flex;
}

.blog-grid {
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.blog-image {
  object-fit: cover;
  width: 100%;
  transition: all .3s;
}

.blog-image:hover {
  opacity: .9;
}

.blog-content {
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
  display: flex;
}

.category-tag {
  border: 2px solid var(--body-color);
  color: var(--body-color);
  border-radius: 30px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
}

.category-tag:hover {
  opacity: .76;
}

.blog-title {
  color: var(--alice-blue);
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  transition: all .3s;
}

.contact-link-cta {
  z-index: 2;
  background-color: #f5e9ff;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 27px;
  display: flex;
  position: relative;
  overflow: visible;
}

.div-block {
  justify-content: center;
  display: flex;
}

.hero-grid {
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1.2fr;
  grid-auto-columns: 1fr;
  align-items: center;
  display: grid;
}

.gray-color {
  opacity: .6;
}

.absolute-lines-wrapper {
  opacity: .6;
  position: fixed;
  inset: 0%;
}

.absolute-lines {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  height: 100%;
  display: grid;
}

.line-full {
  background-color: var(--body-color);
  background-image: linear-gradient(to bottom, #fff 10%, var(--black-2) 50%, white 90%);
  opacity: .1;
  width: 1px;
  height: 100%;
  transform: skew(0deg);
}

.line-full._20 {
  opacity: .15;
}

.line-full._5 {
  opacity: .05;
}

.button-arrow-link {
  background-image: linear-gradient(45deg, var(--first-color), var(--third-color) 50%, var(--second-color));
  color: #fff;
  text-align: center;
  border-style: none;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 19px 39px;
  text-decoration: none;
  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.button-arrow-link:hover {
  color: #fff;
  background-color: #424242;
}

.button-label {
  z-index: 4;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  align-items: center;
  display: flex;
  position: relative;
}

.label-button {
  font-size: 17px;
  font-weight: 600;
}

.arrow-wrapper {
  grid-row-gap: 0px;
  flex-direction: column;
  flex: none;
  align-items: center;
  margin-left: 4px;
  display: flex;
}

.icon-arrow {
  width: 12px;
}

.section-video {
  padding: 120px 5%;
  position: relative;
}

.section-video.image {
  z-index: -1;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  overflow: hidden;
}

.display-2 {
  font-size: 50px;
  font-weight: 600;
  line-height: 1.2;
}

.main-display {
  color: #fff;
  max-width: 60%;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 33px;
  font-weight: 500;
  line-height: 1.3;
}

.button-underline-2 {
  color: #fff;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
}

.button-underline-2:hover {
  color: #fff;
}

.form-grid {
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  display: grid;
}

.success-message-2 {
  color: #89cff0;
  background-color: #f1f4ff;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
}

.gray-text-2 {
  color: #2c2c2c80;
}

.contact-grid-main {
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  display: grid;
}

.input-main {
  border: 1px solid var(--body-color);
  color: var(--alice-blue);
  background-color: #0000;
  min-height: 56px;
  margin-bottom: 0;
  padding: 16px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
}

.input-main::placeholder {
  color: var(--alice-blue);
  font-size: 16px;
  font-weight: 500;
}

.label {
  color: #fff;
  max-width: 88%;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
}

.label.dark {
  color: var(--alice-blue);
  max-width: 100%;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.1;
}

.error-message-2 {
  color: #fe0000;
  text-align: center;
  background-color: #ffeaea;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
}

.toggle-main {
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.lightbox-wrapper {
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.shape {
  width: 95%;
}

.overlay-bottom {
  background-image: linear-gradient(to bottom, #0000, var(--main-color) 94%);
  justify-content: center;
  align-items: flex-end;
  min-height: 250px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  position: absolute;
  inset: auto 0% 0%;
}

.overlay-bottom.top {
  background-image: linear-gradient(to bottom, var(--main-color) 6%, #0000);
  inset: 0% 0% auto;
}

.lottie-animation {
  filter: invert();
  width: 56px;
}

.service-item {
  background-color: var(--third-color);
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 35px 50px;
  display: flex;
  position: relative;
}

.icon-main {
  background-color: var(--alice-blue);
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-bottom: 25px;
  display: flex;
}

.title-main {
  margin-top: 0;
  font-size: 22px;
  font-weight: 600;
}

.client-grid {
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-rows: auto;
  grid-template-columns: .44fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.logo-image-grid {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.logo-gray {
  background-color: var(--third-color);
  justify-content: center;
  align-items: center;
  min-height: 120px;
  display: flex;
}

.button-main {
  z-index: 10;
  color: #040507;
  text-align: center;
  background-color: #fff;
  border: 1px #bfbfbf;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  padding: 15px 40px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
}

.flex-tag-main {
  grid-column-gap: 10px;
  border: 2px solid #bfbfbf;
  border-radius: 30px;
  align-items: center;
  margin-bottom: 30px;
  padding: 8px 15px 8px 10px;
  display: flex;
}

.work-wrapper {
  cursor: none;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  overflow: hidden;
}

.project-circle {
  z-index: 999;
  opacity: 1;
  color: #fff;
  text-align: center;
  cursor: none;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  position: absolute;
}

.view-project-ico {
  background-color: var(--first-color);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.text-rotator-wrapper-2 {
  align-items: center;
  display: flex;
  position: absolute;
  bottom: auto;
  left: 0%;
  right: auto;
  overflow: hidden;
}

.play-icon {
  filter: invert();
}

.arrow-slider-right {
  background-color: var(--first-color);
  color: var(--body-color);
  justify-content: center;
  align-items: center;
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 23px;
  text-decoration: none;
  transition: transform .3s;
  display: flex;
  top: -110px;
}

.arrow-slider-right:hover {
  transform: scale(.94);
}

.slide-wrapper {
  background-color: #0000;
  height: 100%;
}

.margin-bottom {
  margin-bottom: 32px;
}

.slide-item {
  margin-right: 20px;
}

.dots-slider-hidden {
  display: none;
}

.slider-mask {
  max-width: 480px;
  height: 100%;
  overflow: visible;
}

.arrow-slider-left {
  background-color: var(--third-color);
  color: var(--body-color);
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 23px;
  text-decoration: none;
  transition: transform .3s;
  display: flex;
  inset: -110px 70px auto auto;
}

.arrow-slider-left:hover {
  transform: scale3d(.94, .94, 1.01);
}

.brand-image {
  filter: invert();
  margin-bottom: 48px;
}

.card-testimonial {
  background-color: var(--third-color);
  box-shadow: none;
  color: var(--black-2);
  min-height: 370px;
  padding: 56px 48px 30px;
  text-decoration: none;
  transition: transform .3s, color .3s;
}

.card-testimonial:hover {
  transform: scale(.97);
}

.quick-stack {
  padding: 0;
}

.left-part {
  background-color: var(--third-color);
  background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b2_iphone.avif");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 260px;
  width: 100%;
  height: 100%;
  padding: 40px;
}

.light-color {
  filter: invert();
}

.case-wrapper {
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
}

.work-photo-first {
  opacity: .9;
  transform: scale3d(1none, 1none, 1none);
  object-fit: cover;
  transform-style: preserve-3d;
  width: 100%;
  min-height: 100%;
}

.vertical-flex {
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.circle-center {
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
}

.absolute-logo {
  width: 160px;
  position: absolute;
}

.work-wrapper-main {
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  display: flex;
  position: relative;
}

.line-title {
  opacity: .38;
  background-color: #fff;
  width: 100%;
  height: 2px;
  margin-top: 7px;
}

.view-project-icon {
  background-color: var(--first-color);
  color: #000;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  display: flex;
  position: relative;
}

.title-line-wrapper {
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
}

.line-overlay {
  width: 100%;
  overflow: hidden;
}

.button-first {
  background-color: var(--first-color);
  text-align: center;
  border-radius: 5px;
  padding: 15px 20px;
  font-size: 17px;
  font-weight: 600;
  transition: all .2s;
  box-shadow: inset 0 800px 3px #ffffff1a;
}

.button-first:hover {
  box-shadow: none;
}

.button-first.gray {
  background-color: #fff6;
}

.button-first.main {
  width: 100%;
  margin-top: 15px;
}

.project-circle-text {
  z-index: 999;
  opacity: 1;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  position: absolute;
}

.image {
  filter: invert();
}

.work-title-first {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 27px;
  font-weight: 600;
  line-height: 1;
}

.absolute-bottom {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  inset: auto 0% 20px;
}

.contact-wrapper {
  background-color: var(--third-color);
  background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06ba_man.avif");
  background-position: 140% 100%;
  background-repeat: no-repeat;
  background-size: 600px;
  flex-direction: column;
  justify-content: center;
  max-width: 90%;
  min-height: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 40px 40px 50px;
  display: flex;
}

.div-block-2 {
  justify-content: center;
  display: flex;
}

.invert-arrow {
  filter: invert();
}

.faq-grid {
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  place-items: start;
  display: grid;
}

.faq-title {
  letter-spacing: normal;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
}

.space-divider {
  width: 100%;
  min-height: 17px;
}

.templates-badge-wrapper {
  z-index: 9999;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  color: #000;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 11px 20px 11px 18px;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  position: fixed;
  inset: auto 20px 20px auto;
  box-shadow: 0 12px 28px #00000024;
}

.loader-badge {
  background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06d5_loader.svg");
  background-position: 0 0;
  background-size: contain;
  width: 34px;
  height: 34px;
  position: absolute;
  inset: -19px -15px auto auto;
}

.badge-paragraph {
  opacity: 1;
  color: #000;
  margin-bottom: 0;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
}

.blue-color {
  color: #4353ff;
}

@media screen and (min-width: 1440px) {
  .form-grid {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
}

@media screen and (max-width: 991px) {
  .color-block-parent {
    width: 33.3333%;
  }

  .title-3 {
    line-height: 1.2;
  }

  .section {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .section.for-inner {
    padding-top: 145px;
  }

  .section.overflow {
    padding-bottom: 120px;
  }

  .title-1 {
    font-size: 6em;
  }

  .title-1.for-blog-page {
    font-size: 70px;
  }

  .licensing-block {
    width: 100%;
  }

  .services-wrapper {
    width: 70%;
  }

  .margin-100px._60px {
    margin-top: 60px;
  }

  .project-grid-main {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    flex-direction: column;
    display: flex;
  }

  .info-flex {
    width: 100%;
    position: relative;
    top: 0;
  }

  .project-line-divider {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .navigation-main {
    grid-template-columns: 1fr .4fr 1fr;
    padding-left: 3%;
    padding-right: 3%;
    display: flex;
    position: absolute;
  }

  .navigation-items {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    flex-direction: column;
    align-items: center;
  }

  .nav-text-wrapper {
    height: 64px;
  }

  .text-line, .text-full {
    font-size: 70px;
  }

  .card-block.second {
    height: 32svh;
  }

  .text-gray {
    top: -10px;
  }

  .parallax-image-block, .parallax-image-block._20em {
    height: 35em;
  }

  .parallax-image-block.blog-page {
    height: 40em;
  }

  .pricing-grid {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 133px;
    padding-bottom: 166px;
  }

  .hero.for-inner {
    background-image: url("https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0697_CTA.avif");
    background-position: 50%;
    background-size: cover;
  }

  .display-1.biger {
    text-align: center;
  }

  .footer-grid {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    flex-direction: column;
    display: flex;
  }

  .team-grid {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  .collection-item {
    flex: 0 auto;
    width: 50%;
    margin-bottom: 20px;
    padding-right: 20px;
  }

  .blog-grid {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  .blog-image {
    height: 250px;
  }

  .hero-grid {
    flex-direction: column-reverse;
    display: flex;
  }

  .section-video {
    padding: 80px 2%;
  }

  .section-video.image {
    max-width: none;
    min-height: 450px;
  }

  .main-display {
    max-width: 90%;
  }

  .main-display.for-fade {
    font-size: 29px;
  }

  .contact-grid-main {
    grid-row-gap: 30px;
    grid-template-columns: 1.2fr;
  }

  .service-item {
    padding: 24px;
  }

  .title-main {
    font-size: 22px;
    line-height: 1.2;
  }

  .client-grid {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    flex-direction: column;
    display: flex;
  }

  .arrow-slider-right {
    inset: auto 39.5% -90px auto;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }

  .slider-mask {
    position: static;
  }

  .arrow-slider-left {
    inset: auto auto -90px 39.5%;
  }

  .brand-image {
    margin-bottom: 40px;
  }

  .left-part {
    background-size: 240px;
  }

  .case-wrapper {
    max-width: 100%;
  }

  .vertical-flex {
    flex-direction: column;
    margin-top: 5px;
    padding-bottom: 25px;
  }

  .view-project-icon {
    font-size: 14px;
    font-weight: 600;
  }

  .work-title-first {
    font-size: 28px;
  }

  .contact-wrapper {
    background-image: none;
    background-repeat: repeat;
    background-size: auto;
    min-height: auto;
    padding: 50px;
  }

  .faq-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .title-2 {
    font-size: 40px;
  }

  .title-3 {
    font-size: 40px;
    line-height: 1.1;
  }

  .section {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section.for-inner {
    padding-top: 150px;
  }

  .section._100px {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .title-1 {
    font-size: 5em;
    line-height: .9;
  }

  .title-1.for-blog-page {
    font-size: 50px;
  }

  .services-wrapper {
    width: 100%;
    margin-bottom: 15px;
  }

  .project-grid-main {
    grid-row-gap: 30px;
    flex-direction: column;
    display: flex;
  }

  .navigation-main {
    grid-template-columns: 1fr .6fr 1fr;
  }

  .menu-big {
    flex-direction: column;
    align-items: stretch;
  }

  .navigation-items {
    align-items: center;
  }

  .nav-text-wrapper {
    height: auto;
  }

  .text-full {
    font-size: 95px;
    display: none;
  }

  .card-block.second {
    height: 37svh;
  }

  .text-gray {
    top: -8px;
  }

  .contact-link {
    margin-top: 40px;
  }

  .numbers {
    height: 120px;
  }

  .numbers.on-preloader {
    height: 100px;
  }

  .number-digit {
    font-size: 120px;
    line-height: 120px;
  }

  .number-digit.other-color {
    font-size: 100px;
    line-height: 100px;
  }

  .parallax-image-block._20em, .parallax-image-block.blog-page {
    height: 30em;
  }

  .hero {
    padding-top: 128px;
    padding-bottom: 167px;
  }

  .hero.for-inner {
    padding-top: 153px;
  }

  .display-1 {
    font-size: 58px;
  }

  .display-1.biger {
    font-size: 80px;
  }

  .hero-title-flex {
    max-width: 100%;
  }

  .main-grid {
    flex-direction: column;
    display: flex;
  }

  .copyright-flex {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .team-grid {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: 1fr 1fr;
  }

  .collection-item {
    width: 100%;
    margin-bottom: 40px;
    padding-right: 0;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-image {
    height: 320px;
  }

  .absolute-lines {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .section-video.image {
    min-height: 420px;
  }

  .main-display {
    font-size: 30px;
  }

  .form-grid {
    grid-column-gap: 18px;
    grid-row-gap: 18px;
    grid-template-columns: 1fr;
  }

  .contact-grid-main {
    grid-template-columns: 1fr;
  }

  .label {
    max-width: 95%;
  }

  .service-item {
    width: 100%;
  }

  .arrow-slider-right {
    width: 56px;
    min-width: 56px;
    height: 56px;
    min-height: 56px;
    font-size: 22px;
    line-height: 24px;
    bottom: -72px;
    right: 38%;
  }

  .arrow-slider-left {
    width: 56px;
    min-width: 56px;
    height: 56px;
    min-height: 56px;
    font-size: 22px;
    line-height: 24px;
    bottom: -72px;
    left: 38%;
  }

  .brand-image {
    margin-bottom: 32px;
  }

  .card-testimonial {
    padding: 48px 32px;
  }

  .left-part {
    min-height: 500px;
  }

  .vertical-flex {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding-bottom: 0;
  }

  .absolute-logo {
    width: 120px;
  }

  .title-line-wrapper {
    display: none;
  }

  .project-circle-text {
    width: 90px;
    height: 90px;
  }

  .absolute-bottom {
    bottom: 15px;
  }

  .contact-wrapper {
    max-width: 100%;
  }

  .faq-grid {
    grid-row-gap: 2.5rem;
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 479px) {
  p {
    font-size: 16px;
  }

  .subhead {
    max-width: 100%;
    font-size: 24px;
  }

  .input {
    min-height: 54px;
    padding-left: 18px;
    padding-right: 18px;
  }

  .input::placeholder {
    font-size: 16px;
    line-height: 16px;
  }

  .color-row {
    flex-direction: column;
  }

  .title-2 {
    font-size: 32px;
  }

  .color-block-parent {
    width: 100%;
    margin-right: 3%;
  }

  .title-3 {
    font-size: 30px;
  }

  .color-block {
    width: 100%;
    height: 55px;
    margin-bottom: 10px;
    margin-right: 0;
  }

  .section {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section.for-inner {
    padding-top: 115px;
  }

  .title-1 {
    font-size: 39px;
    line-height: 1.1;
  }

  .title-1.for-blog-page {
    font-size: 30px;
  }

  .licensing-content {
    flex-direction: column;
  }

  .image-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .shrink-item {
    margin-right: 0;
  }

  .shrink-item.flex {
    margin-top: 20px;
    margin-right: 0;
  }

  .copyright-dot {
    display: none;
  }

  .margin-50px {
    margin-top: 30px;
  }

  .services-wrapper {
    width: 100%;
  }

  .photo-move-2, .photo-move {
    max-width: 100%;
  }

  .line-divider {
    margin-top: 70px;
    margin-bottom: 70px;
  }

  .uppercase {
    font-size: 15px;
  }

  .project-grid-main {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  .info-flex {
    padding: 29px 16px;
  }

  .info-content {
    grid-column-gap: 15px;
    justify-content: flex-start;
  }

  .navigation-main {
    grid-template-columns: 1fr 1fr;
    padding: 4px 2% 4px 3%;
  }

  .circle-absolute.hide {
    display: none;
  }

  .text-line {
    font-size: 46px;
  }

  .title-tag.big {
    font-size: 36px;
  }

  .card-block.second {
    height: 26svh;
  }

  .text-gray {
    width: 30px;
    height: 30px;
    font-size: 14px;
    top: -3px;
  }

  .numbers, .numbers.on-preloader {
    height: 80px;
  }

  .number-digit, .number-digit.other-color {
    font-size: 80px;
    line-height: 80px;
  }

  .parallax-image-block {
    height: 23em;
  }

  .parallax-image-block._20em, .parallax-image-block.blog-page {
    height: 25em;
  }

  .pricing-grid {
    grid-row-gap: 80px;
  }

  .pricing-card {
    padding: 30px 20px;
  }

  .pricing-center-wrapper {
    font-size: 18px;
  }

  .hero {
    padding-top: 112px;
    padding-bottom: 129px;
  }

  .hero.for-inner {
    padding-top: 115px;
    padding-bottom: 107px;
  }

  .display-1 {
    font-size: 34px;
  }

  .display-1.biger {
    font-size: 46px;
  }

  .hero-title-flex, .max-w-center {
    max-width: 100%;
  }

  .footer-title-tag {
    font-size: 11px;
    line-height: 1.4;
  }

  .visit-grid {
    grid-row-gap: 15px;
    grid-template-columns: 1fr;
  }

  .footer {
    padding-bottom: 20px;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .collection-item {
    width: 100%;
  }

  .scroll-down-wrapper {
    bottom: 20px;
  }

  .blog-image {
    height: 200px;
    min-height: 230px;
  }

  .blog-title {
    font-size: 24px;
  }

  .hero-grid {
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }

  .label-button {
    font-size: 15px;
  }

  .section-video {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .section-video.image {
    min-height: 350px;
  }

  .display-2 {
    font-size: 40px;
  }

  .main-display {
    font-size: 26px;
  }

  .main-display.for-fade {
    font-size: 24px;
  }

  .contact-form-left-side {
    padding-left: 0;
    padding-right: 0;
  }

  .input-main {
    min-height: 54px;
    padding-left: 18px;
    padding-right: 18px;
  }

  .input-main::placeholder {
    font-size: 16px;
    line-height: 16px;
  }

  .label {
    font-size: 24px;
    line-height: 28px;
  }

  .overlay-bottom {
    min-height: 100px;
    padding-bottom: 35px;
  }

  .service-item {
    min-height: 270px;
  }

  .logo-image-grid {
    grid-template-columns: 1fr 1fr;
  }

  .logo-gray {
    min-height: 90px;
    padding: 26px;
  }

  .project-circle {
    width: 100px;
    height: 100px;
  }

  .view-project-ico.w--current {
    width: 60px;
    height: 60px;
  }

  .arrow-slider-right {
    bottom: -72px;
    right: 26%;
  }

  .arrow-slider-left {
    bottom: -72px;
    left: 26%;
  }

  .brand-image {
    margin-bottom: 32px;
  }

  .card-testimonial {
    padding-left: 24px;
    padding-right: 24px;
  }

  .left-part {
    background-size: 210px;
  }

  .case-wrapper {
    grid-template-columns: 1fr;
  }

  .view-project-icon {
    font-size: 15px;
    line-height: 20px;
  }

  .view-project-icon.w--current {
    width: 60px;
    height: 60px;
  }

  .project-circle-text {
    width: 100px;
    height: 100px;
  }

  .work-title-first {
    font-size: 23px;
  }

  .contact-wrapper {
    padding: 40px 25px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}

[flexboy_id="w-node-_0fdb14b0-3511-2d89-8eb4-92ac0a367a5e-9f8a0602"] {
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: center;
}

[flexboy_id="w-node-_74b42139-1783-4ea7-5b3e-f8bf7e6dc454-9f8a0602"] {
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
}

[flexboy_id="w-node-_5bb72546-602c-9c7e-0f8a-692e82f30809-9f8a0602"] {
  grid-row: span 2 / span 2;
}

[flexboy_id="w-node-_05776c1d-20e8-bd09-85c9-622a95755136-9f8a0602"], [flexboy_id="w-node-fa4fa842-4eae-580f-01cb-d73de6e82daf-9f8a0602"], [flexboy_id="w-node-_8b268ce4-d108-a88d-4b68-4c3676bc8c23-9f8a0602"], [flexboy_id="w-node-_5477d7df-d4fe-be43-e157-71016a65825c-9f8a0602"], [flexboy_id="w-node-c9a9dcbd-aa54-7b6e-99e5-58d62db219ee-9f8a0602"], [flexboy_id="w-node-_91ed8430-9f91-7f49-663f-38b6b4ced133-9f8a0602"], [flexboy_id="w-node-_79655d70-4c56-aa9c-95aa-5cbeaa185b96-9f8a0602"], [flexboy_id="w-node-a2e02eb3-b362-aea9-c70d-0505d53fb241-9f8a0602"], [flexboy_id="w-node-e0445cce-2ba0-5f86-d6eb-503d3c6828f4-9f8a0602"] {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

[flexboy_id="w-node-e0445cce-2ba0-5f86-d6eb-503d3c682912-9f8a0602"] {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

[flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e3488c-29e34889"], [flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e34893-29e34889"], [flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e348a3-29e34889"], [flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e348a4-29e34889"] {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

[flexboy_id="w-node-_7ac50a65-37bc-27e0-9852-a4a48d24ffed-ac5c2932"] {
  justify-self: start;
}

[flexboy_id="w-node-e6b90070-534e-6249-9c3c-caa7200ae1d1-ac5c2932"] {
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: end;
}

#w-node-_42d59dcc-7e66-7b68-b0d0-13e1e6f75447-9f8a0605, #w-node-_42d59dcc-7e66-7b68-b0d0-13e1e6f7544b-9f8a0605, #w-node-_83c0cf83-ded7-64a6-bc1b-b4b38903253a-9f8a0605, #w-node-_83c0cf83-ded7-64a6-bc1b-b4b38903254f-9f8a0605, #w-node-ad39c63a-3e4f-2f62-47ee-7aeaf6959f8b-9f8a0609 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-ad39c63a-3e4f-2f62-47ee-7aeaf6959fae-9f8a0609 {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

#w-node-_47f7cd59-8113-5102-80a7-595334cb3c9a-9f8a060e {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-d2a94567-42d6-14d3-97eb-c77c58db5e64-9f8a060e {
  place-self: auto;
}

#w-node-_2aae0191-e702-ff30-cf3c-f00636b91df7-9f8a0613, #w-node-_2aae0191-e702-ff30-cf3c-f00636b91dfd-9f8a0613 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

@media screen and (max-width: 991px) {
  [flexboy_id="w-node-_74b42139-1783-4ea7-5b3e-f8bf7e6dc454-9f8a0602"] {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
  }

  [flexboy_id="w-node-_5bb72546-602c-9c7e-0f8a-692e82f30809-9f8a0602"] {
    grid-row: span 2 / span 2;
  }
}

@media screen and (max-width: 767px) {
  [flexboy_id="w-node-_74b42139-1783-4ea7-5b3e-f8bf7e6dc454-9f8a0602"] {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }

  [flexboy_id="w-node-_5bb72546-602c-9c7e-0f8a-692e82f30809-9f8a0602"] {
    grid-row: span 2 / span 2;
  }
}

@media screen and (max-width: 479px) {
  [flexboy_id="w-node-e0445cce-2ba0-5f86-d6eb-503d3c682912-9f8a0602"] {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }

  [flexboy_id="w-node-_7ac50a65-37bc-27e0-9852-a4a48d24ffed-ac5c2932"] {
    justify-self: start;
  }

  #w-node-ad39c63a-3e4f-2f62-47ee-7aeaf6959fae-9f8a0609 {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
}

      </style>
      <link href="https://fonts.googleapis.com" rel="preconnect">
      <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
      <!-- <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script> -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700%7CInter+Tight:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic%7CPlayfair+Display:regular,500,600,700,800,900,italic,500italic,600italic,700italic,800italic,900italic" media="all">
      <script type="text/javascript">WebFont.loasd({  google: {    families: ["Oswald:200,300,400,500,600,700","Inter Tight:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic","Playfair Display:regular,500,600,700,800,900,italic,500italic,600italic,700italic,800italic,900italic"]  }});</script>
      <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
      <link href="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e294700645b54f46ab296_logo-small.jpg" rel="shortcut icon" type="image/x-icon">
      <link href="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e294934c12705f93d0f66_logo.png" rel="apple-touch-icon">
      <script type="text/javascript">window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}","hideDecimalForWholeNumbers":false};</script>
   </head>
   <body>
      <div class="page-content">
         <div class="page-wrapper">
            <div class="navigation-wrapper">
               <div class="navigation-main" style="will-change: background; background-color: rgb(42, 44, 41);">
                  <a flexboy_id="w-node-_7ac50a65-37bc-27e0-9852-a4a48d24ffed-ac5c2932" href="/" aria-current="page" class="w-inline-block w--current"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06af_logo.avif" loading="lazy" alt="" class="logo"></a>
                  <div flexboy_id="w-node-e6b90070-534e-6249-9c3c-caa7200ae1d1-ac5c2932">
                     <div data-w-id="85a80bc4-e0ad-d191-eb98-7a46ac5c2936" class="hamburger-circle">
                        <div class="menu-square" style="">
                           <div class="hamburger-line first" style=""></div>
                           <div class="hamburger-line second" style=""></div>
                        </div>
                        <div class="circle-absolute hide" style="transform: translate3d(0px, 0px, 0px) scale3d(0.2, 0.2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"></div>
                     </div>
                  </div>
               </div>
               <div class="menu-big" style="display: none;">
                  <div class="menu-content">
                     <div>
                        <div class="navigation-items">
                           <a href="/" data-w-id="85a80bc4-e0ad-d191-eb98-7a46ac5c293f" aria-current="page" class="navigation-link-move w-inline-block w--current">
                              <div class="text-gray" style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 5deg); transform-style: preserve-3d; opacity: 1;">01</div>
                              <div class="nav-text-wrapper _1" style="transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 7deg); transform-style: preserve-3d;">
                                 <div class="text-full" style="">Home</div>
                                 <div class="text-line" style="">Home</div>
                              </div>
                           </a>
                           <a href="/about" data-w-id="09ed4e6a-7b47-349f-a542-072066ddf743" class="navigation-link-move w-inline-block">
                              <div class="text-gray" style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 5deg); transform-style: preserve-3d; opacity: 1;">02</div>
                              <div class="nav-text-wrapper _2" style="transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 7deg); transform-style: preserve-3d;">
                                 <div class="text-full" style="">About</div>
                                 <div class="text-line" style="">About</div>
                              </div>
                           </a>
                           <a href="/blog-1" data-w-id="85a80bc4-e0ad-d191-eb98-7a46ac5c294b" class="navigation-link-move w-inline-block">
                              <div class="text-gray" style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 5deg); transform-style: preserve-3d; opacity: 1;">03</div>
                              <div class="nav-text-wrapper _3" style="transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 7deg); transform-style: preserve-3d;">
                                 <div class="text-full" style="">News</div>
                                 <div class="text-line" style="">News</div>
                              </div>
                           </a>
                           <a href="/contact-1" data-w-id="85a80bc4-e0ad-d191-eb98-7a46ac5c2951" class="navigation-link-move w-inline-block">
                              <div class="text-gray" style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 5deg); transform-style: preserve-3d; opacity: 1;">04</div>
                              <div class="nav-text-wrapper _4" style="transform: translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 7deg); transform-style: preserve-3d;">
                                 <div class="text-full" style="">Contact</div>
                                 <div class="text-line" style="">Contact</div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="menu-background" style="transform: translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
               </div>
            </div>
            <div class="hero">
               <div class="container">
                  <div>
                     <div class="hero-grid">
                        <div class="hero-title-flex">
                           <h1 data-w-id="1bb98a3f-7440-0562-df9e-2f58af415199" style="opacity: 1;" class="display-1">The virtual<br></h1>
                           <h1 data-w-id="a1a55a3e-bce7-162b-3ca8-0430851d731e" style="opacity: 1;" class="display-1"><span class="gray-color">marketing firm.</span><br></h1>
                           <div class="margin-40px">
                              <div>
                                 <p data-w-id="c4a3a66d-dbcf-1bc2-0766-a1b5935503e7" style="opacity: 1;" class="subhead">We engineer robust digital solutions for the effective <span class="gray-color">refinement and improvement of sales funnels.</span><strong><br></strong></p>
                                 <div data-w-id="c4a3a66d-dbcf-1bc2-0766-a1b5935503eb" style="opacity: 1;" class="margin-40px">
                                    <a href="/contact-1" class="button-arrow-link w-inline-block">
                                       <div class="button-label">
                                          <div class="label-button">Contact us</div>
                                          <div class="arrow-wrapper"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067c_arrow.svg" loading="lazy" alt="" class="icon-arrow" style=""></div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div flexboy_id="w-node-_0fdb14b0-3511-2d89-8eb4-92ac0a367a5e-9f8a0602" class="div-block-2"><img class="shape" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b1_3d.avif" width="500" alt="" style="opacity: 1;" sizes="(max-width: 991px) 86vw, (max-width: 1439px) 45vw, 595.8984375px" data-w-id="c00bbfd1-83a9-8c85-c17a-971e7754b4a4" loading="lazy" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b1_3d-p-500.avif 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b1_3d-p-800.avif 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b1_3d.avif 1604w"></div>
                     </div>
                  </div>
               </div>
               <div data-w-id="268eff52-1608-cc6c-0fd3-55af3fd51bf9" style="opacity: 1;" class="scroll-down-wrapper">
                  <div class="scroll-flex">
                     <div class="lottie-animation" data-w-id="c0e261e4-ae1e-2a9d-6b5c-84cfdeb7c41f" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0654_Animation%20-%201702303619435.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="5" data-duration="0">
              
                     </div>
                  </div>
               </div>
            </div>
            <section class="section">
               <div class="container">
                  <div>
                     <div flexboy_id="w-node-_74b42139-1783-4ea7-5b3e-f8bf7e6dc454-9f8a0602" class="w-layout-layout quick-stack wf-layout-layout">
                        <div flexboy_id="w-node-_5bb72546-602c-9c7e-0f8a-692e82f30809-9f8a0602" data-w-id="5bb72546-602c-9c7e-0f8a-692e82f30809" style="opacity: 1;" class="w-layout-cell">
                           <div class="left-part">
                              <p data-w-id="73c8cd38-d32a-a14c-25f4-e96be0dec957" style="opacity: 1;" class="subhead">A full array of primary solutionss <span class="gray-color">integral to client success.</span><strong><br></strong></p>
                           </div>
                        </div>
                        <div class="w-layout-cell">
                           <div data-w-id="a74f1b05-165a-4949-d55e-53bf00b6c8d3" style="opacity: 1;" class="service-item">
                              <div class="icon-main"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b3_icons8-marketing-256%20(4).avif" loading="lazy" width="38" alt=""></div>
                              <div>
                                 <h2 class="title-main">Strategic Planning</h2>
                                 <div class="margin-15px">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="w-layout-cell">
                           <div data-w-id="10739c00-4762-7f97-68f5-9580179f6156" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="service-item">
                              <div class="icon-main"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b4_icons8-doughnut-chart-256%20(2).avif" loading="lazy" width="38" alt=""></div>
                              <div>
                                 <h2 class="title-main">Market Analysis</h2>
                                 <div class="margin-15px">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="w-layout-cell">
                           <div data-w-id="1bb4551b-5a79-14ff-3b72-1e7802904548" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="service-item">
                              <div class="icon-main"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b5_icons8-life-cycle-256.avif" loading="lazy" width="38" alt=""></div>
                              <div>
                                 <h2 class="title-main">Development</h2>
                                 <div class="margin-15px">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="w-layout-cell">
                           <div data-w-id="aca91929-c61d-92c2-8ae6-2bd3a8dac687" style="opacity: 1;" class="service-item">
                              <div class="icon-main"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a06b6_icons8-analytics-256%20(2).avif" loading="lazy" width="36" alt=""></div>
                              <div>
                                 <h2 class="title-main">Paid Media</h2>
                                 <div class="margin-15px">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="margin-100px">
                     <div class="client-grid">
                        <div flexboy_id="w-node-_05776c1d-20e8-bd09-85c9-622a95755136-9f8a0602">
                           <p data-w-id="40d292f9-7c83-eb6f-0d20-004ae167392e" style="opacity: 1;" class="subhead">Enabling the progress of newly <span class="gray-color">established companies.</span><strong><br></strong></p>
                           <div data-w-id="f767b0dc-bdca-5dd8-fc95-f91a877401f3" style="opacity: 1;" class="margin-40px">
                              <a href="/contact-1" class="button-arrow-link w-inline-block">
                                 <div class="button-label">
                                    <div class="label-button">Work with us</div>
                                    <div class="arrow-wrapper"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067c_arrow.svg" loading="lazy" alt="" class="icon-arrow"></div>
                                 </div>
                              </a>
                           </div>
                        </div>
                        <div flexboy_id="w-node-fa4fa842-4eae-580f-01cb-d73de6e82daf-9f8a0602" data-w-id="fa4fa842-4eae-580f-01cb-d73de6e82daf" style="opacity: 1;" class="logo-image-grid">
                           <div flexboy_id="w-node-_8b268ce4-d108-a88d-4b68-4c3676bc8c23-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065d_theo-black.svg" loading="lazy" width="100" alt="" class="light-color"></div>
                           <div flexboy_id="w-node-_5477d7df-d4fe-be43-e157-71016a65825c-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067f_KOBE-black.svg" loading="lazy" width="100" alt="" class="light-color"></div>
                           <div flexboy_id="w-node-c9a9dcbd-aa54-7b6e-99e5-58d62db219ee-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0679_logo-1.svg" loading="lazy" width="100" alt="" class="light-color"></div>
                           <div flexboy_id="w-node-_91ed8430-9f91-7f49-663f-38b6b4ced133-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067d_Tokyo-black.svg" loading="lazy" width="100" alt="" class="light-color"></div>
                           <div flexboy_id="w-node-_79655d70-4c56-aa9c-95aa-5cbeaa185b96-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065b_logo-9.svg" loading="lazy" width="95" alt="" class="light-color"></div>
                           <div flexboy_id="w-node-a2e02eb3-b362-aea9-c70d-0505d53fb241-9f8a0602" class="logo-gray"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067b_logo-5.svg" loading="lazy" width="100" alt="" class="light-color"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="section work-svh">
               <div class="container">
                  <div>
                     <div data-w-id="afe96f42-4ff7-eda0-9fff-f6513411e273" style="opacity: 1;" class="max-w-center">
                        <h2 class="display-2">Case study</h2>
                        <div class="margin-20px">
                           <p class="subhead">Authentic, tangible project with practical applications <span class="gray-color">and real-world impact.</span><strong><br></strong></p>
                        </div>
                     </div>
                  </div>
                  <div class="margin-60px">
                     <div class="w-dyn-list">
                        <div role="list" class="case-wrapper w-dyn-items">
                           <div data-w-id="24ad7646-2fc8-ec3b-1224-bb0e692e7b97" style="opacity: 1;" role="listitem" class="w-dyn-item">
                              <div data-w-id="5d460046-583b-ea92-c164-67887ed337b3" class="work-wrapper-main">
                                 <div class="circle-center">
                                    <img alt="" loading="eager" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a068e_case-1.jpg" sizes="(max-width: 479px) 90vw, (max-width: 767px) 43vw, (max-width: 991px) 44vw, (max-width: 1439px) 40vw, 527.5px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a068e_case-1-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a068e_case-1-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a068e_case-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a068e_case-1.jpg 1500w" class="work-photo-first" style="">
                                    <a href="#" class="project-circle-text w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog" style="">
                                       <div class="view-project-icon"><img src="https://cdn.prod.website-files.com/6572ef43db6c7157ddd0ff0b/6572ef43db6c7157ddd0ff14_icons8-play.svg" loading="lazy" width="22" alt="" class="image"></div>
                                       <script type="application/json" class="w-json">{
                                          "items": [
                                            {
                                              "url": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "originalUrl": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "width": 940,
                                              "height": 528,
                                              "thumbnailUrl": "https://i.ytimg.com/vi/-6AvSF7Prt0/hqdefault.jpg",
                                              "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-6AvSF7Prt0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-6AvSF7Prt0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-6AvSF7Prt0%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
                                              "type": "video"
                                            }
                                          ],
                                          "group": ""
                                          }
                                       </script>
                                    </a>
                                    <img alt="" width="110" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06cd_ab-white.svg" class="absolute-logo">
                                 </div>
                                 <div class="absolute-bottom">
                                    <div class="vertical-flex">
                                       <a href="/project/dreamy-visions" class="title-line-wrapper w-inline-block">
                                          <h2 class="work-title-first">Dreamy Visions</h2>
                                          <div class="line-overlay">
                                             <div class="line-title" style=""></div>
                                          </div>
                                       </a>
                                       <a href="/project/dreamy-visions" class="button-first w-button">View full project</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div data-w-id="24ad7646-2fc8-ec3b-1224-bb0e692e7b97" style="opacity: 1;" role="listitem" class="w-dyn-item">
                              <div data-w-id="5d460046-583b-ea92-c164-67887ed337b3" class="work-wrapper-main">
                                 <div class="circle-center">
                                    <img alt="" loading="eager" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ab_case-3.jpg" sizes="(max-width: 479px) 90vw, (max-width: 767px) 43vw, (max-width: 991px) 44vw, (max-width: 1439px) 40vw, 527.5px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ab_case-3-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ab_case-3-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ab_case-3-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ab_case-3.jpg 1500w" class="work-photo-first" style="">
                                    <a href="#" class="project-circle-text w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog" style="">
                                       <div class="view-project-icon"><img src="https://cdn.prod.website-files.com/6572ef43db6c7157ddd0ff0b/6572ef43db6c7157ddd0ff14_icons8-play.svg" loading="lazy" width="22" alt="" class="image"></div>
                                       <script type="application/json" class="w-json">{
                                          "items": [
                                            {
                                              "url": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "originalUrl": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "width": 940,
                                              "height": 528,
                                              "thumbnailUrl": "https://i.ytimg.com/vi/-6AvSF7Prt0/hqdefault.jpg",
                                              "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-6AvSF7Prt0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-6AvSF7Prt0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-6AvSF7Prt0%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
                                              "type": "video"
                                            }
                                          ],
                                          "group": ""
                                          }
                                       </script>
                                    </a>
                                    <img alt="" width="110" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e4_KOBE-white%20(1).svg" class="absolute-logo">
                                 </div>
                                 <div class="absolute-bottom">
                                    <div class="vertical-flex">
                                       <a href="/project/whimsy-tales" class="title-line-wrapper w-inline-block">
                                          <h2 class="work-title-first">Whimsy Tales</h2>
                                          <div class="line-overlay">
                                             <div class="line-title" style=""></div>
                                          </div>
                                       </a>
                                       <a href="/project/whimsy-tales" class="button-first w-button">View full project</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div data-w-id="24ad7646-2fc8-ec3b-1224-bb0e692e7b97" style="opacity: 1;" role="listitem" class="w-dyn-item">
                              <div data-w-id="5d460046-583b-ea92-c164-67887ed337b3" class="work-wrapper-main">
                                 <div class="circle-center">
                                    <img alt="" loading="eager" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e7_case-2.jpg" sizes="(max-width: 479px) 90vw, (max-width: 767px) 43vw, (max-width: 991px) 44vw, (max-width: 1439px) 40vw, 527.5px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e7_case-2-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e7_case-2-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e7_case-2-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e7_case-2.jpg 1500w" class="work-photo-first" style="">
                                    <a href="#" class="project-circle-text w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog" style="">
                                       <div class="view-project-icon"><img src="https://cdn.prod.website-files.com/6572ef43db6c7157ddd0ff0b/6572ef43db6c7157ddd0ff14_icons8-play.svg" loading="lazy" width="22" alt="" class="image"></div>
                                       <script type="application/json" class="w-json">{
                                          "items": [
                                            {
                                              "url": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "originalUrl": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "width": 940,
                                              "height": 528,
                                              "thumbnailUrl": "https://i.ytimg.com/vi/-6AvSF7Prt0/hqdefault.jpg",
                                              "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-6AvSF7Prt0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-6AvSF7Prt0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-6AvSF7Prt0%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
                                              "type": "video"
                                            }
                                          ],
                                          "group": ""
                                          }
                                       </script>
                                    </a>
                                    <img alt="" width="110" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e5_theo-white%20(1).svg" class="absolute-logo">
                                 </div>
                                 <div class="absolute-bottom">
                                    <div class="vertical-flex">
                                       <a href="/project/colorful-journeys" class="title-line-wrapper w-inline-block">
                                          <h2 class="work-title-first">Colorful Journeys</h2>
                                          <div class="line-overlay">
                                             <div class="line-title" style=""></div>
                                          </div>
                                       </a>
                                       <a href="/project/colorful-journeys" class="button-first w-button">View full project</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div data-w-id="24ad7646-2fc8-ec3b-1224-bb0e692e7b97" style="opacity: 1;" role="listitem" class="w-dyn-item">
                              <div data-w-id="5d460046-583b-ea92-c164-67887ed337b3" class="work-wrapper-main">
                                 <div class="circle-center">
                                    <img alt="" loading="eager" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e8_case-4.jpg" sizes="(max-width: 479px) 90vw, (max-width: 767px) 43vw, (max-width: 991px) 44vw, (max-width: 1439px) 40vw, 527.5px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e8_case-4-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e8_case-4-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e8_case-4-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e8_case-4.jpg 1500w" class="work-photo-first" style="">
                                    <a href="#" class="project-circle-text w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog" style="">
                                       <div class="view-project-icon"><img src="https://cdn.prod.website-files.com/6572ef43db6c7157ddd0ff0b/6572ef43db6c7157ddd0ff14_icons8-play.svg" loading="lazy" width="22" alt="" class="image"></div>
                                       <script type="application/json" class="w-json">{
                                          "items": [
                                            {
                                              "url": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "originalUrl": "https://www.youtube.com/watch?v=-6AvSF7Prt0",
                                              "width": 940,
                                              "height": 528,
                                              "thumbnailUrl": "https://i.ytimg.com/vi/-6AvSF7Prt0/hqdefault.jpg",
                                              "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F-6AvSF7Prt0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-6AvSF7Prt0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-6AvSF7Prt0%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
                                              "type": "video"
                                            }
                                          ],
                                          "group": ""
                                          }
                                       </script>
                                    </a>
                                    <img alt="" width="110" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e6_Tokyo-white%20(1).svg" class="absolute-logo">
                                 </div>
                                 <div class="absolute-bottom">
                                    <div class="vertical-flex">
                                       <a href="/project/night-desert" class="title-line-wrapper w-inline-block">
                                          <h2 class="work-title-first">Night Desert</h2>
                                          <div class="line-overlay">
                                             <div class="line-title" style=""></div>
                                          </div>
                                       </a>
                                       <a href="/project/night-desert" class="button-first w-button">View full project</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="overlay-bottom">
                  <div class="container"></div>
               </div>
               <div class="overlay-bottom top">
                  <div class="container"></div>
               </div>
            </section>
            <section class="section overflow">
               <div class="container">
                  <div>
                     <div>
                        <div data-w-id="59c74631-582b-6ba7-d636-f1b4fb53b045" style="opacity: 1;">
                           <p class="subhead">A network of over 100 trusted <span class="gray-color">clients around the world.</span><strong><br></strong></p>
                        </div>
                     </div>
                  </div>
                  <div class="margin-60px">
                     <div data-delay="4000" data-animation="slide" class="slide-wrapper w-slider" data-autoplay="false" data-easing="ease" style="opacity: 1;" data-hide-arrows="false" data-disable-swipe="false" data-w-id="e0852930-c350-4733-7da5-c7c4cabb95a2" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
                        <div class="slider-mask w-slider-mask" flexboy_id="w-slider-mask-0">
                           <div class="slide-item w-slide" aria-label="1 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065d_theo-black.svg" alt="" width="110" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Working with Tūsla has been a transformative experience for our brand."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Emma Harrison, <span class="gray-color" aria-hidden="true">BrightFutures</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="2 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067f_KOBE-black.svg" alt="" width="110" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Tūsla's creative prowess in the digital marketing realm is unmatched."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Lucas Smith, <span class="gray-color" aria-hidden="true">Marketing Director</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="3 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0679_logo-1.svg" alt="" width="105" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Choosing Tūsla for our digital marketing needs was one of the best decisions we've made."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Sophia Patel, <span class="gray-color" aria-hidden="true">Tech Innovate</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="4 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065d_theo-black.svg" alt="" width="110" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Working with Tūsla has been a transformative experience for our brand."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Emma Harrison, <span class="gray-color" aria-hidden="true">BrightFutures</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="5 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067f_KOBE-black.svg" alt="" width="110" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Tūsla's creative prowess in the digital marketing realm is unmatched."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Lucas Smith, <span class="gray-color" aria-hidden="true">Marketing Director</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="6 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0679_logo-1.svg" alt="" width="105" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Choosing Tūsla for our digital marketing needs was one of the best decisions we've made."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Sophia Patel, <span class="gray-color" aria-hidden="true">Tech Innovate</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="7 of 9" role="group" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065d_theo-black.svg" alt="" width="110" class="brand-image">
                                 <div class="margin-bottom">
                                    <p class="subhead">"Working with Tūsla has been a transformative experience for our brand."<strong><br></strong></p>
                                 </div>
                                 <div class="margin-bottom">
                                    <p class="subhead small">Emma Harrison, <span class="gray-color">BrightFutures</span><strong><br></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="8 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a067f_KOBE-black.svg" alt="" width="110" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Tūsla's creative prowess in the digital marketing realm is unmatched."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Lucas Smith, <span class="gray-color" aria-hidden="true">Marketing Director</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div class="slide-item w-slide" aria-label="9 of 9" role="group" aria-hidden="true" style="transition: all; transform: translateX(-2415px); opacity: 1;">
                              <a href="https://facebook.com/" class="card-testimonial w-inline-block" tabindex="-1" aria-hidden="true">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0679_logo-1.svg" alt="" width="105" class="brand-image" aria-hidden="true">
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead" aria-hidden="true">"Choosing Tūsla for our digital marketing needs was one of the best decisions we've made."<strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                                 <div class="margin-bottom" aria-hidden="true">
                                    <p class="subhead small" aria-hidden="true">Sophia Patel, <span class="gray-color" aria-hidden="true">Tech Innovate</span><strong aria-hidden="true"><br aria-hidden="true"></strong></p>
                                 </div>
                              </a>
                           </div>
                           <div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore="">Slide 7 of 9.</div>
                        </div>
                        <div class="arrow-slider-left w-slider-arrow-left" role="button" tabindex="0" aria-controls='[flexboy_id="w-slider-mask-0"]' aria-label="previous slide"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0690_icons8-arrow-192%20(1).png" loading="lazy" width="23" alt="" class="invert-arrow"></div>
                        <div class="arrow-slider-right w-slider-arrow-right" role="button" tabindex="0" aria-controls='[flexboy_id="w-slider-mask-0"]' aria-label="next slide"><img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0692_icons8-arrow-192.png" loading="lazy" width="23" alt="" class="invert-arrow"></div>
                        <div class="dots-slider-hidden w-slider-nav w-round">
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 1 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 7 of 9" aria-pressed="true" role="button" tabindex="0" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 8 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                           <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 9 of 9" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="section">
               <div class="container">
                  <div data-w-id="d3b1e322-b32b-3ab9-cb1b-f68fca34a19e" style="opacity: 1;" class="contact-wrapper">
                     <div class="w-layout-grid contact-grid-main">
                        <div flexboy_id="w-node-e0445cce-2ba0-5f86-d6eb-503d3c6828f4-9f8a0602">
                           <div>
                              <p class="subhead">Get in touch today to receive our expert <span class="gray-color">financial consultation.</span><strong><br></strong></p>
                           </div>
                           <div class="margin-30px">
                              <div class="contact-form-left-side">
                                 <div class="w-form">
                                    <form flexboy_id="wf-form-Contact" name="wf-form-Contact" data-name="Contact" method="get" data-wf-page-id="678e28e8c165c3ab9f8a0602" data-wf-element-id="e0445cce-2ba0-5f86-d6eb-503d3c6828fa" aria-label="Contact">
                                       <div class="w-layout-grid form-grid">
                                          <div>
                                             <p class="label dark">Full Name<span class="gray-text-2"></span></p>
                                             <input class="input-main w-input" maxlength="256" name="Contact-Name" data-name="Contact Name" placeholder="John Doe" type="text" id="Contact-Name">
                                          </div>
                                          <div>
                                             <p class="label dark">Email<span class="gray-text-2"></span></p>
                                             <input class="input-main w-input" maxlength="256" name="Contact-Email" data-name="Contact Email" placeholder="contact@email.com" type="email" id="Contact-Email">
                                          </div>
                                          <div>
                                             <p class="label dark">Phone<span class="gray-text-2"></span></p>
                                             <input class="input-main w-input" maxlength="256" name="Contact-Phone" data-name="Contact Phone" placeholder="+1 345-678" type="tel" id="Contact-Phone">
                                          </div>
                                          <div>
                                             <p class="label dark">Schedule to receive call</p>
                                             <input class="input-main w-input" maxlength="256" name="Call" data-name="Call" placeholder="10:00 AM to 4:00 PM" type="text" id="Call">
                                          </div>
                                          <input type="submit" data-wait="Please wait..." flexboy_id="w-node-e0445cce-2ba0-5f86-d6eb-503d3c682912-9f8a0602" class="button-first gray w-button" value="Contact us">
                                       </div>
                                    </form>
                                    <div class="success-message-2 w-form-done" tabindex="-1" role="region" aria-label="Contact success">
                                       <div>
                                          <div>Thanks for reaching out. We will get back to you soon.</div>
                                       </div>
                                    </div>
                                    <div class="error-message-2 w-form-fail" tabindex="-1" role="region" aria-label="Contact failure">
                                       <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="margin-100px">
                     <div>
                        <div data-w-id="941fef1b-689d-7d0d-89b3-f94f83c13969" style="opacity: 1;" class="max-w-center more">
                           <div>
                              <p class="subhead">Comprehensive guide to commonly <span class="gray-color">asked questions.</span><strong><br></strong></p>
                           </div>
                        </div>
                     </div>
                     <div class="margin-60px">
                        <div data-w-id="185ec0ba-0179-35f0-5233-eac9eee3a0e1" style="opacity: 1;" class="w-layout-grid faq-grid">
                           <div class="faq-item">
                              <div class="faq-title">Ready to secure your future with estate planning?</div>
                              <div class="space-divider"></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                           </div>
                           <div class="faq-item">
                              <div class="faq-title">Facing legal troubles? Wondering how we can help?</div>
                              <div class="space-divider"></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                           </div>
                           <div class="faq-item">
                              <div class="faq-title">Questions about your defense?</div>
                              <div class="space-divider"></div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="section gray">
               <div class="container">
                  <div>
                     <div data-w-id="28450515-9d7d-0ef7-927a-fce99ed8a9fe" style="opacity: 1;" class="max-w-center">
                        <div>
                           <p class="subhead">Discover the latest tips, <span class="gray-color">trends and ideas.</span><strong><br></strong></p>
                        </div>
                     </div>
                  </div>
                  <div class="margin-60px">
                     <div class="w-dyn-list">
                        <div role="list" class="blog-grid w-dyn-items">
                           <div role="listitem" class="w-dyn-item">
                              <div data-w-id="295bfead-8fb3-d9a7-89f5-51f8c8644208" style="opacity: 1;">
                                 <a href="/post/our-design-process-explained" class="blog-image w-inline-block"><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e9_blog-2.jpg" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, (max-width: 1439px) 29vw, 386.6640625px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e9_blog-2-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e9_blog-2-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e9_blog-2-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06e9_blog-2.jpg 1500w" class="blog-image"></a>
                                 <div class="blog-content">
                                    <a href="/post-categories/code" class="category-tag">Code</a><a href="/post/our-design-process-explained" class="blog-title">Our design process explained</a>
                                    <div class="margin-20px">
                                       <p>April 27, 2023</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div role="listitem" class="w-dyn-item">
                              <div data-w-id="295bfead-8fb3-d9a7-89f5-51f8c8644208" style="opacity: 1;">
                                 <a href="/post/a-peek-into-our-branding-strategy" class="blog-image w-inline-block"><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ea_blog-1.jpg" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, (max-width: 1439px) 29vw, 386.6640625px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ea_blog-1-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ea_blog-1-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ea_blog-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06ea_blog-1.jpg 1500w" class="blog-image"></a>
                                 <div class="blog-content">
                                    <a href="/post-categories/marketing" class="category-tag">Marketing</a><a href="/post/a-peek-into-our-branding-strategy" class="blog-title">A peek into our branding strategy</a>
                                    <div class="margin-20px">
                                       <p>May 10, 2023</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div role="listitem" class="w-dyn-item">
                              <div data-w-id="295bfead-8fb3-d9a7-89f5-51f8c8644208" style="opacity: 1;">
                                 <a href="/post/developing-seamless-web-and-mobile-apps" class="blog-image w-inline-block"><img alt="" loading="lazy" src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06eb_blog-3.jpg" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 43vw, (max-width: 1439px) 29vw, 386.6640625px" srcset="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06eb_blog-3-p-500.jpg 500w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06eb_blog-3-p-800.jpg 800w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06eb_blog-3-p-1080.jpg 1080w, https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0633/678e28e8c165c3ab9f8a06eb_blog-3.jpg 1500w" class="blog-image"></a>
                                 <div class="blog-content">
                                    <a href="/post-categories/design" class="category-tag">Design</a><a href="/post/developing-seamless-web-and-mobile-apps" class="blog-title">Developing Seamless mobile apps</a>
                                    <div class="margin-20px">
                                       <p>April 1, 2023</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div class="footer">
               <div class="container">
                  <div class="footer-grid">
                     <div flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e3488c-29e34889" data-w-id="a48725d2-5e9e-2213-0f69-c7af29e3488c" style="transform: translate3d(0px, 28px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;">
                        <div class="footer-tag">
                           <div class="flex-tag-footer">
                              <div class="footer-title-tag">Vist us</div>
                           </div>
                        </div>
                        <div class="margin-40px">
                           <div class="visit-grid">
                              <div flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e34893-29e34889">
                                 <div class="flex-left add-bottom">
                                    <p class="link-underline">New York</p>
                                    <p>123 Broadway Street, Suite 16, New York, NY</p>
                                 </div>
                              </div>
                              <div class="flex-left add-bottom">
                                 <p class="link-underline">San Francisco</p>
                                 <p>789 Market Street, Floor 3, San Francisco, CA</p>
                              </div>
                              <div class="flex-left add-bottom">
                                 <p class="link-underline">Paris</p>
                                 <p>12 Rue de la Paix, 75002 Paris, France</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e348a3-29e34889"></div>
                     <div flexboy_id="w-node-a48725d2-5e9e-2213-0f69-c7af29e348a4-29e34889">
                        <div class="footer-tag">
                           <div class="flex-tag-footer">
                              <div class="footer-title-tag">Stay in touch</div>
                           </div>
                        </div>
                        <div class="margin-40px">
                           <div class="flex-left">
                              <p class="link-underline">+1 &nbsp;333 20 98 40</p>
                              <p class="link-underline">contact@tulsa.com</p>
                           </div>
                        </div>
                        <div class="margin-30px">
                           <div class="social-wrapper left">
                              <a data-w-id="412b02c0-adaf-c26e-009b-601a42b1e1ad" href="https://twitter.com/" target="_blank" class="social-icon w-inline-block">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a065a_x-logo.avif" loading="lazy" width="20" alt="" class="animation-image" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                                 <div class="social-circle" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"></div>
                              </a>
                              <a data-w-id="412b02c0-adaf-c26e-009b-601a42b1e1b0" href="https://twitter.com/" target="_blank" class="social-icon w-inline-block">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a069d_instagram.avif" loading="lazy" width="20" alt="" class="animation-image" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                                 <div class="social-circle" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"></div>
                              </a>
                              <a data-w-id="412b02c0-adaf-c26e-009b-601a42b1e1b3" href="https://twitter.com/" target="_blank" class="social-icon w-inline-block">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0658_linkedin.avif" loading="lazy" width="20" alt="" class="animation-image" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                                 <div class="social-circle" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"></div>
                              </a>
                              <a data-w-id="412b02c0-adaf-c26e-009b-601a42b1e1b6" href="https://twitter.com/" target="_blank" class="social-icon w-inline-block">
                                 <img src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/678e28e8c165c3ab9f8a0655_dribbble.avif" loading="lazy" width="20" alt="" class="animation-image" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                                 <div class="social-circle" style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;"></div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="margin-70px">
                     <div data-w-id="a48725d2-5e9e-2213-0f69-c7af29e348ba" class="copyright-flex" style="transform: translate3d(0px, 28px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;">
                        <p class="copyright">© This is a <a href="https://www.flowmance.com/" target="_blank" class="gray-link">Masterthemes</a> template powered by <a href="https://webflow.com/" target="_blank" class="gray-link">Webflow</a></p>
                        <div class="flex-link">
                           <a href="/template-info/style-guide" class="link-no-overline w-inline-block">
                              <p class="link-underline _0px">Style Guide</p>
                           </a>
                           <a href="/template-info/licensing" class="link-no-overline w-inline-block">
                              <p class="link-underline _0px">Image Licensing </p>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
      <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=678e28e8c165c3ab9f8a0601" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="https://cdn.prod.website-files.com/678e28e8c165c3ab9f8a0601/js/webflow.d004bdba.7eb2481a1a098685.js" type="text/javascript"></script>
      <div class="w-lightbox-backdrop w-lightbox-hide" style="transition: all, opacity 300ms; opacity: 1;">
         <div class="w-lightbox-container">
            <div class="w-lightbox-content">
               <div class="w-lightbox-spinner w-lightbox-hide" role="progressbar" aria-live="polite" aria-hidden="true" aria-busy="false" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-valuetext="Loaded image"></div>
               <div class="w-lightbox-control w-lightbox-left w-lightbox-inactive" role="button" aria-hidden="true" aria-controls="w-lightbox-view" aria-label="previous image" tabindex="-1"></div>
               <div class="w-lightbox-control w-lightbox-right w-lightbox-inactive" role="button" aria-hidden="true" aria-controls="w-lightbox-view" aria-label="next image" tabindex="-1"></div>
               <div class="w-lightbox-control w-lightbox-close" role="button" aria-label="close lightbox" tabindex="0"></div>
            </div>
            <div class="w-lightbox-strip" role="tablist"></div>
         </div>
      </div>
   </body>
</html>` }
        ]
      }
    },
    {
      id: 'template4',
      name: 'Template 4',
      data: {
        pages: [
          { component: ` 
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    
    <title>Freamfy Studio</title>

 
  </head>
  <body class="overflow-x-hidden">

   <nav class="p-[10px] flex flex-flow justify-between items-center mb-[45px]">
        <div>
            <h4 class=" text-2xl px-[20px] font-bold font-sans">
                Studio Freamfy®
            </h4>
        </div>
        <div class="flex flex-row gap-x-[30px] px-[20px] text-lg max-[768px]:hidden">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
        </div>
   </nav>



   <section class="w-full mb-[22px]">
    <h1 animatiomotion="headertitled" class="opacity-0 text-full px-[40px] whitespace-nowrap font-bold leading-none tracking-tight text-left text-9xl max-[514px]:px-[20px] max-[994px]:text-8xl max-[442px]:text-7xl max-[337px]:text-6xl">
        Freamfy®
      </h1>
   </section>
 


   <section class="mb-[80px] min-h-[40vh] px-[40px] max-[514px]:px-[20px]">
        <h3 animatiomotion="subtitles_06785" class="opacity-0 mb-[50px] text-3xl max-[622px]:text-2xl max-[514px]:text-lg max-[368px]:text-[15px]">
            A design studio crafting timeless <span class="italic font-mono font-semibold">Design</span>
        </h3>


        <div class="mb-[80px] flex flex-row gap-[20px] max-[469px]:gap-[10px]">
            <div class="overflow-hidden shadow-2xl flex-2 h-[370px] max-[691px]:h-[320px] max-[639px]:h-[285px] max-[469px]:h-[200px] max-[769px]:flex-1">
                <img animatiomotion="imagefron_fsefdsl" class="opacity-0 object-center max-[708px]:object-center object-cover h-full w-full" src="https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
            <div class="overflow-hidden shadow-2xl flex-1 h-[370px] max-[691px]:h-[320px] max-[639px]:h-[285px] max-[469px]:h-[200px] max-[769px]:flex-1">
                <img animatiomotion="imagefron_fsefdsr" class="opacity-0 object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
        </div>

        <article class="text-5xl max-[530px]:text-3xl max-[425px]:text-2xl">
            <p class="max-w-[500px] font-semibold font-sans italic indent-[20px] ml-[50px]  max-[530px]:ml-[10px]">
                Where brand stories meet sleek, timeless identity design.
            </p>
        </article>
   </section>


   <section animatiomotion="selectionshovers" class="mb-[130px] min-h-[40vh] p-[20px] flex flex-row your-section" min-scalesize="1176" max-scalesize="990">
        <div class="flex-[2]  relative">

            <div class="sticky w-[300px] h-[300px] overflow-hidden top-[5%] left-[3%] shadow max-[991px]:hidden">
                <img animatiomotion="hoverview"   class="opacity-0 object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>


            <aside animatiomotion="item1" class="triggerss opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="1" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="1" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item2" class=" opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="2" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="2" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside  animatiomotion="item3" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="3" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="3" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8438964/pexels-photo-8438964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item4" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="4" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="4" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8679914/pexels-photo-8679914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item5" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="5" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="5" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8265905/pexels-photo-8265905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item6" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="6" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="6" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/16453474/pexels-photo-16453474/free-photo-of-drone-and-controller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>
        </div>
        <div class="flex-[2.5] px-[20px] transition duration-1000 font-bold text-7xl space-y-6 max-[991px]:hidden">
            <h3 hover_view="1" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Brand strategy</h3>
            <h3 hover_view="2" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Motion graphic</h3>
            <h3 hover_view="3" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Video editing</h3>
            <h3 hover_view="4" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">3D Animation</h3>
            <h3 hover_view="5" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Advertising</h3>
            <h3 hover_view="6" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Web design</h3>
        </div>
   </section>

 

<article animatiomotion="futuresanims" class="opacity-0 text-5xl mb-[80px] max-[530px]:text-3xl max-[425px]:text-2xl">
    <p class="max-w-[500px] font-semibold font-sans italic indent-[20px] ml-[50px] text-6xl max-[530px]:ml-[10px]">
        Featured <br> Work©
    </p>
</article>

<div class="scroll-content  gap-[14px] mx-[10px]">

    <div class="min-w-[230px] p-5 h-[145px] "></div>

    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="w-[120px]"></div>

  </div>

   <section class="h-[200vh] border"></section>



</body>
</html>
 
  
` }
        ]
      }
    },
  ]


 const x_fu33fd_x  = (x) => {
    return __mfdhe3
 }