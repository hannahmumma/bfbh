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
        c;
        console.log(background);
        background.style.height = _this.imageDimensions[0];
      });
    }
  }, {
    key: "image",
    value: function image(background) {
      var img = new Image();
      img.src = this.getBackgroundURL(background);
      return [img.height]; // console.log(img.width, img.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuZTdkMWMyODk4ZTgwOTE2ZDI5OTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Msd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUF2QjtBQUNBLFNBQUtDLGNBQUw7QUFDQTs7OztXQUVELDBCQUFpQjtBQUFBOztBQUNoQixXQUFLSCxlQUFMLENBQXFCSSxPQUFyQixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGFBQUksQ0FBQ0MsS0FBTCxHQUFhRCxVQUFVLENBQUNDLEtBQXhCO0FBQ0EsYUFBSSxDQUFDQyxXQUFMLEdBQW1CLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUksQ0FBQ0YsS0FBTCxDQUFXTixlQUF0QixDQUFuQjtBQUNBUyxRQUFBQSxDQUFDO0FBQ0RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixVQUFaO0FBRUFBLFFBQUFBLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQk0sTUFBakIsR0FBMEIsS0FBSSxDQUFDQyxlQUFMLENBQXFCLENBQXJCLENBQTFCO0FBRUEsT0FSRDtBQVNBOzs7V0FFRCxlQUFNUixVQUFOLEVBQWtCO0FBQ2pCLFVBQU1TLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxHQUFKLEdBQVUsS0FBS0MsZ0JBQUwsQ0FBc0JaLFVBQXRCLENBQVY7QUFFQSxhQUFPLENBQUNTLEdBQUcsQ0FBQ0YsTUFBTCxDQUFQLENBSmlCLENBTWpCO0FBRUE7OztXQUVELDBCQUFpQlAsVUFBakIsRUFBNkI7QUFDNUIsYUFBT0EsVUFBVSxDQUFDYSxLQUFYLENBQWlCLFdBQWpCLEVBQThCLENBQTlCLENBQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL21vZHVsZXMvQmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzcyBBY2NvcmRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dyb3VuZCB7XG5cdC8qKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGRlc2MgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNb2RhbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYmFja2dyb3VuZCcpO1xuXHRcdHRoaXMuYmFja2dyb3VuZEluaXQoKTtcblx0fVxuXG5cdGJhY2tncm91bmRJbml0KCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlLmZvckVhY2goKGJhY2tncm91bmQpID0+IHtcblx0XHRcdHRoaXMuc3R5bGUgPSBiYWNrZ3JvdW5kLnN0eWxlO1xuXHRcdFx0dGhpcy5pbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2UodGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuXHRcdFx0Y1xuXHRcdFx0Y29uc29sZS5sb2coYmFja2dyb3VuZClcblxuXHRcdFx0YmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSB0aGlzLmltYWdlRGltZW5zaW9uc1swXTtcblxuXHRcdH0pXG5cdH1cblxuXHRpbWFnZShiYWNrZ3JvdW5kKSB7XG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0aW1nLnNyYyA9IHRoaXMuZ2V0QmFja2dyb3VuZFVSTChiYWNrZ3JvdW5kKTtcblxuXHRcdHJldHVybiBbaW1nLmhlaWdodF07XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuXG5cdH1cblxuXHRnZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpIHtcblx0XHRyZXR1cm4gYmFja2dyb3VuZC5tYXRjaCgvXCIoW15cIl0rKVwiLylbMV07XG5cdH1cblxufVxuIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiYWNrZ3JvdW5kSW5pdCIsImZvckVhY2giLCJiYWNrZ3JvdW5kIiwic3R5bGUiLCJpbWFnZUhlaWdodCIsImltYWdlIiwiYyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJpbWFnZURpbWVuc2lvbnMiLCJpbWciLCJJbWFnZSIsInNyYyIsImdldEJhY2tncm91bmRVUkwiLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=