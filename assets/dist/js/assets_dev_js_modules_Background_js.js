"use strict";
(self["webpackChunkbfbh_theme"] = self["webpackChunkbfbh_theme"] || []).push([["assets_dev_js_modules_Background_js"],{

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

    this.backgroundImage = document.querySelectorAll('.js-background'); // this.backgroundInit();
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXNzZXRzX2Rldl9qc19tb2R1bGVzX0JhY2tncm91bmRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ3FCQTtBQUNwQjtBQUNEO0FBQ0E7QUFDQTtBQUNDLHdCQUFjO0FBQUE7O0FBQ2IsU0FBS0MsZUFBTCxHQUF1QkMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBdkIsQ0FEYSxDQUViO0FBQ0E7Ozs7V0FFRCwwQkFBaUI7QUFBQTs7QUFDaEIsV0FBS0YsZUFBTCxDQUFxQkcsT0FBckIsQ0FBNkIsVUFBQ0MsVUFBRCxFQUFnQjtBQUM1QyxhQUFJLENBQUNDLEtBQUwsR0FBYUQsVUFBVSxDQUFDQyxLQUF4QjtBQUNBLGFBQUksQ0FBQ0MsV0FBTCxHQUFtQixLQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFJLENBQUNGLEtBQUwsQ0FBV0wsZUFBdEIsQ0FBbkI7QUFDQVEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBSSxDQUFDSCxXQUFqQjtBQUVBRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWjtBQUVBQSxRQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUJLLE1BQWpCLGFBQTZCLEtBQUksQ0FBQ0osV0FBbEM7QUFFQSxPQVREO0FBVUE7OztXQUVELGVBQU1GLFVBQU4sRUFBa0I7QUFDakIsVUFBTU8sR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLEdBQUosR0FBVSxLQUFLQyxnQkFBTCxDQUFzQlYsVUFBdEIsQ0FBVjtBQUVBLGFBQU9PLEdBQUcsQ0FBQ0QsTUFBWCxDQUppQixDQU1qQjtBQUVBOzs7V0FFRCwwQkFBaUJOLFVBQWpCLEVBQTZCO0FBQzVCLGFBQU9BLFVBQVUsQ0FBQ1csS0FBWCxDQUFpQixXQUFqQixFQUE4QixDQUE5QixDQUFQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9tb2R1bGVzL0JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3MgQWNjb3JkaW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTW9kYWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJhY2tncm91bmQnKTtcblx0XHQvLyB0aGlzLmJhY2tncm91bmRJbml0KCk7XG5cdH1cblxuXHRiYWNrZ3JvdW5kSW5pdCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5mb3JFYWNoKChiYWNrZ3JvdW5kKSA9PiB7XG5cdFx0XHR0aGlzLnN0eWxlID0gYmFja2dyb3VuZC5zdHlsZTtcblx0XHRcdHRoaXMuaW1hZ2VIZWlnaHQgPSB0aGlzLmltYWdlKHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VIZWlnaHQpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhiYWNrZ3JvdW5kKVxuXG5cdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaW1hZ2VIZWlnaHR9cHhgO1xuXG5cdFx0fSlcblx0fVxuXG5cdGltYWdlKGJhY2tncm91bmQpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuc3JjID0gdGhpcy5nZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpO1xuXG5cdFx0cmV0dXJuIGltZy5oZWlnaHQ7XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuXG5cdH1cblxuXHRnZXRCYWNrZ3JvdW5kVVJMKGJhY2tncm91bmQpIHtcblx0XHRyZXR1cm4gYmFja2dyb3VuZC5tYXRjaCgvXCIoW15cIl0rKVwiLylbMV07XG5cdH1cblxufVxuIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYmFja2dyb3VuZCIsInN0eWxlIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJpbWciLCJJbWFnZSIsInNyYyIsImdldEJhY2tncm91bmRVUkwiLCJtYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=