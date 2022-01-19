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
  // console.log(reverseString(phrase));
  var splits = phrase.split(' ');
  splits.forEach(function (sp) {
    if (sp.length >= 5) {
      var reverse = reverseString(sp);
      console.log(reverse);
    }
  });
  console.log(splits); // console.log(splits.split(',').join(' '));
  // console.log(phrase.length)
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
      // 1642612538821
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32cdbf0e49e8d29e0767")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDc3ZTAyMWM1YmFmMGQxOWQ4ZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUU3QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUFmO0FBRUFELEVBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLFVBQUNDLEVBQUQsRUFBUTtBQUN0QixRQUFJQSxFQUFFLENBQUNDLE1BQUgsSUFBYSxDQUFqQixFQUFvQjtBQUNuQixVQUFNQyxPQUFPLEdBQUdDLGFBQWEsQ0FBQ0gsRUFBRCxDQUE3QjtBQUNBSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBO0FBQ0QsR0FMRDtBQU9BRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsTUFBWixFQWI2QixDQWU3QjtBQUVBO0FBQ0EsQ0FsQkQ7O0FBb0JBLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0csR0FBRCxFQUFTO0FBQzlCLFNBQU9BLEdBQUcsQ0FBQ1IsS0FBSixDQUFVLEVBQVYsRUFBY0ksT0FBZCxHQUF3QkssSUFBeEIsQ0FBNkIsRUFBN0IsQ0FBUDtBQUNBLENBRkQ7O0FBSUFaLFNBQVMsQ0FBQyxZQUFELENBQVQ7O0FBR0EsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFNLENBQ3JCLElBQUluQiwrREFBSixFQURxQixFQUVyQixJQUFJQyx5REFBSixFQUZxQixFQUdyQixJQUFJQyxzREFBSixFQUhxQixDQUFOO0FBQUEsQ0FBaEI7O0FBTUEsSUFBTWtCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEIsTUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLElBQUFBLFNBQVMsRUFBRSxrQkFESTtBQUVmQyxJQUFBQSxNQUFNLEVBQUUsZUFGTztBQUdmQyxJQUFBQSxZQUFZLEVBQUU7QUFIQyxHQUFoQjtBQU1BQyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsT0FBZixFQUF3QlgsT0FBeEIsQ0FBZ0MsZ0JBQWtCO0FBQUE7QUFBQSxRQUFoQmlCLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDakQsUUFBSUMsUUFBUSxDQUFDQyxhQUFULFdBQTBCRixLQUExQixFQUFKLEVBQXdDO0FBQ3ZDLCtFQUFPLFlBQWFELEdBQXBCLEdBQTJCSSxJQUEzQixDQUFnQyxVQUFDNUIsTUFBRCxFQUFZO0FBQzNDLFlBQU02QixHQUFHLEdBQUc3QixNQUFNLFdBQWxCO0FBQ0EsZUFBTyxJQUFJNkIsR0FBSixFQUFQO0FBQ0EsT0FIRDtBQUlBO0FBQ0QsR0FQRDtBQVFBLENBZkQ7O0FBaUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEJkLEVBQUFBLE9BQU87QUFDUEMsRUFBQUEsVUFBVTtBQUNWLENBSEQ7O0FBS0FjLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NGLElBQWhDOzs7Ozs7Ozs7OztBQ3ZFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQTJHLGNBQWMsZUFBZTtBQUN0SyxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL2luZGV4LmpzIiwid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vY3NzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9hc3NldHNcIjtcblxuaW1wb3J0IEJ1aWxkU3ZnU3ByaXRlIGZyb20gXCIuL21vZHVsZXMvQnVpbGRTdmdTcHJpdGVcIjtcbmltcG9ydCBNYWluTWVudSBmcm9tIFwiLi9tb2R1bGVzL01haW5NZW51XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9Nb2RhbFwiO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG4vLyBFeGFtcGxlczogXG4vLyBzcGluV29yZHMoIFwiSGV5IGZlbGxvdyB3YXJyaW9yc1wiICkgPT4gcmV0dXJucyBcIkhleSB3b2xsZWYgc3JvaXJyYXdcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGEgdGVzdFwiKSA9PiByZXR1cm5zIFwiVGhpcyBpcyBhIHRlc3RcIiBcbi8vIHNwaW5Xb3JkcyggXCJUaGlzIGlzIGFub3RoZXIgdGVzdFwiICk9PiByZXR1cm5zIFwiVGhpcyBpcyByZWh0b25hIHRlc3RcIlxuXG5jb25zdCBzcGluV29yZHMgPSAocGhyYXNlKSA9PiB7XG5cblx0Ly8gY29uc29sZS5sb2cocmV2ZXJzZVN0cmluZyhwaHJhc2UpKTtcblxuXHRjb25zdCBzcGxpdHMgPSBwaHJhc2Uuc3BsaXQoJyAnKTtcblxuXHRzcGxpdHMuZm9yRWFjaCgoc3ApID0+IHtcblx0XHRpZiAoc3AubGVuZ3RoID49IDUpIHtcblx0XHRcdGNvbnN0IHJldmVyc2UgPSByZXZlcnNlU3RyaW5nKHNwKTtcblx0XHRcdGNvbnNvbGUubG9nKHJldmVyc2UpXG5cdFx0fVxuXHR9KVxuXG5cdGNvbnNvbGUubG9nKHNwbGl0cylcblxuXHQvLyBjb25zb2xlLmxvZyhzcGxpdHMuc3BsaXQoJywnKS5qb2luKCcgJykpO1xuXG5cdC8vIGNvbnNvbGUubG9nKHBocmFzZS5sZW5ndGgpXG59XG5cbmNvbnN0IHJldmVyc2VTdHJpbmcgPSAoc3RyKSA9PiB7XG5cdHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cblxuc3BpbldvcmRzKCdoZWxsbyBibGFoJyk7XG5cblxuY29uc3QgZ2xvYmFscyA9ICgpID0+IFtcblx0bmV3IEJ1aWxkU3ZnU3ByaXRlKCksIFxuXHRuZXcgTWFpbk1lbnUoKSwgXG5cdG5ldyBNb2RhbCgpXG5dO1xuXG5jb25zdCBjb21wb25lbnRzID0gKCkgPT4ge1xuXHRjb25zdCBzY3JpcHRzID0ge1xuXHRcdEFjY29yZGlvbjogXCJbZGF0YS1hY2NvcmRpb25dXCIsXG5cdFx0U2xpZGVyOiBcIltkYXRhLXNsaWRlcl1cIixcblx0XHRTdGlja3lIZWFkZXI6IFwiLmpzLWhlYWRlclwiLFxuXHR9O1xuXG5cdE9iamVjdC5lbnRyaWVzKHNjcmlwdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3ZhbHVlfWApKSB7XG5cdFx0XHRpbXBvcnQoYC4vbW9kdWxlcy8ke2tleX1gKS50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdFx0Y29uc3QgS2V5ID0gbW9kdWxlLmRlZmF1bHQ7XG5cdFx0XHRcdHJldHVybiBuZXcgS2V5KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcblx0Z2xvYmFscygpO1xuXHRjb21wb25lbnRzKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjQyNjEyNTM4ODIxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9oYW5uYWhtdW1tYS9TaXRlcy9iZmJoLXRoZW1lL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMyY2RiZjBlNDllOGQyOWUwNzY3XCIpIl0sIm5hbWVzIjpbIkJ1aWxkU3ZnU3ByaXRlIiwiTWFpbk1lbnUiLCJNb2RhbCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsInNwaW5Xb3JkcyIsInBocmFzZSIsInNwbGl0cyIsInNwbGl0IiwiZm9yRWFjaCIsInNwIiwibGVuZ3RoIiwicmV2ZXJzZSIsInJldmVyc2VTdHJpbmciLCJjb25zb2xlIiwibG9nIiwic3RyIiwiam9pbiIsImdsb2JhbHMiLCJjb21wb25lbnRzIiwic2NyaXB0cyIsIkFjY29yZGlvbiIsIlNsaWRlciIsIlN0aWNreUhlYWRlciIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJLZXkiLCJpbml0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=