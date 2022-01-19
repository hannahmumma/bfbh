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
      img.src = getBackgroundURL(background);
      console.log(img);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuMTYzOTQ1MGNmODFlNWQ2NTdmNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCOztBQUNBLGFBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0QsS0FBTCxDQUFXTixlQUF0QjtBQUNBLE9BSEQ7QUFJQTs7O1dBRUQsZUFBTUssVUFBTixFQUFrQjtBQUNqQixVQUFNRyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsR0FBSixHQUFVQyxnQkFBZ0IsQ0FBQ04sVUFBRCxDQUExQjtBQUVBTyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUVBOzs7V0FFRCwwQkFBaUJILFVBQWpCLEVBQTZCO0FBQzVCLGFBQU9BLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQixXQUFqQixFQUE4QixDQUE5QixDQUFQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9tb2R1bGVzL0JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3MgQWNjb3JkaW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTW9kYWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJhY2tncm91bmQnKTtcblx0XHR0aGlzLmJhY2tncm91bmRJbml0KCk7XG5cdH1cblxuXHRiYWNrZ3JvdW5kSW5pdCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5mb3JFYWNoKChiYWNrZ3JvdW5kKSA9PiB7XG5cdFx0XHR0aGlzLnN0eWxlID0gYmFja2dyb3VuZC5zdHlsZTtcblx0XHRcdHRoaXMuaW1hZ2UodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdH0pXG5cdH1cblxuXHRpbWFnZShiYWNrZ3JvdW5kKSB7XG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0aW1nLnNyYyA9IGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCk7XG5cblx0XHRjb25zb2xlLmxvZyhpbWcpO1xuXG5cdH1cblxuXHRnZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpIHtcblx0XHRyZXR1cm4gYmFja2dyb3VuZC5tYXRjaCgvXCIoW15cIl0rKVwiLylbMV07XG5cdH1cblxufVxuIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYWNrZ3JvdW5kSW5pdCIsImZvckVhY2giLCJiYWNrZ3JvdW5kIiwic3R5bGUiLCJpbWFnZSIsImltZyIsIkltYWdlIiwic3JjIiwiZ2V0QmFja2dyb3VuZFVSTCIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=