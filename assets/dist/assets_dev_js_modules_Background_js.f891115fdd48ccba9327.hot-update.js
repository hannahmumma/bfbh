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

        _this.image(_this.style.backgroundImage);
      });
    }
  }, {
    key: "image",
    value: function image(background) {
      var img = new Image();
      img.src = this.getBackgroundURL(background);
      return img.height && img.width; // console.log(img.width, img.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuZjg5MTExNWZkZDQ4Y2NiYTkzMjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCOztBQUNBLGFBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0QsS0FBTCxDQUFXTixlQUF0QjtBQUNBLE9BSEQ7QUFJQTs7O1dBRUQsZUFBTUssVUFBTixFQUFrQjtBQUNqQixVQUFNRyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsR0FBSixHQUFVLEtBQUtDLGdCQUFMLENBQXNCTixVQUF0QixDQUFWO0FBRUEsYUFBT0csR0FBRyxDQUFDSSxNQUFKLElBQWNKLEdBQUcsQ0FBQ0ssS0FBekIsQ0FKaUIsQ0FNakI7QUFFQTs7O1dBRUQsMEJBQWlCUixVQUFqQixFQUE2QjtBQUM1QixhQUFPQSxVQUFVLENBQUNTLEtBQVgsQ0FBaUIsV0FBakIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvbW9kdWxlcy9CYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIEFjY29yZGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzYyBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1vZGFsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1iYWNrZ3JvdW5kJyk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW5pdCgpO1xuXHR9XG5cblx0YmFja2dyb3VuZEluaXQoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UuZm9yRWFjaCgoYmFja2dyb3VuZCkgPT4ge1xuXHRcdFx0dGhpcy5zdHlsZSA9IGJhY2tncm91bmQuc3R5bGU7XG5cdFx0XHR0aGlzLmltYWdlKHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcblx0XHR9KVxuXHR9XG5cblx0aW1hZ2UoYmFja2dyb3VuZCkge1xuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdGltZy5zcmMgPSB0aGlzLmdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCk7XG5cblx0XHRyZXR1cm4gaW1nLmhlaWdodCAmJiBpbWcud2lkdGg7XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuXG5cdH1cblxuXHRnZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpIHtcblx0XHRyZXR1cm4gYmFja2dyb3VuZC5tYXRjaCgvXCIoW15cIl0rKVwiLylbMV07XG5cdH1cblxufVxuIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYWNrZ3JvdW5kSW5pdCIsImZvckVhY2giLCJiYWNrZ3JvdW5kIiwic3R5bGUiLCJpbWFnZSIsImltZyIsIkltYWdlIiwic3JjIiwiZ2V0QmFja2dyb3VuZFVSTCIsImhlaWdodCIsIndpZHRoIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9