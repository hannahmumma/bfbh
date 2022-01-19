"use strict";
self["webpackHotUpdatebfbh_theme"]("assets_dev_js_modules_Background_js",{

/***/ "./assets/dev/js/modules/Background.js":
/*!*********************************************!*\
  !*** ./assets/dev/js/modules/Background.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * @class Accordion
 */
var Background = /*#__PURE__*/function () {
  /**
   * @constructor
   * @desc creates an instance of Modal
   */
  function Background() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Background);

    this.backgroundImage = document.querySelectorAll('.js-background');
    this.backgroundInit();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Background, [{
    key: "backgroundInit",
    value: function backgroundInit() {
      var _this = this;

      this.backgroundImage.forEach(function (background) {
        _this.style = background.style;
        _this.backgroundURL = _this.getBackgroundURL(_this.style);
        console.log(_this.backgroundURL);
      });
    }
  }, {
    key: "getBackgroundURL",
    value: function getBackgroundURL(backgroundStyle) {
      return backgroundStyle.match(/"([^"]+)"/)[1];
    }
  }]);

  return Background;
}();



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuNDU1ZWRhOTIyZmI1ZDBkYzMxOTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxhQUFMLEdBQXFCLEtBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsS0FBSSxDQUFDRixLQUEzQixDQUFyQjtBQUVBRyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILGFBQWpCO0FBQ0EsT0FMRDtBQU1BOzs7V0FFRCwwQkFBaUJJLGVBQWpCLEVBQWtDO0FBQ2pDLGFBQU9BLGVBQWUsQ0FBQ0MsS0FBaEIsQ0FBc0IsV0FBdEIsRUFBbUMsQ0FBbkMsQ0FBUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvbW9kdWxlcy9CYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIEFjY29yZGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzYyBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1vZGFsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1iYWNrZ3JvdW5kJyk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW5pdCgpO1xuXHR9XG5cblx0YmFja2dyb3VuZEluaXQoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaCgoYmFja2dyb3VuZCkgPT4ge1xuXHRcdFx0dGhpcy5zdHlsZSA9IGJhY2tncm91bmQuc3R5bGU7XG5cdFx0XHR0aGlzLmJhY2tncm91bmRVUkwgPSB0aGlzLmdldEJhY2tncm91bmRVUkwodGhpcy5zdHlsZSk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZFVSTCk7XG5cdFx0fSlcblx0fVxuXG5cdGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZFN0eWxlKSB7XG5cdFx0cmV0dXJuIGJhY2tncm91bmRTdHlsZS5tYXRjaCgvXCIoW15cIl0rKVwiLylbMV07XG5cdH1cblxufVxuIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYWNrZ3JvdW5kSW5pdCIsImZvckVhY2giLCJiYWNrZ3JvdW5kIiwic3R5bGUiLCJiYWNrZ3JvdW5kVVJMIiwiZ2V0QmFja2dyb3VuZFVSTCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kU3R5bGUiLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=