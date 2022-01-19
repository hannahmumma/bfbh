self["webpackHotUpdatebfbh_theme"]("blocks",{

/***/ "./assets/dev/js/blocks.js":
/*!*********************************!*\
  !*** ./assets/dev/js/blocks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../css/blocks.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _blocks_heroBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/heroBlock */ "./assets/dev/js/blocks/heroBlock.js");
/* harmony import */ var _blocks_wpImageBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/wpImageBlock */ "./assets/dev/js/blocks/wpImageBlock.js");




/***/ }),

/***/ "./assets/dev/js/blocks/heroBlock.js":
/*!*******************************************!*\
  !*** ./assets/dev/js/blocks/heroBlock.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl; // namespace/block-slug

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerBlockType("bfbh/hero-block", {
  title: "Hero",
  icon: "smiley",
  category: "bfbh-blocks",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2"
    },
    titleColor: {
      type: "string",
      "default": "black"
    },
    body: {
      type: "string",
      source: "html",
      selector: "p"
    },
    bodyColor: {
      type: "string",
      "default": "black"
    },
    backgroundImage: {
      type: "string",
      "default": null
    },
    overlayColor: {
      type: "string",
      "default": "black"
    },
    overlayOpacity: {
      type: "number",
      "default": 0.3
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body,
        bodyColor = attributes.bodyColor,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity;

    var onChangeTitle = function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    };

    var onChangeTitleColor = function onChangeTitleColor(newTitleColor) {
      setAttributes({
        titleColor: newTitleColor
      });
    };

    var onChangeBody = function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    };

    var onChangeBodyColor = function onChangeBodyColor(newBodyColor) {
      setAttributes({
        bodyColor: newBodyColor
      });
    };

    var onSelectImage = function onSelectImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    };

    var onOverlayColorChange = function onOverlayColorChange(newColor) {
      setAttributes({
        overlayColor: newColor
      });
    };

    var onOverlayOpacityChange = function onOverlayOpacityChange(newOpacity) {
      setAttributes({
        overlayOpacity: newOpacity
      });
    };

    return [/*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: "40px"
      }
    }, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Font Color Settings"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Select a title color:")), /*#__PURE__*/React.createElement(ColorPalette, {
      value: titleColor,
      onChange: onChangeTitleColor
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Font Color Settings"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Select a body color:")), /*#__PURE__*/React.createElement(ColorPalette, {
      value: bodyColor,
      onChange: onChangeBodyColor
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Background Image Settings"
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Select a background image:")), /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(Button, {
          onClick: open,
          icon: "upload",
          className: "editor-media-placeholder__button is-button is-default is-large"
        }, "Background Image");
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "20px",
        marginBottom: "40px"
      }
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Overlay color:")), /*#__PURE__*/React.createElement(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    })), /*#__PURE__*/React.createElement(RangeControl, {
      label: "Overlay opacity",
      value: overlayOpacity,
      onChange: onOverlayOpacityChange,
      min: 0,
      max: 1,
      step: 0.01
    }))), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: "cover",
        bakckgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "description",
      value: body,
      onChange: onChangeBody,
      style: {
        color: bodyColor
      }
    }))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body,
        bodyColor = attributes.bodyColor,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity;
    return /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: "cover",
        bakckgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        color: titleColor
      }
    }, title), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "p",
      value: body,
      style: {
        color: bodyColor
      }
    }));
  }
}));

/***/ }),

/***/ "./assets/dev/js/blocks/wpImageBlock.js":
/*!**********************************************!*\
  !*** ./assets/dev/js/blocks/wpImageBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var ToggleControl = wp.components.ToggleControl;
var allowedBlocks = ["core/image"];

var addAttributes = function addAttributes(settings) {
  if (typeof settings.attributes !== "undefined" && allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      fullWidthImage: {
        type: "boolean",
        "default": false
      }
    });
  }

  return settings;
};

addFilter("blocks.registerBlockType", "bfbh/add-attributes", addAttributes);
var addToAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var attributes = props.attributes,
        isSelected = props.isSelected,
        name = props.name,
        setAttributes = props.setAttributes;
    var fullWidthImage = attributes.fullWidthImage;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), isSelected && allowedBlocks.includes(name) && /*#__PURE__*/React.createElement(InspectorAdvancedControls, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: __("Full Width Image"),
      checked: fullWidthImage,
      onChange: function onChange() {
        return setAttributes({
          fullWidthImage: !fullWidthImage
        });
      },
      help: fullWidthImage ? __("Image expands to width of screen") : __("Image is contained")
    })));
  };
}, "addToAdvancedControls");
addFilter("editor.BlockEdit", "bfbh/advanced-controls", addToAdvancedControls);

