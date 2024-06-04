"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgPlay = function SvgPlay(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 114,
    height: 270,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h114v270H0z"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#Play_svg__a)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 27,
    y: 108,
    width: 60,
    height: 54,
    rx: 2.5,
    fill: "#D9D9D9"
  })), /*#__PURE__*/React.createElement("rect", {
    x: 27,
    y: 108,
    width: 60,
    height: 50,
    rx: 2.5,
    fill: "#ECECEC"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#Play_svg__b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m71 133-21 12.124v-24.248L71 133Z",
    fill: "#D9D9D9"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "Play_svg__a",
    x: 23,
    y: 108,
    width: 68,
    height: 62,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_4_133"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_4_133",
    result: "shape"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "Play_svg__b",
    x: 50,
    y: 120.876,
    width: 21,
    height: 28.249,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/React.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/React.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: -1,
    k3: 1
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow_4_133"
  }))));
};
var _default = SvgPlay;
exports["default"] = _default;