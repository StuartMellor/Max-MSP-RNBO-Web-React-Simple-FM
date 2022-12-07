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
var SvgLargeDial = function SvgLargeDial(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 114,
    height: 270,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h114v270H0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 57,
    cy: 123,
    r: 40,
    fill: "#D9D9D9"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#Large_Dial_svg__a)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 57.385,
    cy: 123.385,
    r: 32,
    transform: "rotate(-155.514 57.385 123.385)",
    fill: "#ECECEC"
  })), /*#__PURE__*/React.createElement("g", {
    filter: "url(#Large_Dial_svg__b)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#B4B4B4",
    d: "m47.088 149.672-2.73-1.243 3.73-8.191 2.73 1.243z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M41 175.5a2.5 2.5 0 0 1 2.5-2.5h27a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-27a2.5 2.5 0 0 1-2.5-2.5v-12Z",
    fill: "#B4B4B4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.6 186.144c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.195 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.196 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "Large_Dial_svg__a",
    x: 21.377,
    y: 91.377,
    width: 72.016,
    height: 72.016,
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
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1_7"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_1_7",
    result: "shape"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "Large_Dial_svg__b",
    x: 44.358,
    y: 140.238,
    width: 6.46,
    height: 13.434,
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
    result: "effect1_innerShadow_1_7"
  }))));
};
var _default = SvgLargeDial;
exports["default"] = _default;