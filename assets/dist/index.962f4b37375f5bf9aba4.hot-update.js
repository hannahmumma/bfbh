"use strict";
self["webpackHotUpdatebfbh_theme"]("index",{

/***/ "./assets/dev/js/index.js":
/*!********************************!*\
  !*** ./assets/dev/js/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./assets/dev/css/index.css");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./assets/dev/js/assets.js");
/* harmony import */ var _modules_BuildSvgSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/BuildSvgSprite */ "./assets/dev/js/modules/BuildSvgSprite.js");
/* harmony import */ var _modules_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MainMenu */ "./assets/dev/js/modules/MainMenu.js");
/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Modal */ "./assets/dev/js/modules/Modal.js");







if (true) {
  module.hot.accept();
} // Examples: 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


var spinWords = function spinWords(phrase) {
  var splitWords = phrase.split(' ');
  var words;
  console.log(splitWords);
  splitWords.forEach(function (word) {
    console.log(word);

    if (word.length >= 5) {
      word = reverseString(word);
    }
  });
};

var reverseString = function reverseString(str) {
  return str.split('').reverse().join('');
};

spinWords('hello blah');

var globals = function globals() {
  return [new _modules_BuildSvgSprite__WEBPACK_IMPORTED_MODULE_3__["default"](), new _modules_MainMenu__WEBPACK_IMPORTED_MODULE_4__["default"](), new _modules_Modal__WEBPACK_IMPORTED_MODULE_5__["default"]()];
};

var components = function components() {
  var scripts = {
    Accordion: "[data-accordion]",
    Slider: "[data-slider]",
    StickyHeader: ".js-header"
  };
  Object.entries(scripts).forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (document.querySelector("".concat(value))) {
      __webpack_require__("./assets/dev/js/modules lazy recursive ^\\.\\/.*$")("./".concat(key)).then(function (module) {
        var Key = module["default"];
        return new Key();
      });
    }
  });
};

var init = function init() {
  globals();
  components();
};

window.addEventListener("load", init);

/***/ }),

