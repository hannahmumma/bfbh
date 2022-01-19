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
      console.log(img.width);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuNWU5NDQ0ZDMyNzExOTY0Y2U3NWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCOztBQUNBLGFBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0QsS0FBTCxDQUFXTixlQUF0QjtBQUNBLE9BSEQ7QUFJQTs7O1dBRUQsZUFBTUssVUFBTixFQUFrQjtBQUNqQixVQUFNRyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsR0FBSixHQUFVLEtBQUtDLGdCQUFMLENBQXNCTixVQUF0QixDQUFWO0FBRUFPLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxHQUFHLENBQUNNLEtBQWhCO0FBRUE7OztXQUVELDBCQUFpQlQsVUFBakIsRUFBNkI7QUFDNUIsYUFBT0EsVUFBVSxDQUFDVSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLENBQTlCLENBQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL21vZHVsZXMvQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzcyBBY2NvcmRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGRlc2MgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNb2RhbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYmFja2dyb3VuZCcpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEluaXQoKTtcblx0fVxuXG5cdGJhY2tncm91bmRJbml0KCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmZvckVhY2goKGJhY2tncm91bmQpID0+IHtcblx0XHRcdHRoaXMuc3R5bGUgPSBiYWNrZ3JvdW5kLnN0eWxlO1xuXHRcdFx0dGhpcy5pbWFnZSh0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSk7XG5cdFx0fSlcblx0fVxuXG5cdGltYWdlKGJhY2tncm91bmQpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuc3JjID0gdGhpcy5nZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpO1xuXG5cdFx0Y29uc29sZS5sb2coaW1nLndpZHRoKTtcblxuXHR9XG5cblx0Z2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKSB7XG5cdFx0cmV0dXJuIGJhY2tncm91bmQubWF0Y2goL1wiKFteXCJdKylcIi8pWzFdO1xuXHR9XG5cbn1cbiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmFja2dyb3VuZEluaXQiLCJmb3JFYWNoIiwiYmFja2dyb3VuZCIsInN0eWxlIiwiaW1hZ2UiLCJpbWciLCJJbWFnZSIsInNyYyIsImdldEJhY2tncm91bmRVUkwiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=