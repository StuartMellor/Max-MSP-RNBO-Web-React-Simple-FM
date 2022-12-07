"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Slider = _interopRequireDefault(require("./Slider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// TODO Make Slider Scalable, i.e. set the width and height of the actual
// slider!
var SliderUI = /*#__PURE__*/function (_Component) {
  _inherits(SliderUI, _Component);
  var _super = _createSuper(SliderUI);
  function SliderUI() {
    var _this;
    _classCallCheck(this, SliderUI);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      lastSliderOffset: 0,
      mouseStartPos: 0,
      sliderOffset: 0,
      mouseHeld: false,
      preCalcedMultiplier: 1
    });
    _defineProperty(_assertThisInitialized(_this), "sliderBeingDragged", function (e) {
      var _this$state = _this.state,
        mouseStartPos = _this$state.mouseStartPos,
        lastSliderOffset = _this$state.lastSliderOffset,
        preCalcedMultiplier = _this$state.preCalcedMultiplier;
      var sliderOffset = mouseStartPos - e.pageY + lastSliderOffset;

      // Filter out anything above or below what we want!
      if (sliderOffset > 150) {
        return;
        // sliderOffset = 150;
      } else if (sliderOffset < 0) {
        return;
        // sliderOffset = 0;
      }

      var _this$props = _this.props,
        sliderName = _this$props.sliderName,
        minRelVal = _this$props.minRelVal,
        reportOffset = _this$props.reportOffset;
      var relativeValue = preCalcedMultiplier * sliderOffset + minRelVal;
      reportOffset(sliderName, relativeValue);
      _this.setState({
        sliderOffset: sliderOffset
      });
    });
    _defineProperty(_assertThisInitialized(_this), "sliderDragStart", function (e) {
      // const { sliderName } = this.props;
      var sliderOffset = _this.state.sliderOffset;
      _this.setState({
        mouseHeld: true,
        mouseStartPos: e.pageY,
        lastSliderOffset: sliderOffset
      });
      window.addEventListener('mousemove', _this.sliderBeingDragged);
    });
    _defineProperty(_assertThisInitialized(_this), "sliderDragEnd", function (e) {
      var mouseHeld = _this.state.mouseHeld;
      if (mouseHeld) {
        window.removeEventListener('mousemove', _this.sliderBeingDragged);
      }
    });
    return _this;
  }
  _createClass(SliderUI, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
        minRelVal = _this$props2.minRelVal,
        maxRelVal = _this$props2.maxRelVal;
      var preCalcedMultiplier = (maxRelVal - minRelVal) / 150.0;
      this.setState({
        preCalcedMultiplier: preCalcedMultiplier
      });
      window.addEventListener('mouseup', this.sliderDragEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.sliderDragEnd);
      window.removeEventListener('mousemove', this.sliderBeingDragged);
    }
  }, {
    key: "setSliderMinMax",
    value: function setSliderMinMax() {}
  }, {
    key: "render",
    value: function render() {
      var sliderOffset = this.state.sliderOffset;
      return /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
        dragStart: this.sliderDragStart,
        sliderOffset: sliderOffset
      });
    }
  }]);
  return SliderUI;
}(_react.Component);
exports["default"] = SliderUI;
SliderUI.propTypes = {
  sliderName: _propTypes["default"].string.isRequired,
  reportOffset: _propTypes["default"].func,
  minRelVal: _propTypes["default"].number,
  maxRelVal: _propTypes["default"].number
};
SliderUI.defaultProps = {
  reportOffset: function reportOffset() {
    console.log("Slider offset not connected to anything!");
  },
  minRelVal: 0,
  maxRelVal: 150
};