var addExtraClass = function addExtraClass(extraProps, blockType, attributes) {
  var fullWidthImage = attributes.fullWidthImage;

  if (typeof fullWidthImage !== "undefined" && fullWidthImage && allowedBlocks.includes(blockType.name)) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(extraProps.className, "full-width");
  }

  return extraProps;
};

addFilter("blocks.getSaveContent.extraProps", "bfbh/add-extra-class", addExtraClass);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addAttributes: addAttributes,
  addToAdvancedControls: addToAdvancedControls,
  addExtraClass: addExtraClass
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bceefba6c96d543d9a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzLmM0MmVkMjMyYTNiZDYxZjM1MTQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFRSSxpQkFBUixHQUE4QkMsRUFBRSxDQUFDQyxNQUFqQyxDQUFRRixpQkFBUjtBQUNBLHNCQUNDQyxFQUFFLENBQUNFLFdBREo7QUFBQSxJQUFRQyxRQUFSLG1CQUFRQSxRQUFSO0FBQUEsSUFBa0JDLGlCQUFsQixtQkFBa0JBLGlCQUFsQjtBQUFBLElBQXFDQyxZQUFyQyxtQkFBcUNBLFlBQXJDO0FBQUEsSUFBbURDLFdBQW5ELG1CQUFtREEsV0FBbkQ7QUFFQSxxQkFBNENOLEVBQUUsQ0FBQ08sVUFBL0M7QUFBQSxJQUFRQyxTQUFSLGtCQUFRQSxTQUFSO0FBQUEsSUFBbUJDLE1BQW5CLGtCQUFtQkEsTUFBbkI7QUFBQSxJQUEyQkMsWUFBM0Isa0JBQTJCQSxZQUEzQixFQUVBOztBQUVBLGlFQUFlWCxpQkFBaUIsQ0FBQyxpQkFBRCxFQUFvQjtBQUNuRFksRUFBQUEsS0FBSyxFQUFFLE1BRDRDO0FBRW5EQyxFQUFBQSxJQUFJLEVBQUUsUUFGNkM7QUFHbkRDLEVBQUFBLFFBQVEsRUFBRSxhQUh5QztBQUluREMsRUFBQUEsVUFBVSxFQUFFO0FBQ1hILElBQUFBLEtBQUssRUFBRTtBQUNOSSxNQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVOQyxNQUFBQSxNQUFNLEVBQUUsTUFGRjtBQUdOQyxNQUFBQSxRQUFRLEVBQUU7QUFISixLQURJO0FBTVhDLElBQUFBLFVBQVUsRUFBRTtBQUNYSCxNQUFBQSxJQUFJLEVBQUUsUUFESztBQUVYLGlCQUFTO0FBRkUsS0FORDtBQVVYSSxJQUFBQSxJQUFJLEVBQUU7QUFDTEosTUFBQUEsSUFBSSxFQUFFLFFBREQ7QUFFTEMsTUFBQUEsTUFBTSxFQUFFLE1BRkg7QUFHTEMsTUFBQUEsUUFBUSxFQUFFO0FBSEwsS0FWSztBQWVYRyxJQUFBQSxTQUFTLEVB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cy5qcyIsIndlYnBhY2s6Ly9iZmJoLXRoZW1lLy4vYXNzZXRzL2Rldi9qcy9ibG9ja3MvaGVyb0Jsb2NrLmpzIiwid2VicGFjazovL2JmYmgtdGhlbWUvLi9hc3NldHMvZGV2L2pzL2Jsb2Nrcy93cEltYWdlQmxvY2suanMiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL2JmYmgtdGhlbWUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Nzcy9ibG9ja3MuY3NzXCI7XG5pbXBvcnQgeyBoZXJvQmxvY2sgfSBmcm9tIFwiLi9ibG9ja3MvaGVyb0Jsb2NrXCI7XG5pbXBvcnQge1xuXHRhZGRBdHRyaWJ1dGVzLFxuXHRhZGRUb0FkdmFuY2VkQ29udHJvbHMsXG5cdGFkZEV4dHJhQ2xhc3MsXG59IGZyb20gXCIuL2Jsb2Nrcy93cEltYWdlQmxvY2tcIjtcbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgUmljaFRleHQsIEluc3BlY3RvckNvbnRyb2xzLCBDb2xvclBhbGV0dGUsIE1lZGlhVXBsb2FkIH0gPVxuXHR3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgUGFuZWxCb2R5LCBCdXR0b24sIFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gbmFtZXNwYWNlL2Jsb2NrLXNsdWdcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXCJiZmJoL2hlcm8tYmxvY2tcIiwge1xuXHR0aXRsZTogXCJIZXJvXCIsXG5cdGljb246IFwic21pbGV5XCIsXG5cdGNhdGVnb3J5OiBcImJmYmgtYmxvY2tzXCIsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdHNvdXJjZTogXCJodG1sXCIsXG5cdFx0XHRzZWxlY3RvcjogXCJoMlwiLFxuXHRcdH0sXG5cdFx0dGl0bGVDb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiYmxhY2tcIixcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRzb3VyY2U6IFwiaHRtbFwiLFxuXHRcdFx0c2VsZWN0b3I6IFwicFwiLFxuXHRcdH0sXG5cdFx0Ym9keUNvbG9yOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0ZGVmYXVsdDogXCJibGFja1wiLFxuXHRcdH0sXG5cdFx0YmFja2dyb3VuZEltYWdlOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcblx0XHR9LFxuXHRcdG92ZXJsYXlDb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiYmxhY2tcIixcblx0XHR9LFxuXHRcdG92ZXJsYXlPcGFjaXR5OiB7XG5cdFx0XHR0eXBlOiBcIm51bWJlclwiLFxuXHRcdFx0ZGVmYXVsdDogMC4zLFxuXHRcdH0sXG5cdH0sXG5cdGVkaXQ6ICh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdHRpdGxlLFxuXHRcdFx0dGl0bGVDb2xvcixcblx0XHRcdGJvZHksXG5cdFx0XHRib2R5Q29sb3IsXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2UsXG5cdFx0XHRvdmVybGF5Q29sb3IsXG5cdFx0XHRvdmVybGF5T3BhY2l0eSxcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IG9uQ2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogbmV3VGl0bGUgfSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uQ2hhbmdlVGl0bGVDb2xvciA9IChuZXdUaXRsZUNvbG9yKSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGl0bGVDb2xvcjogbmV3VGl0bGVDb2xvciB9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VCb2R5ID0gKG5ld0JvZHkpID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBib2R5OiBuZXdCb2R5IH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkNoYW5nZUJvZHlDb2xvciA9IChuZXdCb2R5Q29sb3IpID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBib2R5Q29sb3I6IG5ld0JvZHlDb2xvciB9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25TZWxlY3RJbWFnZSA9IChuZXdJbWFnZSkgPT4ge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRJbWFnZTogbmV3SW1hZ2Uuc2l6ZXMuZnVsbC51cmwgfSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uT3ZlcmxheUNvbG9yQ2hhbmdlID0gKG5ld0NvbG9yKSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgb3ZlcmxheUNvbG9yOiBuZXdDb2xvciB9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25PdmVybGF5T3BhY2l0eUNoYW5nZSA9IChuZXdPcGFjaXR5KSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgb3ZlcmxheU9wYWNpdHk6IG5ld09wYWNpdHkgfSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjQwcHhcIiB9fT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17XCJGb250IENvbG9yIFNldHRpbmdzXCJ9PlxuXHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0PHN0cm9uZz5TZWxlY3QgYSB0aXRsZSBjb2xvcjo8L3N0cm9uZz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RpdGxlQ29sb3J9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2VUaXRsZUNvbG9yfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e1wiRm9udCBDb2xvciBTZXR0aW5nc1wifT5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdDxzdHJvbmc+U2VsZWN0IGEgYm9keSBjb2xvcjo8L3N0cm9uZz5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0dmFsdWU9e2JvZHlDb2xvcn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZUJvZHlDb2xvcn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtcIkJhY2tncm91bmQgSW1hZ2UgU2V0dGluZ3NcIn0+XG5cdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHQ8c3Ryb25nPlNlbGVjdCBhIGJhY2tncm91bmQgaW1hZ2U6PC9zdHJvbmc+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9e29uU2VsZWN0SW1hZ2V9XG5cdFx0XHRcdFx0XHR0eXBlPVwiaW1hZ2VcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2JhY2tncm91bmRJbWFnZX1cblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVufVxuXHRcdFx0XHRcdFx0XHRcdGljb249XCJ1cGxvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRvci1tZWRpYS1wbGFjZWhvbGRlcl9fYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdEJhY2tncm91bmQgSW1hZ2Vcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0PHN0cm9uZz5PdmVybGF5IGNvbG9yOjwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17b3ZlcmxheUNvbG9yfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25PdmVybGF5Q29sb3JDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtcIk92ZXJsYXkgb3BhY2l0eVwifVxuXHRcdFx0XHRcdFx0dmFsdWU9e292ZXJsYXlPcGFjaXR5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uT3ZlcmxheU9wYWNpdHlDaGFuZ2V9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0XHRzdGVwPXswLjAxfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFpbmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdFx0XHRiYWtja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdGtleT1cImVkaXRhYmxlXCJcblx0XHRcdFx0XHR0YWdOYW1lPVwiaDJcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwidGl0bGVcIlxuXHRcdFx0XHRcdHZhbHVlPXt0aXRsZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogdGl0bGVDb2xvciB9fVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdGtleT1cImVkaXRhYmxlXCJcblx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0dmFsdWU9e2JvZHl9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlQm9keX1cblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogYm9keUNvbG9yIH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj4sXG5cdFx0XTtcblx0fSxcblx0c2F2ZTogKHsgYXR0cmlidXRlcyB9KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0dGl0bGUsXG5cdFx0XHR0aXRsZUNvbG9yLFxuXHRcdFx0Ym9keSxcblx0XHRcdGJvZHlDb2xvcixcblx0XHRcdGJhY2tncm91bmRJbWFnZSxcblx0XHRcdG92ZXJsYXlDb2xvcixcblx0XHRcdG92ZXJsYXlPcGFjaXR5LFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFpbmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXG5cdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdFx0XHRiYWtja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMiBzdHlsZT17eyBjb2xvcjogdGl0bGVDb2xvciB9fT57dGl0bGV9PC9oMj5cblx0XHRcdFx0PFJpY2hUZXh0LkNvbnRlbnRcblx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXG5cdFx0XHRcdFx0dmFsdWU9e2JvZHl9XG5cdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IGJvZHlDb2xvciB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcbmNvbnN0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgYWxsb3dlZEJsb2NrcyA9IFtcImNvcmUvaW1hZ2VcIl07XG5cbmNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAoc2V0dGluZ3MpID0+IHtcblx0aWYgKFxuXHRcdHR5cGVvZiBzZXR0aW5ncy5hdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0YWxsb3dlZEJsb2Nrcy5pbmNsdWRlcyhzZXR0aW5ncy5uYW1lKVxuXHQpIHtcblx0XHRzZXR0aW5ncy5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihzZXR0aW5ncy5hdHRyaWJ1dGVzLCB7XG5cdFx0XHRmdWxsV2lkdGhJbWFnZToge1xuXHRcdFx0XHR0eXBlOiBcImJvb2xlYW5cIixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHNldHRpbmdzO1xufTtcblxuYWRkRmlsdGVyKFwiYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlXCIsIFwiYmZiaC9hZGQtYXR0cmlidXRlc1wiLCBhZGRBdHRyaWJ1dGVzKTtcblxuY29uc3QgYWRkVG9BZHZhbmNlZENvbnRyb2xzID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoXG5cdChCbG9ja0VkaXQpID0+IChwcm9wcykgPT4ge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlcywgaXNTZWxlY3RlZCwgbmFtZSwgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cblx0XHRjb25zdCB7IGZ1bGxXaWR0aEltYWdlIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+XG5cblx0XHRcdFx0e2lzU2VsZWN0ZWQgJiYgYWxsb3dlZEJsb2Nrcy5pbmNsdWRlcyhuYW1lKSAmJiAoXG5cdFx0XHRcdFx0PEluc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJGdWxsIFdpZHRoIEltYWdlXCIpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtmdWxsV2lkdGhJbWFnZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhJbWFnZTogIWZ1bGxXaWR0aEltYWdlLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0ZnVsbFdpZHRoSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oXCJJbWFnZSBleHBhbmRzIHRvIHdpZHRoIG9mIHNjcmVlblwiKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyhcIkltYWdlIGlzIGNvbnRhaW5lZFwiKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0XHRcdFx0KX1cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fSxcblx0XCJhZGRUb0FkdmFuY2VkQ29udHJvbHNcIlxuKTtcblxuYWRkRmlsdGVyKFwiZWRpdG9yLkJsb2NrRWRpdFwiLCBcImJmYmgvYWR2YW5jZWQtY29udHJvbHNcIiwgYWRkVG9BZHZhbmNlZENvbnRyb2xzKTtcblxuY29uc3QgYWRkRXh0cmFDbGFzcyA9IChleHRyYVByb3BzLCBibG9ja1R5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0Y29uc3QgeyBmdWxsV2lkdGhJbWFnZSB9ID0gYXR0cmlidXRlcztcblxuXHRpZiAoXG5cdFx0dHlwZW9mIGZ1bGxXaWR0aEltYWdlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0ZnVsbFdpZHRoSW1hZ2UgJiZcblx0XHRhbGxvd2VkQmxvY2tzLmluY2x1ZGVzKGJsb2NrVHlwZS5uYW1lKVxuXHQpIHtcblx0XHRleHRyYVByb3BzLmNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoZXh0cmFQcm9wcy5jbGFzc05hbWUsIFwiZnVsbC13aWR0aFwiKTtcblx0fVxuXG5cdHJldHVybiBleHRyYVByb3BzO1xufTtcblxuYWRkRmlsdGVyKFxuXHRcImJsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzXCIsXG5cdFwiYmZiaC9hZGQtZXh0cmEtY2xhc3NcIixcblx0YWRkRXh0cmFDbGFzc1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgeyBhZGRBdHRyaWJ1dGVzLCBhZGRUb0FkdmFuY2VkQ29udHJvbHMsIGFkZEV4dHJhQ2xhc3MgfTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWJjZWVmYmE2Yzk2ZDU0M2Q5YTFcIikiXSwibmFtZXMiOlsiaGVyb0Jsb2NrIiwiYWRkQXR0cmlidXRlcyIsImFkZFRvQWR2YW5jZWRDb250cm9scyIsImFkZEV4dHJhQ2xhc3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJSaWNoVGV4dCIsIkluc3BlY3RvckNvbnRyb2xzIiwiQ29sb3JQYWxldHRlIiwiTWVkaWFVcGxvYWQiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiQnV0dG9uIiwiUmFuZ2VDb250cm9sIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwidHlwZSIsInNvdXJjZSIsInNlbGVjdG9yIiwidGl0bGVDb2xvciIsImJvZHkiLCJib2R5Q29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvdmVybGF5Q29sb3IiLCJvdmVybGF5T3BhY2l0eSIsImVkaXQiLCJzZXRBdHRyaWJ1dGVzIiwib25DaGFuZ2VUaXRsZSIsIm5ld1RpdGxlIiwib25DaGFuZ2VUaXRsZUNvbG9yIiwibmV3VGl0bGVDb2xvciIsIm9uQ2hhbmdlQm9keSIsIm5ld0JvZHkiLCJvbkNoYW5nZUJvZHlDb2xvciIsIm5ld0JvZHlDb2xvciIsIm9uU2VsZWN0SW1hZ2UiLCJuZXdJbWFnZSIsInNpemVzIiwiZnVsbCIsInVybCIsIm9uT3ZlcmxheUNvbG9yQ2hhbmdlIiwibmV3Q29sb3IiLCJvbk92ZXJsYXlPcGFjaXR5Q2hhbmdlIiwibmV3T3BhY2l0eSIsIm1hcmdpbkJvdHRvbSIsIm9wZW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kU2l6ZSIsImJha2NrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiY29sb3IiLCJzYXZlIiwiY2xhc3NuYW1lcyIsIl9fIiwiaTE4biIsImFkZEZpbHRlciIsImhvb2tzIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJjb21wb3NlIiwiRnJhZ21lbnQiLCJlbGVtZW50IiwiSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyIsIlRvZ2dsZUNvbnRyb2wiLCJhbGxvd2VkQmxvY2tzIiwic2V0dGluZ3MiLCJpbmNsdWRlcyIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJmdWxsV2lkdGhJbWFnZSIsIkJsb2NrRWRpdCIsInByb3BzIiwiaXNTZWxlY3RlZCIsImV4dHJhUHJvcHMiLCJibG9ja1R5cGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9