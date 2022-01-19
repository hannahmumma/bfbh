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
        _this.imageHeight = _this.image(_this.style.backgroundImage);
        console.log(_this.imageHeight);
        console.log(background);
        background.style.height = "".concat(_this.imageHeight, "px");
      });
    }
  }, {
    key: "image",
    value: function image(background) {
      var img = new Image();
      img.src = this.getBackgroundURL(background);
      return img.height; // console.log(img.width, img.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuZGU2NDgzNTQ3ZGU3YThiZjViZTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxXQUFMLEdBQW1CLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0YsS0FBTCxDQUFXTixlQUF0QixDQUFuQjtBQUNBUyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILFdBQWpCO0FBRUFFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxVQUFaO0FBRUFBLFFBQUFBLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQkssTUFBakIsYUFBNkIsS0FBSSxDQUFDSixXQUFsQztBQUVBLE9BVEQ7QUFVQTs7O1dBRUQsZUFBTUYsVUFBTixFQUFrQjtBQUNqQixVQUFNTyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsR0FBSixHQUFVLEtBQUtDLGdCQUFMLENBQXNCVixVQUF0QixDQUFWO0FBRUEsYUFBT08sR0FBRyxDQUFDRCxNQUFYLENBSmlCLENBTWpCO0FBRUE7OztXQUVELDBCQUFpQk4sVUFBakIsRUFBNkI7QUFDNUIsYUFBT0EsVUFBVSxDQUFDVyxLQUFYLENBQWlCLFdBQWpCLEVBQThCLENBQTlCLENBQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL21vZHVsZXMvQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzcyBBY2NvcmRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGRlc2MgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNb2RhbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYmFja2dyb3VuZCcpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEluaXQoKTtcblx0fVxuXG5cdGJhY2tncm91bmRJbml0KCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmZvckVhY2goKGJhY2tncm91bmQpID0+IHtcblx0XHRcdHRoaXMuc3R5bGUgPSBiYWNrZ3JvdW5kLnN0eWxlO1xuXHRcdFx0dGhpcy5pbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2UodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5pbWFnZUhlaWdodCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKGJhY2tncm91bmQpXG5cblx0XHRcdGJhY2tncm91bmQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5pbWFnZUhlaWdodH1weGA7XG5cblx0XHR9KVxuXHR9XG5cblx0aW1hZ2UoYmFja2dyb3VuZCkge1xuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdGltZy5zcmMgPSB0aGlzLmdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCk7XG5cblx0XHRyZXR1cm4gaW1nLmhlaWdodDtcblxuXHRcdC8vIGNvbnNvbGUubG9nKGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG5cblx0fVxuXG5cdGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCkge1xuXHRcdHJldHVybiBiYWNrZ3JvdW5kLm1hdGNoKC9cIihbXlwiXSspXCIvKVsxXTtcblx0fVxuXG59XG4iXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRJbml0IiwiZm9yRWFjaCIsImJhY2tncm91bmQiLCJzdHlsZSIsImltYWdlSGVpZ2h0IiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJnZXRCYWNrZ3JvdW5kVVJMIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9