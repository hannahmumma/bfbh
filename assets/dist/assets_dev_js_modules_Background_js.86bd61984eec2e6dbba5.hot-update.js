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
        _this.imageDimensions = _this.image(_this.style.backgroundImage);
        console.log(_this.background); // this.background.style.height = this.image[0];
      });
    }
  }, {
    key: "image",
    value: function image(background) {
      var img = new Image();
      img.src = this.getBackgroundURL(background);
      return [img.height, img.width]; // console.log(img.width, img.height);
    }
  }, {
    key: "getBackgroundURL",
    value: function getBackgroundURL(background) {
      return background.match(/"([^"]+)"/)[1];
    }
  }]);

  return Background;
}();



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuODZiZDYxOTg0ZWVjMmU2ZGJiYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxlQUFMLEdBQXVCLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0YsS0FBTCxDQUFXTixlQUF0QixDQUF2QjtBQUNBUyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNMLFVBQWpCLEVBSDRDLENBSTVDO0FBQ0EsT0FMRDtBQU1BOzs7V0FFRCxlQUFNQSxVQUFOLEVBQWtCO0FBQ2pCLFVBQU1NLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsS0FBS0MsZ0JBQUwsQ0FBc0JULFVBQXRCLENBQVY7QUFFQSxhQUFPLENBQUNNLEdBQUcsQ0FBQ0ksTUFBTCxFQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQVAsQ0FKaUIsQ0FNakI7QUFFQTs7O1dBRUQsMEJBQWlCWCxVQUFqQixFQUE2QjtBQUM1QixhQUFPQSxVQUFVLENBQUNZLEtBQVgsQ0FBaUIsV0FBakIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvbW9kdWxlcy9CYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIEFjY29yZGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzYyBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1vZGFsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1iYWNrZ3JvdW5kJyk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW5pdCgpO1xuXHR9XG5cblx0YmFja2dyb3VuZEluaXQoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaCgoYmFja2dyb3VuZCkgPT4ge1xuXHRcdFx0dGhpcy5zdHlsZSA9IGJhY2tncm91bmQuc3R5bGU7XG5cdFx0XHR0aGlzLmltYWdlRGltZW5zaW9ucyA9IHRoaXMuaW1hZ2UodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kKVxuXHRcdFx0Ly8gdGhpcy5iYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9IHRoaXMuaW1hZ2VbMF07XG5cdFx0fSlcblx0fVxuXG5cdGltYWdlKGJhY2tncm91bmQpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuc3JjID0gdGhpcy5nZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpO1xuXG5cdFx0cmV0dXJuIFtpbWcuaGVpZ2h0LCBpbWcud2lkdGhdO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcblxuXHR9XG5cblx0Z2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKSB7XG5cdFx0cmV0dXJuIGJhY2tncm91bmQubWF0Y2goL1wiKFteXCJdKylcIi8pWzFdO1xuXHR9XG5cbn1cbiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmFja2dyb3VuZEluaXQiLCJmb3JFYWNoIiwiYmFja2dyb3VuZCIsInN0eWxlIiwiaW1hZ2VEaW1lbnNpb25zIiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJnZXRCYWNrZ3JvdW5kVVJMIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=