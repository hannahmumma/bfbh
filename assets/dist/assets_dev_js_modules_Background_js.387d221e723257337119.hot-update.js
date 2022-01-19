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
        _this.background.style.height = _this.image[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuMzg3ZDIyMWU3MjMyNTczMzcxMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDRCxVQUFMLEdBQWtCLEtBQUksQ0FBQ0UsS0FBTCxDQUFXLEtBQUksQ0FBQ0QsS0FBTCxDQUFXTixlQUF0QixDQUFsQjtBQUNBLGFBQUksQ0FBQ0ssVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JFLE1BQXRCLEdBQStCLEtBQUksQ0FBQ0QsS0FBTCxDQUFXLENBQVgsQ0FBL0I7QUFDQSxPQUpEO0FBS0E7OztXQUVELGVBQU1GLFVBQU4sRUFBa0I7QUFDakIsVUFBTUksR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLEdBQUosR0FBVSxLQUFLQyxnQkFBTCxDQUFzQlAsVUFBdEIsQ0FBVjtBQUVBLGFBQU8sQ0FBQ0ksR0FBRyxDQUFDRCxNQUFMLEVBQWFDLEdBQUcsQ0FBQ0ksS0FBakIsQ0FBUCxDQUppQixDQU1qQjtBQUVBOzs7V0FFRCwwQkFBaUJSLFVBQWpCLEVBQTZCO0FBQzVCLGFBQU9BLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQixXQUFqQixFQUE4QixDQUE5QixDQUFQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9tb2R1bGVzL0JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3MgQWNjb3JkaW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTW9kYWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJhY2tncm91bmQnKTtcblx0XHR0aGlzLmJhY2tncm91bmRJbml0KCk7XG5cdH1cblxuXHRiYWNrZ3JvdW5kSW5pdCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5mb3JFYWNoKChiYWNrZ3JvdW5kKSA9PiB7XG5cdFx0XHR0aGlzLnN0eWxlID0gYmFja2dyb3VuZC5zdHlsZTtcblx0XHRcdHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuaW1hZ2UodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9IHRoaXMuaW1hZ2VbMF07XG5cdFx0fSlcblx0fVxuXG5cdGltYWdlKGJhY2tncm91bmQpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuc3JjID0gdGhpcy5nZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpO1xuXG5cdFx0cmV0dXJuIFtpbWcuaGVpZ2h0LCBpbWcud2lkdGhdO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcblxuXHR9XG5cblx0Z2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKSB7XG5cdFx0cmV0dXJuIGJhY2tncm91bmQubWF0Y2goL1wiKFteXCJdKylcIi8pWzFdO1xuXHR9XG5cbn1cbiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmFja2dyb3VuZEluaXQiLCJmb3JFYWNoIiwiYmFja2dyb3VuZCIsInN0eWxlIiwiaW1hZ2UiLCJoZWlnaHQiLCJpbWciLCJJbWFnZSIsInNyYyIsImdldEJhY2tncm91bmRVUkwiLCJ3aWR0aCIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==