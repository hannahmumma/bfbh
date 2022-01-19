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
  var splitString = phrase.split(" ");
  splitString.forEach(function (str) {
    if (str.length >= 5) {
      var newStr = str.replace(str, reverseString(str));
      console.log(newStr);
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
      // 1642612937909
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("867e3286f027e448bc16")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWQzYTRiZjliNzUxZWMwMTJhMzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUU3QixNQUFNQyxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBcEI7QUFFQUQsRUFBQUEsV0FBVyxDQUFDRSxPQUFaLENBQW9CLFVBQUNDLEdBQUQsRUFBUztBQUM1QixRQUFJQSxHQUFHLENBQUNDLE1BQUosSUFBYyxDQUFsQixFQUFxQjtBQUVwQixVQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZSCxHQUFaLEVBQWlCSSxhQUFhLENBQUNKLEdBQUQsQ0FBOUIsQ0FBZjtBQUNBSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBO0FBRUQsR0FQRDtBQVdBLENBZkQ7O0FBaUJBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osR0FBRCxFQUFTO0FBQzlCLFNBQU9BLEdBQUcsQ0FBQ0YsS0FBSixDQUFVLEVBQVYsRUFBY1MsT0FBZCxHQUF3QkMsSUFBeEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNBLENBRkQ7O0FBSUFiLFNBQVMsQ0FBQyxZQUFELENBQVQ7O0FBR0EsSUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLENBQ3JCLElBQUlwQiwrREFBSixFQURxQixFQUVyQixJQUFJQyx5REFBSixFQUZxQixFQUdyQixJQUFJQyxzREFBSixFQUhxQixDQUFOO0FBQUEsQ0FBaEI7O0FBTUEsSUFBTW1CLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsTUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLElBQUFBLFNBQVMsRUFBRSxrQkFESTtBQUVmQyxJQUFBQSxNQUFNLEVBQUUsZUFGTztBQUdmQyxJQUFBQSxZQUFZLEVBQUU7QUFIQyxHQUFoQjtBQU1BQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsT0FBZixFQUF3QlosT0FBeEIsQ0FBZ0MsZ0JBQWtCO0FBQUE7QUFBQSxRQUFoQmtCLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDakQsUUFBSUMsUUFBUSxDQUFDQyxhQUFULFdBQTBCRixLQUExQixFQUFKLEVBQXdDO0FBQ3ZDLCtFQUFPLFlBQWFELEdBQXBCLEdBQTJCSSxJQUEzQixDQUFnQyxVQUFDN0IsTUFBRCxFQUFZO0FBQzNDLFlBQU04QixHQUFHLEdBQUc5QixNQUFNLFdBQWxCO0FBQ0EsZUFBTyxJQUFJOEIsR0FBSixFQUFQO0FBQ0EsT0FIRDtBQUlBO0FBQ0QsR0FQRDtBQVFBLENBZkQ7O0FBaUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEJkLEVBQUFBLE9BQU87QUFDUEMsRUFBQUEsVUFBVTtBQUNWLENBSEQ7O0FBS0FjLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NGLElBQWhDOzs7Ozs7Ozs7OztBQ3BFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQTJHLGNBQWMsZUFBZTtBQUN0SyxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL2luZGV4LmpzIiwid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHNcIjtcblxuaW1wb3J0IEJ1aWxkU3ZnU3ByaXRlIGZyb20gXCIuL21vZHVsZXMvQnVpbGRTdmdTcHJpdGVcIjtcbmltcG9ydCBNYWluTWVudSBmcm9tIFwiLi9tb2R1bGVzL01haW5NZW51XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9Nb2RhbFwiO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4vLyBFeGFtcGxlczogXG4vLyBzcGluV29yZHMoIFwiSGV5IGZlbGxvdyB3YXJyaW9yc1wiICkgPT4gcmV0dXJucyBcIkhleSB3b2xsZWYgc3JvaXJyYXdcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGEgdGVzdFwiKSA9PiByZXR1cm5zIFwiVGhpcyBpcyBhIHRlc3RcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGFub3RoZXIgdGVzdFwiICk9PiByZXR1cm5zIFwiVGhpcyBpcyByZWh0b25hIHRlc3RcIlxuXG5jb25zdCBzcGluV29yZHMgPSAocGhyYXNlKSA9PiB7XG5cblx0Y29uc3Qgc3BsaXRTdHJpbmcgPSBwaHJhc2Uuc3BsaXQoXCIgXCIpO1xuXG5cdHNwbGl0U3RyaW5nLmZvckVhY2goKHN0cikgPT4ge1xuXHRcdGlmIChzdHIubGVuZ3RoID49IDUpIHtcblx0XHRcblx0XHRcdGNvbnN0IG5ld1N0ciA9IHN0ci5yZXBsYWNlKHN0ciwgcmV2ZXJzZVN0cmluZyhzdHIpKTtcblx0XHRcdGNvbnNvbGUubG9nKG5ld1N0cilcblx0XHR9XG5cblx0fSlcblxuXG5cbn1cblxuY29uc3QgcmV2ZXJzZVN0cmluZyA9IChzdHIpID0+IHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG5zcGluV29yZHMoJ2hlbGxvIGJsYWgnKTtcblxuXG5jb25zdCBnbG9iYWxzID0gKCkgPT4gW1xuXHRuZXcgQnVpbGRTdmdTcHJpdGUoKSwgXG5cdG5ldyBNYWluTWVudSgpLCBcblx0bmV3IE1vZGFsKClcbl07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSAoKSA9PiB7XG5cdGNvbnN0IHNjcmlwdHMgPSB7XG5cdFx0QWNjb3JkaW9uOiBcIltkYXRhLWFjY29yZGlvbl1cIixcblx0XHRTbGlkZXI6IFwiW2RhdGEtc2xpZGVyXVwiLFxuXHRcdFN0aWNreUhlYWRlcjogXCIuanMtaGVhZGVyXCIsXG5cdH07XG5cblx0T2JqZWN0LmVudHJpZXMoc2NyaXB0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dmFsdWV9YCkpIHtcblx0XHRcdGltcG9ydChgLi9tb2R1bGVzLyR7a2V5fWApLnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBLZXkgPSBtb2R1bGUuZGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIG5ldyBLZXkoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRnbG9iYWxzKCk7XG5cdGNvbXBvbmVudHMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDI2MTI5Mzc5MDlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2hhbm5haG11bW1hL1NpdGVzL2JmYmgtdGhlbWUvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODY3ZTMyODZmMDI3ZTQ0OGJjMTZcIikiXSwibmFtZXMiOlsiQnVpbGRTdmdTcHJpdGUiLCJNYWluTWVudSIsIk1vZGFsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0Iiwic3BpbldvcmRzIiwicGhyYXNlIiwic3BsaXRTdHJpbmciLCJzcGxpdCIsImZvckVhY2giLCJzdHIiLCJsZW5ndGgiLCJuZXdTdHIiLCJyZXBsYWNlIiwicmV2ZXJzZVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJyZXZlcnNlIiwiam9pbiIsImdsb2JhbHMiLCJjb21wb25lbnRzIiwic2NyaXB0cyIsIkFjY29yZGlvbiIsIlNsaWRlciIsIlN0aWNreUhlYWRlciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJLZXkiLCJpbml0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=