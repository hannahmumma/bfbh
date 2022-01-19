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
  splitWords.forEach(function (word, index) {
    if (word.length >= 5) {
      word = reverseString(word);
      splitWords.splice(index, 1, word);
    }
  });
  console.log(splitWords);
};

var backToString = function backToString(arr) {};

var reverseString = function reverseString(str) {
  return str.split('').reverse().join('');
};

spinWords('hello blah aku alistair');

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
      // 1642614806318
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e296ec8193ea59fcab5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTJmZjFhZDQ3NjhmZTdhMjRhNTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUM3QixNQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBbkI7QUFFQUQsRUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUVuQyxRQUFJRCxJQUFJLENBQUNFLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNyQkYsTUFBQUEsSUFBSSxHQUFHRyxhQUFhLENBQUNILElBQUQsQ0FBcEI7QUFDQUgsTUFBQUEsVUFBVSxDQUFDTyxNQUFYLENBQWtCSCxLQUFsQixFQUF5QixDQUF6QixFQUE0QkQsSUFBNUI7QUFDQTtBQUNELEdBTkQ7QUFTQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFVBQVo7QUFHQSxDQWZEOztBQWdCQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVMsQ0FFN0IsQ0FGRDs7QUFJQSxJQUFNTCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNNLEdBQUQsRUFBUztBQUM5QixTQUFPQSxHQUFHLENBQUNYLEtBQUosQ0FBVSxFQUFWLEVBQWNZLE9BQWQsR0FBd0JDLElBQXhCLENBQTZCLEVBQTdCLENBQVA7QUFDQSxDQUZEOztBQUlBaEIsU0FBUyxDQUFDLHlCQUFELENBQVQ7O0FBR0EsSUFBTWlCLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTSxDQUNyQixJQUFJdkIsK0RBQUosRUFEcUIsRUFFckIsSUFBSUMseURBQUosRUFGcUIsRUFHckIsSUFBSUMsc0RBQUosRUFIcUIsQ0FBTjtBQUFBLENBQWhCOztBQU1BLElBQU1zQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLE1BQU1DLE9BQU8sR0FBRztBQUNmQyxJQUFBQSxTQUFTLEVBQUUsa0JBREk7QUFFZkMsSUFBQUEsTUFBTSxFQUFFLGVBRk87QUFHZkMsSUFBQUEsWUFBWSxFQUFFO0FBSEMsR0FBaEI7QUFNQUMsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVMLE9BQWYsRUFBd0JmLE9BQXhCLENBQWdDLGdCQUFrQjtBQUFBO0FBQUEsUUFBaEJxQixHQUFnQjtBQUFBLFFBQVhDLEtBQVc7O0FBQ2pELFFBQUlDLFFBQVEsQ0FBQ0MsYUFBVCxXQUEwQkYsS0FBMUIsRUFBSixFQUF3QztBQUN2QywrRUFBTyxZQUFhRCxHQUFwQixHQUEyQkksSUFBM0IsQ0FBZ0MsVUFBQ2hDLE1BQUQsRUFBWTtBQUMzQyxZQUFNaUMsR0FBRyxHQUFHakMsTUFBTSxXQUFsQjtBQUNBLGVBQU8sSUFBSWlDLEdBQUosRUFBUDtBQUNBLE9BSEQ7QUFJQTtBQUNELEdBUEQ7QUFRQSxDQWZEOztBQWlCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2xCZCxFQUFBQSxPQUFPO0FBQ1BDLEVBQUFBLFVBQVU7QUFDVixDQUhEOztBQUtBYyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDRixJQUFoQzs7Ozs7Ozs7Ozs7QUN2RUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUEyRyxjQUFjLGVBQWU7QUFDdEssTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JmYmgtdGhlbWUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzXCI7XG5cbmltcG9ydCBCdWlsZFN2Z1Nwcml0ZSBmcm9tIFwiLi9tb2R1bGVzL0J1aWxkU3ZnU3ByaXRlXCI7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSBcIi4vbW9kdWxlcy9NYWluTWVudVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL21vZHVsZXMvTW9kYWxcIjtcblxuaWYgKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuLy8gRXhhbXBsZXM6IFxuLy8gc3BpbldvcmRzKCBcIkhleSBmZWxsb3cgd2FycmlvcnNcIiApID0+IHJldHVybnMgXCJIZXkgd29sbGVmIHNyb2lycmF3XCIgXG4vLyBzcGluV29yZHMoIFwiVGhpcyBpcyBhIHRlc3RcIikgPT4gcmV0dXJucyBcIlRoaXMgaXMgYSB0ZXN0XCIgXG4vLyBzcGluV29yZHMoIFwiVGhpcyBpcyBhbm90aGVyIHRlc3RcIiApPT4gcmV0dXJucyBcIlRoaXMgaXMgcmVodG9uYSB0ZXN0XCJcblxuY29uc3Qgc3BpbldvcmRzID0gKHBocmFzZSkgPT4ge1xuXHRjb25zdCBzcGxpdFdvcmRzID0gcGhyYXNlLnNwbGl0KCcgJyk7XG5cblx0c3BsaXRXb3Jkcy5mb3JFYWNoKCh3b3JkLCBpbmRleCkgPT4ge1xuXG5cdFx0aWYgKHdvcmQubGVuZ3RoID49IDUpIHtcblx0XHRcdHdvcmQgPSByZXZlcnNlU3RyaW5nKHdvcmQpO1xuXHRcdFx0c3BsaXRXb3Jkcy5zcGxpY2UoaW5kZXgsIDEsIHdvcmQpO1xuXHRcdH1cblx0fSlcblxuXG5cdGNvbnNvbGUubG9nKHNwbGl0V29yZHMpO1xuXG5cbn1cbmNvbnN0IGJhY2tUb1N0cmluZyA9IChhcnIpID0+IHtcblxufVxuXG5jb25zdCByZXZlcnNlU3RyaW5nID0gKHN0cikgPT4ge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59XG5cbnNwaW5Xb3JkcygnaGVsbG8gYmxhaCBha3UgYWxpc3RhaXInKTtcblxuXG5jb25zdCBnbG9iYWxzID0gKCkgPT4gW1xuXHRuZXcgQnVpbGRTdmdTcHJpdGUoKSwgXG5cdG5ldyBNYWluTWVudSgpLCBcblx0bmV3IE1vZGFsKClcbl07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSAoKSA9PiB7XG5cdGNvbnN0IHNjcmlwdHMgPSB7XG5cdFx0QWNjb3JkaW9uOiBcIltkYXRhLWFjY29yZGlvbl1cIixcblx0XHRTbGlkZXI6IFwiW2RhdGEtc2xpZGVyXVwiLFxuXHRcdFN0aWNreUhlYWRlcjogXCIuanMtaGVhZGVyXCIsXG5cdH07XG5cblx0T2JqZWN0LmVudHJpZXMoc2NyaXB0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dmFsdWV9YCkpIHtcblx0XHRcdGltcG9ydChgLi9tb2R1bGVzLyR7a2V5fWApLnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBLZXkgPSBtb2R1bGUuZGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIG5ldyBLZXkoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRnbG9iYWxzKCk7XG5cdGNvbXBvbmVudHMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDI2MTQ4MDYzMThcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2hhbm5haG11bW1hL1NpdGVzL2JmYmgtdGhlbWUvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTI5NmVjODE5M2VhNTlmY2FiNWVcIikiXSwibmFtZXMiOlsiQnVpbGRTdmdTcHJpdGUiLCJNYWluTWVudSIsIk1vZGFsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0Iiwic3BpbldvcmRzIiwicGhyYXNlIiwic3BsaXRXb3JkcyIsInNwbGl0IiwiZm9yRWFjaCIsIndvcmQiLCJpbmRleCIsImxlbmd0aCIsInJldmVyc2VTdHJpbmciLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwiYmFja1RvU3RyaW5nIiwiYXJyIiwic3RyIiwicmV2ZXJzZSIsImpvaW4iLCJnbG9iYWxzIiwiY29tcG9uZW50cyIsInNjcmlwdHMiLCJBY2NvcmRpb24iLCJTbGlkZXIiLCJTdGlja3lIZWFkZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiS2V5IiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9