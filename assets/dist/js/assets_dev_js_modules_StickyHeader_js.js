"use strict";
(self["webpackChunkbfbh_theme"] = self["webpackChunkbfbh_theme"] || []).push([["assets_dev_js_modules_StickyHeader_js"],{

/***/ "./assets/dev/js/modules/StickyHeader.js":
/*!***********************************************!*\
  !*** ./assets/dev/js/modules/StickyHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StickyHeader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * @class StickyNav
 */
var StickyHeader = /*#__PURE__*/function () {
  /**
   * @constructor
   * @desc creates an instance of StickyNav
   */
  function StickyHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StickyHeader);

    this.content = document.getElementById("skip-to");
    this.init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StickyHeader, [{
    key: "init",
    value: function init() {
      this.options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      };
      this.observer = new IntersectionObserver(this.callback, this.options);
      this.observer.observe(this.content);
    }
  }, {
    key: "callback",
    value: function callback(entries) {
      entries.forEach(function (entry) {
        var header = entry.target.nextElementSibling;

        if (!entry.isIntersecting) {
          header.classList.add("is-sticky");
        } else {
          header.classList.remove("is-sticky");
        }
      });
    }
  }]);

  return StickyHeader;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXNzZXRzX2Rldl9qc19tb2R1bGVzX1N0aWNreUhlYWRlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0MsMEJBQWM7QUFBQTs7QUFDYixTQUFLQyxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFmO0FBQ0EsU0FBS0MsSUFBTDtBQUNBOzs7O1dBRUQsZ0JBQU87QUFDTixXQUFLQyxPQUFMLEdBQWU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFLElBRFE7QUFFZEMsUUFBQUEsVUFBVSxFQUFFLEtBRkU7QUFHZEMsUUFBQUEsU0FBUyxFQUFFO0FBSEcsT0FBZjtBQU1BLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBeUIsS0FBS0MsUUFBOUIsRUFBd0MsS0FBS04sT0FBN0MsQ0FBaEI7QUFDQSxXQUFLSSxRQUFMLENBQWNHLE9BQWQsQ0FBc0IsS0FBS1gsT0FBM0I7QUFDQTs7O1dBRUQsa0JBQVNZLE9BQVQsRUFBa0I7QUFDakJBLE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFDQyxLQUFELEVBQVc7QUFDMUIsWUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsa0JBQTVCOztBQUVBLFlBQUksQ0FBQ0gsS0FBSyxDQUFDSSxjQUFYLEVBQTJCO0FBQzFCSCxVQUFBQSxNQUFNLENBQUNJLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFdBQXJCO0FBQ0EsU0FGRCxNQUVPO0FBQ05MLFVBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsV0FBeEI7QUFDQTtBQUNELE9BUkQ7QUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL21vZHVsZXMvU3RpY2t5SGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIFN0aWNreU5hdlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3lIZWFkZXIge1xuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBkZXNjIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgU3RpY2t5TmF2XG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNraXAtdG9cIik7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdHJvb3Q6IG51bGwsXG5cdFx0XHRyb290TWFyZ2luOiBcIjBweFwiLFxuXHRcdFx0dGhyZXNob2xkOiAxLjAsXG5cdFx0fTtcblxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5jYWxsYmFjaywgdGhpcy5vcHRpb25zKTtcblx0XHR0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5jb250ZW50KTtcblx0fVxuXG5cdGNhbGxiYWNrKGVudHJpZXMpIHtcblx0XHRlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG5cdFx0XHRjb25zdCBoZWFkZXIgPSBlbnRyeS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG5cdFx0XHRpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJTdGlja3lIZWFkZXIiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXQiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiY2FsbGJhY2siLCJvYnNlcnZlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhlYWRlciIsInRhcmdldCIsIm5leHRFbGVtZW50U2libGluZyIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==