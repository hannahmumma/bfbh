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
      splitWords.splice(index, 1, word).join(' ');
    }
  });
  console.log(splitWords.join(' '));
};

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
      // 1642614900006
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c68667fd1479858cbf38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWVkMmFkZTcwY2VkNTkxZmY2N2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUM3QixNQUFNQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBbkI7QUFFQUQsRUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUVuQyxRQUFJRCxJQUFJLENBQUNFLE1BQUwsSUFBZSxDQUFuQixFQUFzQjtBQUNyQkYsTUFBQUEsSUFBSSxHQUFHRyxhQUFhLENBQUNILElBQUQsQ0FBcEI7QUFDQUgsTUFBQUEsVUFBVSxDQUFDTyxNQUFYLENBQWtCSCxLQUFsQixFQUF5QixDQUF6QixFQUE0QkQsSUFBNUIsRUFBa0NLLElBQWxDLENBQXVDLEdBQXZDO0FBQ0E7QUFDRCxHQU5EO0FBU0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFVLENBQUNRLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUVBLENBZEQ7O0FBZ0JBLElBQU1GLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0ssR0FBRCxFQUFTO0FBQzlCLFNBQU9BLEdBQUcsQ0FBQ1YsS0FBSixDQUFVLEVBQVYsRUFBY1csT0FBZCxHQUF3QkosSUFBeEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNBLENBRkQ7O0FBSUFWLFNBQVMsQ0FBQyx5QkFBRCxDQUFUOztBQUdBLElBQU1lLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTSxDQUNyQixJQUFJckIsK0RBQUosRUFEcUIsRUFFckIsSUFBSUMseURBQUosRUFGcUIsRUFHckIsSUFBSUMsc0RBQUosRUFIcUIsQ0FBTjtBQUFBLENBQWhCOztBQU1BLElBQU1vQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLE1BQU1DLE9BQU8sR0FBRztBQUNmQyxJQUFBQSxTQUFTLEVBQUUsa0JBREk7QUFFZkMsSUFBQUEsTUFBTSxFQUFFLGVBRk87QUFHZkMsSUFBQUEsWUFBWSxFQUFFO0FBSEMsR0FBaEI7QUFNQUMsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVMLE9BQWYsRUFBd0JiLE9BQXhCLENBQWdDLGdCQUFrQjtBQUFBO0FBQUEsUUFBaEJtQixHQUFnQjtBQUFBLFFBQVhDLEtBQVc7O0FBQ2pELFFBQUlDLFFBQVEsQ0FBQ0MsYUFBVCxXQUEwQkYsS0FBMUIsRUFBSixFQUF3QztBQUN2QywrRUFBTyxZQUFhRCxHQUFwQixHQUEyQkksSUFBM0IsQ0FBZ0MsVUFBQzlCLE1BQUQsRUFBWTtBQUMzQyxZQUFNK0IsR0FBRyxHQUFHL0IsTUFBTSxXQUFsQjtBQUNBLGVBQU8sSUFBSStCLEdBQUosRUFBUDtBQUNBLE9BSEQ7QUFJQTtBQUNELEdBUEQ7QUFRQSxDQWZEOztBQWlCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2xCZCxFQUFBQSxPQUFPO0FBQ1BDLEVBQUFBLFVBQVU7QUFDVixDQUhEOztBQUtBYyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDRixJQUFoQzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUEyRyxjQUFjLGVBQWU7QUFDdEssTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL2JmYmgtdGhlbWUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vYXNzZXRzXCI7XG5cbmltcG9ydCBCdWlsZFN2Z1Nwcml0ZSBmcm9tIFwiLi9tb2R1bGVzL0J1aWxkU3ZnU3ByaXRlXCI7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSBcIi4vbW9kdWxlcy9NYWluTWVudVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL21vZHVsZXMvTW9kYWxcIjtcblxuaWYgKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuLy8gRXhhbXBsZXM6IFxuLy8gc3BpbldvcmRzKCBcIkhleSBmZWxsb3cgd2FycmlvcnNcIiApID0+IHJldHVybnMgXCJIZXkgd29sbGVmIHNyb2lycmF3XCIgXG4vLyBzcGluV29yZHMoIFwiVGhpcyBpcyBhIHRlc3RcIikgPT4gcmV0dXJucyBcIlRoaXMgaXMgYSB0ZXN0XCIgXG4vLyBzcGluV29yZHMoIFwiVGhpcyBpcyBhbm90aGVyIHRlc3RcIiApPT4gcmV0dXJucyBcIlRoaXMgaXMgcmVodG9uYSB0ZXN0XCJcblxuY29uc3Qgc3BpbldvcmRzID0gKHBocmFzZSkgPT4ge1xuXHRjb25zdCBzcGxpdFdvcmRzID0gcGhyYXNlLnNwbGl0KCcgJyk7XG5cblx0c3BsaXRXb3Jkcy5mb3JFYWNoKCh3b3JkLCBpbmRleCkgPT4ge1xuXG5cdFx0aWYgKHdvcmQubGVuZ3RoID49IDUpIHtcblx0XHRcdHdvcmQgPSByZXZlcnNlU3RyaW5nKHdvcmQpO1xuXHRcdFx0c3BsaXRXb3Jkcy5zcGxpY2UoaW5kZXgsIDEsIHdvcmQpLmpvaW4oJyAnKTtcblx0XHR9XG5cdH0pXG5cblxuXHRjb25zb2xlLmxvZyhzcGxpdFdvcmRzLmpvaW4oJyAnKSk7XG5cbn1cblxuY29uc3QgcmV2ZXJzZVN0cmluZyA9IChzdHIpID0+IHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG5zcGluV29yZHMoJ2hlbGxvIGJsYWggYWt1IGFsaXN0YWlyJyk7XG5cblxuY29uc3QgZ2xvYmFscyA9ICgpID0+IFtcblx0bmV3IEJ1aWxkU3ZnU3ByaXRlKCksIFxuXHRuZXcgTWFpbk1lbnUoKSwgXG5cdG5ldyBNb2RhbCgpXG5dO1xuXG5jb25zdCBjb21wb25lbnRzID0gKCkgPT4ge1xuXHRjb25zdCBzY3JpcHRzID0ge1xuXHRcdEFjY29yZGlvbjogXCJbZGF0YS1hY2NvcmRpb25dXCIsXG5cdFx0U2xpZGVyOiBcIltkYXRhLXNsaWRlcl1cIixcblx0XHRTdGlja3lIZWFkZXI6IFwiLmpzLWhlYWRlclwiLFxuXHR9O1xuXG5cdE9iamVjdC5lbnRyaWVzKHNjcmlwdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3ZhbHVlfWApKSB7XG5cdFx0XHRpbXBvcnQoYC4vbW9kdWxlcy8ke2tleX1gKS50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdFx0Y29uc3QgS2V5ID0gbW9kdWxlLmRlZmF1bHQ7XG5cdFx0XHRcdHJldHVybiBuZXcgS2V5KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcblx0Z2xvYmFscygpO1xuXHRjb21wb25lbnRzKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQyNjE0OTAwMDA2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9oYW5uYWhtdW1tYS9TaXRlcy9iZmJoLXRoZW1lL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM2ODY2N2ZkMTQ3OTg1OGNiZjM4XCIpIl0sIm5hbWVzIjpbIkJ1aWxkU3ZnU3ByaXRlIiwiTWFpbk1lbnUiLCJNb2RhbCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsInNwaW5Xb3JkcyIsInBocmFzZSIsInNwbGl0V29yZHMiLCJzcGxpdCIsImZvckVhY2giLCJ3b3JkIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXZlcnNlU3RyaW5nIiwic3BsaWNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJzdHIiLCJyZXZlcnNlIiwiZ2xvYmFscyIsImNvbXBvbmVudHMiLCJzY3JpcHRzIiwiQWNjb3JkaW9uIiwiU2xpZGVyIiwiU3RpY2t5SGVhZGVyIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhlbiIsIktleSIsImluaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==