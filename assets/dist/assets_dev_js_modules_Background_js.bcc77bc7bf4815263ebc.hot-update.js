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
        _this.background = _this.image(_this.style.backgroundImage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuYmNjNzdiYzdiZjQ4MTUyNjNlYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDRCxVQUFMLEdBQWtCLEtBQUksQ0FBQ0UsS0FBTCxDQUFXLEtBQUksQ0FBQ0QsS0FBTCxDQUFXTixlQUF0QixDQUFsQjtBQUNBUSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNKLFVBQWpCLEVBSDRDLENBSTVDO0FBQ0EsT0FMRDtBQU1BOzs7V0FFRCxlQUFNQSxVQUFOLEVBQWtCO0FBQ2pCLFVBQU1LLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsS0FBS0MsZ0JBQUwsQ0FBc0JSLFVBQXRCLENBQVY7QUFFQSxhQUFPLENBQUNLLEdBQUcsQ0FBQ0ksTUFBTCxFQUFhSixHQUFHLENBQUNLLEtBQWpCLENBQVAsQ0FKaUIsQ0FNakI7QUFFQTs7O1dBRUQsMEJBQWlCVixVQUFqQixFQUE2QjtBQUM1QixhQUFPQSxVQUFVLENBQUNXLEtBQVgsQ0FBaUIsV0FBakIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvbW9kdWxlcy9CYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIEFjY29yZGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzYyBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1vZGFsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1iYWNrZ3JvdW5kJyk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW5pdCgpO1xuXHR9XG5cblx0YmFja2dyb3VuZEluaXQoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaCgoYmFja2dyb3VuZCkgPT4ge1xuXHRcdFx0dGhpcy5zdHlsZSA9IGJhY2tncm91bmQuc3R5bGU7XG5cdFx0XHR0aGlzLmJhY2tncm91bmQgPSB0aGlzLmltYWdlKHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZClcblx0XHRcdC8vIHRoaXMuYmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSB0aGlzLmltYWdlWzBdO1xuXHRcdH0pXG5cdH1cblxuXHRpbWFnZShiYWNrZ3JvdW5kKSB7XG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0aW1nLnNyYyA9IHRoaXMuZ2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKTtcblxuXHRcdHJldHVybiBbaW1nLmhlaWdodCwgaW1nLndpZHRoXTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG5cblx0fVxuXG5cdGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCkge1xuXHRcdHJldHVybiBiYWNrZ3JvdW5kLm1hdGNoKC9cIihbXlwiXSspXCIvKVsxXTtcblx0fVxuXG59XG4iXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRJbml0IiwiZm9yRWFjaCIsImJhY2tncm91bmQiLCJzdHlsZSIsImltYWdlIiwiY29uc29sZSIsImxvZyIsImltZyIsIkltYWdlIiwic3JjIiwiZ2V0QmFja2dyb3VuZFVSTCIsImhlaWdodCIsIndpZHRoIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9