/***/ "./assets/dev/css/index.css":
/*!**********************************!*\
  !*** ./assets/dev/css/index.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1642614221200
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8acc26126e5a144bfe3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTYyZjRiMzczNzVmNWJmOWFiYTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUM3QixNQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxNQUFJQyxLQUFKO0FBRUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBRUFBLEVBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaOztBQUVBLFFBQUlBLElBQUksQ0FBQ0MsTUFBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ3BCRCxNQUFBQSxJQUFJLEdBQUdFLGFBQWEsQ0FBQ0YsSUFBRCxDQUFwQjtBQUNBO0FBQ0QsR0FORDtBQVFBLENBZEQ7O0FBZ0JBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQzlCLFNBQU9BLEdBQUcsQ0FBQ1IsS0FBSixDQUFVLEVBQVYsRUFBY1MsT0FBZCxHQUF3QkMsSUFBeEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNBLENBRkQ7O0FBSUFiLFNBQVMsQ0FBQyxZQUFELENBQVQ7O0FBR0EsSUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLENBQ3JCLElBQUlwQiwrREFBSixFQURxQixFQUVyQixJQUFJQyx5REFBSixFQUZxQixFQUdyQixJQUFJQyxzREFBSixFQUhxQixDQUFOO0FBQUEsQ0FBaEI7O0FBTUEsSUFBTW1CLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsTUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLElBQUFBLFNBQVMsRUFBRSxrQkFESTtBQUVmQyxJQUFBQSxNQUFNLEVBQUUsZUFGTztBQUdmQyxJQUFBQSxZQUFZLEVBQUU7QUFIQyxHQUFoQjtBQU1BQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsT0FBZixFQUF3QlQsT0FBeEIsQ0FBZ0MsZ0JBQWtCO0FBQUE7QUFBQSxRQUFoQmUsR0FBZ0I7QUFBQSxRQUFYQyxLQUFXOztBQUNqRCxRQUFJQyxRQUFRLENBQUNDLGFBQVQsV0FBMEJGLEtBQTFCLEVBQUosRUFBd0M7QUFDdkMsK0VBQU8sWUFBYUQsR0FBcEIsR0FBMkJJLElBQTNCLENBQWdDLFVBQUM3QixNQUFELEVBQVk7QUFDM0MsWUFBTThCLEdBQUcsR0FBRzlCLE1BQU0sV0FBbEI7QUFDQSxlQUFPLElBQUk4QixHQUFKLEVBQVA7QUFDQSxPQUhEO0FBSUE7QUFDRCxHQVBEO0FBUUEsQ0FmRDs7QUFpQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQmQsRUFBQUEsT0FBTztBQUNQQyxFQUFBQSxVQUFVO0FBQ1YsQ0FIRDs7QUFLQWMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ0YsSUFBaEM7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBMkcsY0FBYyxlQUFlO0FBQ3RLLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iZmJoLXRoZW1lL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0c1wiO1xuXG5pbXBvcnQgQnVpbGRTdmdTcHJpdGUgZnJvbSBcIi4vbW9kdWxlcy9CdWlsZFN2Z1Nwcml0ZVwiO1xuaW1wb3J0IE1haW5NZW51IGZyb20gXCIuL21vZHVsZXMvTWFpbk1lbnVcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL01vZGFsXCI7XG5cbmlmIChtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cbi8vIEV4YW1wbGVzOiBcbi8vIHNwaW5Xb3JkcyggXCJIZXkgZmVsbG93IHdhcnJpb3JzXCIgKSA9PiByZXR1cm5zIFwiSGV5IHdvbGxlZiBzcm9pcnJhd1wiIFxuLy8gc3BpbldvcmRzKCBcIlRoaXMgaXMgYSB0ZXN0XCIpID0+IHJldHVybnMgXCJUaGlzIGlzIGEgdGVzdFwiIFxuLy8gc3BpbldvcmRzKCBcIlRoaXMgaXMgYW5vdGhlciB0ZXN0XCIgKT0+IHJldHVybnMgXCJUaGlzIGlzIHJlaHRvbmEgdGVzdFwiXG5cbmNvbnN0IHNwaW5Xb3JkcyA9IChwaHJhc2UpID0+IHtcblx0Y29uc3Qgc3BsaXRXb3JkcyA9IHBocmFzZS5zcGxpdCgnICcpO1xuXHRsZXQgd29yZHMgXG5cblx0Y29uc29sZS5sb2coc3BsaXRXb3JkcylcblxuXHRzcGxpdFdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcblx0XHRjb25zb2xlLmxvZyh3b3JkKTtcblxuXHRcdGlmICh3b3JkLmxlbmd0aCA+PTUpIHtcblx0XHRcdHdvcmQgPSByZXZlcnNlU3RyaW5nKHdvcmQpO1xuXHRcdH1cblx0fSlcblxufVxuXG5jb25zdCByZXZlcnNlU3RyaW5nID0gKHN0cikgPT4ge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59XG5cbnNwaW5Xb3JkcygnaGVsbG8gYmxhaCcpO1xuXG5cbmNvbnN0IGdsb2JhbHMgPSAoKSA9PiBbXG5cdG5ldyBCdWlsZFN2Z1Nwcml0ZSgpLCBcblx0bmV3IE1haW5NZW51KCksIFxuXHRuZXcgTW9kYWwoKVxuXTtcblxuY29uc3QgY29tcG9uZW50cyA9ICgpID0+IHtcblx0Y29uc3Qgc2NyaXB0cyA9IHtcblx0XHRBY2NvcmRpb246IFwiW2RhdGEtYWNjb3JkaW9uXVwiLFxuXHRcdFNsaWRlcjogXCJbZGF0YS1zbGlkZXJdXCIsXG5cdFx0U3RpY2t5SGVhZGVyOiBcIi5qcy1oZWFkZXJcIixcblx0fTtcblxuXHRPYmplY3QuZW50cmllcyhzY3JpcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt2YWx1ZX1gKSkge1xuXHRcdFx0aW1wb3J0KGAuL21vZHVsZXMvJHtrZXl9YCkudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IEtleSA9IG1vZHVsZS5kZWZhdWx0O1xuXHRcdFx0XHRyZXR1cm4gbmV3IEtleSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdGdsb2JhbHMoKTtcblx0Y29tcG9uZW50cygpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY0MjYxNDIyMTIwMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvaGFubmFobXVtbWEvU2l0ZXMvYmZiaC10aGVtZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOGFjYzI2MTI2ZTVhMTQ0YmZlM1wiKSJdLCJuYW1lcyI6WyJCdWlsZFN2Z1Nwcml0ZSIsIk1haW5NZW51IiwiTW9kYWwiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJzcGluV29yZHMiLCJwaHJhc2UiLCJzcGxpdFdvcmRzIiwic3BsaXQiLCJ3b3JkcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwid29yZCIsImxlbmd0aCIsInJldmVyc2VTdHJpbmciLCJzdHIiLCJyZXZlcnNlIiwiam9pbiIsImdsb2JhbHMiLCJjb21wb25lbnRzIiwic2NyaXB0cyIsIkFjY29yZGlvbiIsIlNsaWRlciIsIlN0aWNreUhlYWRlciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJLZXkiLCJpbml0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=