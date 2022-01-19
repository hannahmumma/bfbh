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
        console.log(background);
        background.style.height = _this.image[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuNGU0ZGNhZWNlM2VkNGNmMmM5Y2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxlQUFMLEdBQXVCLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0YsS0FBTCxDQUFXTixlQUF0QixDQUF2QjtBQUNBUyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWjtBQUNBQSxRQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUJLLE1BQWpCLEdBQTBCLEtBQUksQ0FBQ0gsS0FBTCxDQUFXLENBQVgsQ0FBMUI7QUFDQSxPQUxEO0FBTUE7OztXQUVELGVBQU1ILFVBQU4sRUFBa0I7QUFDakIsVUFBTU8sR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLEdBQUosR0FBVSxLQUFLQyxnQkFBTCxDQUFzQlYsVUFBdEIsQ0FBVjtBQUVBLGFBQU8sQ0FBQ08sR0FBRyxDQUFDRCxNQUFMLEVBQWFDLEdBQUcsQ0FBQ0ksS0FBakIsQ0FBUCxDQUppQixDQU1qQjtBQUVBOzs7V0FFRCwwQkFBaUJYLFVBQWpCLEVBQTZCO0FBQzVCLGFBQU9BLFVBQVUsQ0FBQ1ksS0FBWCxDQUFpQixXQUFqQixFQUE4QixDQUE5QixDQUFQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9tb2R1bGVzL0JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3MgQWNjb3JkaW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTW9kYWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJhY2tncm91bmQnKTtcblx0XHR0aGlzLmJhY2tncm91bmRJbml0KCk7XG5cdH1cblxuXHRiYWNrZ3JvdW5kSW5pdCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5mb3JFYWNoKChiYWNrZ3JvdW5kKSA9PiB7XG5cdFx0XHR0aGlzLnN0eWxlID0gYmFja2dyb3VuZC5zdHlsZTtcblx0XHRcdHRoaXMuaW1hZ2VEaW1lbnNpb25zID0gdGhpcy5pbWFnZSh0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhiYWNrZ3JvdW5kKVxuXHRcdFx0YmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSB0aGlzLmltYWdlWzBdO1xuXHRcdH0pXG5cdH1cblxuXHRpbWFnZShiYWNrZ3JvdW5kKSB7XG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0aW1nLnNyYyA9IHRoaXMuZ2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKTtcblxuXHRcdHJldHVybiBbaW1nLmhlaWdodCwgaW1nLndpZHRoXTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG5cblx0fVxuXG5cdGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCkge1xuXHRcdHJldHVybiBiYWNrZ3JvdW5kLm1hdGNoKC9cIihbXlwiXSspXCIvKVsxXTtcblx0fVxuXG59XG4iXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRJbml0IiwiZm9yRWFjaCIsImJhY2tncm91bmQiLCJzdHlsZSIsImltYWdlRGltZW5zaW9ucyIsImltYWdlIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImltZyIsIkltYWdlIiwic3JjIiwiZ2V0QmFja2dyb3VuZFVSTCIsIndpZHRoIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9