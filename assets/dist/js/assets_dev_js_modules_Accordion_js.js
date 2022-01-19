"use strict";
(self["webpackChunkbfbh_theme"] = self["webpackChunkbfbh_theme"] || []).push([["assets_dev_js_modules_Accordion_js"],{

/***/ "./assets/dev/js/modules/Accordion.js":
/*!********************************************!*\
  !*** ./assets/dev/js/modules/Accordion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * @class Accordion
 */
var Accordion = /*#__PURE__*/function () {
  /**
   * @constructor
   * @desc creates an instance of Modal
   */
  function Accordion() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Accordion);

    this.accordions = document.querySelectorAll("[data-accordion]");
    this.accordionInit();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Accordion, [{
    key: "accordionInit",
    value: function accordionInit() {
      var _this = this;

      this.accordions.forEach(function (accordion) {
        _this.accordionItems = accordion.querySelectorAll(".js-accordion-item");

        _this.accordionItems.forEach(function (item) {
          item.addEventListener('click', function () {
            if (item.nextElementSibling.classList.contains('is-closed')) {
              _this.openCloseItems(item, 'is-closed', 'is-opened');
            } else {
              _this.openCloseItems(item, 'is-opened', 'is-closed');
            }
          });
        });

        _this.accordionBtns = accordion.querySelectorAll(".js-accordion-btn");

        _this.accordionBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            if (btn.matches('[data-accordion-status="is-closed"]')) {
              _this.openAllCloseAll(btn, 'is-opened', 'is-closed');

              btn.innerText = "Close all";
            } else {
              _this.openAllCloseAll(btn, 'is-closed', 'is-opened');

              btn.innerText = "Open all";
            }
          });
        });
      });
    }
  }, {
    key: "openCloseItems",
    value: function openCloseItems(item, str1, str2) {
      item.nextElementSibling.classList.remove(str1);
      item.nextElementSibling.classList.add(str2);
      item.querySelector('.icon-wrapper').classList.remove(str1);
      item.querySelector('.icon-wrapper').classList.add(str2);
    }
  }, {
    key: "openAllCloseAll",
    value: function openAllCloseAll(btn, str1, str2) {
      btn.setAttribute('data-accordion-status', str1);
      btn.closest('.accordion__list-item').querySelectorAll(".".concat(str2)).forEach(function (item) {
        item.classList.remove(str2);
        item.classList.add(str1);
      });
    }
  }]);

  return Accordion;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXNzZXRzX2Rldl9qc19tb2R1bGVzX0FjY29yZGlvbl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0FBQ3BCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0MsdUJBQWM7QUFBQTs7QUFDYixTQUFLQyxVQUFMLEdBQWtCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixDQUFsQjtBQUNBLFNBQUtDLGFBQUw7QUFDQTs7OztXQUVELHlCQUFnQjtBQUFBOztBQUNmLFdBQUtILFVBQUwsQ0FBZ0JJLE9BQWhCLENBQXdCLFVBQUNDLFNBQUQsRUFBZTtBQUV0QyxhQUFJLENBQUNDLGNBQUwsR0FBc0JELFNBQVMsQ0FBQ0gsZ0JBQVYsQ0FBMkIsb0JBQTNCLENBQXRCOztBQUNBLGFBQUksQ0FBQ0ksY0FBTCxDQUFvQkYsT0FBcEIsQ0FBNEIsVUFBQ0csSUFBRCxFQUFVO0FBQ3JDQSxVQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDcEMsZ0JBQUlELElBQUksQ0FBQ0Usa0JBQUwsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQyxXQUEzQyxDQUFKLEVBQTZEO0FBQzVELG1CQUFJLENBQUNDLGNBQUwsQ0FBb0JMLElBQXBCLEVBQTBCLFdBQTFCLEVBQXVDLFdBQXZDO0FBQ0EsYUFGRCxNQUVPO0FBQ04sbUJBQUksQ0FBQ0ssY0FBTCxDQUFvQkwsSUFBcEIsRUFBMEIsV0FBMUIsRUFBdUMsV0FBdkM7QUFDQTtBQUNELFdBTkQ7QUFPQSxTQVJEOztBQVVBLGFBQUksQ0FBQ00sYUFBTCxHQUFxQlIsU0FBUyxDQUFDSCxnQkFBVixDQUEyQixtQkFBM0IsQ0FBckI7O0FBQ0EsYUFBSSxDQUFDVyxhQUFMLENBQW1CVCxPQUFuQixDQUEyQixVQUFDVSxHQUFELEVBQVM7QUFDbkNBLFVBQUFBLEdBQUcsQ0FBQ04sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNuQyxnQkFBSU0sR0FBRyxDQUFDQyxPQUFKLENBQVkscUNBQVosQ0FBSixFQUF5RDtBQUN4RCxtQkFBSSxDQUFDQyxlQUFMLENBQXFCRixHQUFyQixFQUEwQixXQUExQixFQUF1QyxXQUF2Qzs7QUFDQUEsY0FBQUEsR0FBRyxDQUFDRyxTQUFKLEdBQWdCLFdBQWhCO0FBRUEsYUFKRCxNQUlPO0FBQ04sbUJBQUksQ0FBQ0QsZUFBTCxDQUFxQkYsR0FBckIsRUFBMEIsV0FBMUIsRUFBdUMsV0FBdkM7O0FBQ0FBLGNBQUFBLEdBQUcsQ0FBQ0csU0FBSixHQUFnQixVQUFoQjtBQUNBO0FBQ0QsV0FURDtBQVVBLFNBWEQ7QUFhQSxPQTNCRDtBQTRCQTs7O1dBQ0Qsd0JBQWVWLElBQWYsRUFBcUJXLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUNoQ1osTUFBQUEsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QkMsU0FBeEIsQ0FBa0NVLE1BQWxDLENBQXlDRixJQUF6QztBQUNBWCxNQUFBQSxJQUFJLENBQUNFLGtCQUFMLENBQXdCQyxTQUF4QixDQUFrQ1csR0FBbEMsQ0FBc0NGLElBQXRDO0FBRUFaLE1BQUFBLElBQUksQ0FBQ2UsYUFBTCxDQUFtQixlQUFuQixFQUFvQ1osU0FBcEMsQ0FBOENVLE1BQTlDLENBQXFERixJQUFyRDtBQUNBWCxNQUFBQSxJQUFJLENBQUNlLGFBQUwsQ0FBbUIsZUFBbkIsRUFBb0NaLFNBQXBDLENBQThDVyxHQUE5QyxDQUFrREYsSUFBbEQ7QUFDQTs7O1dBRUQseUJBQWdCTCxHQUFoQixFQUFxQkksSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQ2hDTCxNQUFBQSxHQUFHLENBQUNTLFlBQUosQ0FBaUIsdUJBQWpCLEVBQTBDTCxJQUExQztBQUNBSixNQUFBQSxHQUFHLENBQUNVLE9BQUosQ0FBWSx1QkFBWixFQUFxQ3RCLGdCQUFyQyxZQUEwRGlCLElBQTFELEdBQWtFZixPQUFsRSxDQUEwRSxVQUFDRyxJQUFELEVBQVU7QUFDbkZBLFFBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlVSxNQUFmLENBQXNCRCxJQUF0QjtBQUNBWixRQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZVcsR0FBZixDQUFtQkgsSUFBbkI7QUFDQSxPQUhEO0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9tb2R1bGVzL0FjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzcyBBY2NvcmRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uIHtcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAZGVzYyBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1vZGFsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWNjb3JkaW9uXVwiKTtcblx0XHR0aGlzLmFjY29yZGlvbkluaXQoKTtcblx0fVxuXG5cdGFjY29yZGlvbkluaXQoKSB7XG5cdFx0dGhpcy5hY2NvcmRpb25zLmZvckVhY2goKGFjY29yZGlvbikgPT4ge1xuXG5cdFx0XHR0aGlzLmFjY29yZGlvbkl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtYWNjb3JkaW9uLWl0ZW1cIik7XHRcdFx0XG5cdFx0XHR0aGlzLmFjY29yZGlvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1jbG9zZWQnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vcGVuQ2xvc2VJdGVtcyhpdGVtLCAnaXMtY2xvc2VkJywgJ2lzLW9wZW5lZCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9wZW5DbG9zZUl0ZW1zKGl0ZW0sICdpcy1vcGVuZWQnLCAnaXMtY2xvc2VkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcdFx0XHRcdFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuYWNjb3JkaW9uQnRucyA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWFjY29yZGlvbi1idG5cIik7XG5cdFx0XHR0aGlzLmFjY29yZGlvbkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoYnRuLm1hdGNoZXMoJ1tkYXRhLWFjY29yZGlvbi1zdGF0dXM9XCJpcy1jbG9zZWRcIl0nKSApIHtcblx0XHRcdFx0XHRcdHRoaXMub3BlbkFsbENsb3NlQWxsKGJ0biwgJ2lzLW9wZW5lZCcsICdpcy1jbG9zZWQnKTtcblx0XHRcdFx0XHRcdGJ0bi5pbm5lclRleHQgPSBcIkNsb3NlIGFsbFwiO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMub3BlbkFsbENsb3NlQWxsKGJ0biwgJ2lzLWNsb3NlZCcsICdpcy1vcGVuZWQnKTtcdFxuXHRcdFx0XHRcdFx0YnRuLmlubmVyVGV4dCA9IFwiT3BlbiBhbGxcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblx0fVxuXHRvcGVuQ2xvc2VJdGVtcyhpdGVtLCBzdHIxLCBzdHIyKSB7XG5cdFx0aXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShzdHIxKTtcdFxuXHRcdGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoc3RyMik7XG5cblx0XHRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pY29uLXdyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKHN0cjEpO1xuXHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignLmljb24td3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoc3RyMik7XG5cdH1cblxuXHRvcGVuQWxsQ2xvc2VBbGwoYnRuLCBzdHIxLCBzdHIyKSB7XG5cdFx0YnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1hY2NvcmRpb24tc3RhdHVzJywgc3RyMSk7XG5cdFx0YnRuLmNsb3Nlc3QoJy5hY2NvcmRpb25fX2xpc3QtaXRlbScpLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0cjJ9YCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKHN0cjIpO1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKHN0cjEpO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhY2NvcmRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9uSW5pdCIsImZvckVhY2giLCJhY2NvcmRpb24iLCJhY2NvcmRpb25JdGVtcyIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJvcGVuQ2xvc2VJdGVtcyIsImFjY29yZGlvbkJ0bnMiLCJidG4iLCJtYXRjaGVzIiwib3BlbkFsbENsb3NlQWxsIiwiaW5uZXJUZXh0Iiwic3RyMSIsInN0cjIiLCJyZW1vdmUiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY2xvc2VzdCJdLCJzb3VyY2VSb290IjoiIn0=