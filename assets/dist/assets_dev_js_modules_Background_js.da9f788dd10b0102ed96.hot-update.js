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
        _this.backgroundURL = _this.getBackgroundURL(_this.style.backgroundImage);
        console.log(_this.backgroundURL);
      });
    }
  }, {
    key: "image",
    value: function image() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuZGE5Zjc4OGRkMTBiMDEwMmVkOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxhQUFMLEdBQXFCLEtBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsS0FBSSxDQUFDRixLQUFMLENBQVdOLGVBQWpDLENBQXJCO0FBRUFTLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUksQ0FBQ0gsYUFBakI7QUFDQSxPQUxEO0FBTUE7OztXQUVELGlCQUFRLENBRVA7OztXQUVELDBCQUFpQkYsVUFBakIsRUFBNkI7QUFDNUIsYUFBT0EsVUFBVSxDQUFDTSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLENBQTlCLENBQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL21vZHVsZXMvQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzcyBBY2NvcmRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGRlc2MgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNb2RhbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYmFja2dyb3VuZCcpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEluaXQoKTtcblx0fVxuXG5cdGJhY2tncm91bmRJbml0KCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmZvckVhY2goKGJhY2tncm91bmQpID0+IHtcblx0XHRcdHRoaXMuc3R5bGUgPSBiYWNrZ3JvdW5kLnN0eWxlO1xuXHRcdFx0dGhpcy5iYWNrZ3JvdW5kVVJMID0gdGhpcy5nZXRCYWNrZ3JvdW5kVVJMKHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcblxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5iYWNrZ3JvdW5kVVJMKTtcblx0XHR9KVxuXHR9XG5cblx0aW1hZ2UoKSB7XG5cblx0fVxuXG5cdGdldEJhY2tncm91bmRVUkwoYmFja2dyb3VuZCkge1xuXHRcdHJldHVybiBiYWNrZ3JvdW5kLm1hdGNoKC9cIihbXlwiXSspXCIvKVsxXTtcblx0fVxuXG59XG4iXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJhY2tncm91bmRJbml0IiwiZm9yRWFjaCIsImJhY2tncm91bmQiLCJzdHlsZSIsImJhY2tncm91bmRVUkwiLCJnZXRCYWNrZ3JvdW5kVVJMIiwiY29uc29sZSIsImxvZyIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==