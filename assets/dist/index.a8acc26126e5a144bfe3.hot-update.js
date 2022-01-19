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
      console.log(word);
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
      // 1642614226263
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e5162e59d0aabfceba0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYThhY2MyNjEyNmU1YTE0NGJmZTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUM3QixNQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxNQUFJQyxLQUFKO0FBRUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBRUFBLEVBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaOztBQUVBLFFBQUlBLElBQUksQ0FBQ0MsTUFBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ3BCRCxNQUFBQSxJQUFJLEdBQUdFLGFBQWEsQ0FBQ0YsSUFBRCxDQUFwQjtBQUVBSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWjtBQUNBO0FBQ0QsR0FSRDtBQVVBLENBaEJEOztBQWtCQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUM5QixTQUFPQSxHQUFHLENBQUNSLEtBQUosQ0FBVSxFQUFWLEVBQWNTLE9BQWQsR0FBd0JDLElBQXhCLENBQTZCLEVBQTdCLENBQVA7QUFDQSxDQUZEOztBQUlBYixTQUFTLENBQUMsWUFBRCxDQUFUOztBQUdBLElBQU1jLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTSxDQUNyQixJQUFJcEIsK0RBQUosRUFEcUIsRUFFckIsSUFBSUMseURBQUosRUFGcUIsRUFHckIsSUFBSUMsc0RBQUosRUFIcUIsQ0FBTjtBQUFBLENBQWhCOztBQU1BLElBQU1tQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLE1BQU1DLE9BQU8sR0FBRztBQUNmQyxJQUFBQSxTQUFTLEVBQUUsa0JBREk7QUFFZkMsSUFBQUEsTUFBTSxFQUFFLGVBRk87QUFHZkMsSUFBQUEsWUFBWSxFQUFFO0FBSEMsR0FBaEI7QUFNQUMsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVMLE9BQWYsRUFBd0JULE9BQXhCLENBQWdDLGdCQUFrQjtBQUFBO0FBQUEsUUFBaEJlLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDakQsUUFBSUMsUUFBUSxDQUFDQyxhQUFULFdBQTBCRixLQUExQixFQUFKLEVBQXdDO0FBQ3ZDLCtFQUFPLFlBQWFELEdBQXBCLEdBQTJCSSxJQUEzQixDQUFnQyxVQUFDN0IsTUFBRCxFQUFZO0FBQzNDLFlBQU04QixHQUFHLEdBQUc5QixNQUFNLFdBQWxCO0FBQ0EsZUFBTyxJQUFJOEIsR0FBSixFQUFQO0FBQ0EsT0FIRDtBQUlBO0FBQ0QsR0FQRDtBQVFBLENBZkQ7O0FBaUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEJkLEVBQUFBLE9BQU87QUFDUEMsRUFBQUEsVUFBVTtBQUNWLENBSEQ7O0FBS0FjLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NGLElBQWhDOzs7Ozs7Ozs7OztBQ3JFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQTJHLGNBQWMsZUFBZTtBQUN0SyxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL2luZGV4LmpzIiwid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHNcIjtcblxuaW1wb3J0IEJ1aWxkU3ZnU3ByaXRlIGZyb20gXCIuL21vZHVsZXMvQnVpbGRTdmdTcHJpdGVcIjtcbmltcG9ydCBNYWluTWVudSBmcm9tIFwiLi9tb2R1bGVzL01haW5NZW51XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9Nb2RhbFwiO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4vLyBFeGFtcGxlczogXG4vLyBzcGluV29yZHMoIFwiSGV5IGZlbGxvdyB3YXJyaW9yc1wiICkgPT4gcmV0dXJucyBcIkhleSB3b2xsZWYgc3JvaXJyYXdcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGEgdGVzdFwiKSA9PiByZXR1cm5zIFwiVGhpcyBpcyBhIHRlc3RcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGFub3RoZXIgdGVzdFwiICk9PiByZXR1cm5zIFwiVGhpcyBpcyByZWh0b25hIHRlc3RcIlxuXG5jb25zdCBzcGluV29yZHMgPSAocGhyYXNlKSA9PiB7XG5cdGNvbnN0IHNwbGl0V29yZHMgPSBwaHJhc2Uuc3BsaXQoJyAnKTtcblx0bGV0IHdvcmRzIFxuXG5cdGNvbnNvbGUubG9nKHNwbGl0V29yZHMpXG5cblx0c3BsaXRXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cod29yZCk7XG5cblx0XHRpZiAod29yZC5sZW5ndGggPj01KSB7XG5cdFx0XHR3b3JkID0gcmV2ZXJzZVN0cmluZyh3b3JkKTtcblxuXHRcdFx0Y29uc29sZS5sb2cod29yZClcblx0XHR9XG5cdH0pXG5cbn1cblxuY29uc3QgcmV2ZXJzZVN0cmluZyA9IChzdHIpID0+IHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG5zcGluV29yZHMoJ2hlbGxvIGJsYWgnKTtcblxuXG5jb25zdCBnbG9iYWxzID0gKCkgPT4gW1xuXHRuZXcgQnVpbGRTdmdTcHJpdGUoKSwgXG5cdG5ldyBNYWluTWVudSgpLCBcblx0bmV3IE1vZGFsKClcbl07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSAoKSA9PiB7XG5cdGNvbnN0IHNjcmlwdHMgPSB7XG5cdFx0QWNjb3JkaW9uOiBcIltkYXRhLWFjY29yZGlvbl1cIixcblx0XHRTbGlkZXI6IFwiW2RhdGEtc2xpZGVyXVwiLFxuXHRcdFN0aWNreUhlYWRlcjogXCIuanMtaGVhZGVyXCIsXG5cdH07XG5cblx0T2JqZWN0LmVudHJpZXMoc2NyaXB0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dmFsdWV9YCkpIHtcblx0XHRcdGltcG9ydChgLi9tb2R1bGVzLyR7a2V5fWApLnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBLZXkgPSBtb2R1bGUuZGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIG5ldyBLZXkoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRnbG9iYWxzKCk7XG5cdGNvbXBvbmVudHMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDI2MTQyMjYyNjNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2hhbm5haG11bW1hL1NpdGVzL2JmYmgtdGhlbWUvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGU1MTYyZTU5ZDBhYWJmY2ViYTBcIikiXSwibmFtZXMiOlsiQnVpbGRTdmdTcHJpdGUiLCJNYWluTWVudSIsIk1vZGFsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0Iiwic3BpbldvcmRzIiwicGhyYXNlIiwic3BsaXRXb3JkcyIsInNwbGl0Iiwid29yZHMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsIndvcmQiLCJsZW5ndGgiLCJyZXZlcnNlU3RyaW5nIiwic3RyIiwicmV2ZXJzZSIsImpvaW4iLCJnbG9iYWxzIiwiY29tcG9uZW50cyIsInNjcmlwdHMiLCJBY2NvcmRpb24iLCJTbGlkZXIiLCJTdGlja3lIZWFkZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiS2V5IiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9