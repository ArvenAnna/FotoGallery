webpackHotUpdate(0,{

/***/ 15:
false,

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(50);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = __webpack_require__(14);

var _Icons2 = __webpack_require__(14);

var _Picture = __webpack_require__(70);

var _Picture2 = _interopRequireDefault(_Picture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FotoSlider = function (_React$Component) {
  _inherits(FotoSlider, _React$Component);

  function FotoSlider() {
    _classCallCheck(this, FotoSlider);

    return _possibleConstructorReturn(this, (FotoSlider.__proto__ || Object.getPrototypeOf(FotoSlider)).apply(this, arguments));
  }

  _createClass(FotoSlider, [{
    key: 'render',
    value: function render() {

      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: false,
        centerMode: true,
        fade: true,
        nextArrow: _react2.default.createElement(_Icons.RightArrowIcon, null),
        prevArrow: _react2.default.createElement(_Icons.LeftArrowIcon, null)
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Picture2.default, { src: '/foto/download.jpg' })
      );
    }
  }]);

  return FotoSlider;
}(_react2.default.Component);

exports.default = FotoSlider;

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ( (36:11)\n\n\u001b[0m \u001b[90m 34 | \u001b[39m  mouseEnter(e) {\n \u001b[90m 35 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 36 | \u001b[39m    \u001b[36mswitch\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39manimation\n \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 37 | \u001b[39m\n \u001b[90m 38 | \u001b[39m    \u001b[36mif\u001b[39m (\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39manimation \u001b[33m===\u001b[39m \u001b[32m'fade'\u001b[39m) {\n \u001b[90m 39 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({\u001b[0m\n");

/***/ }),

/***/ 71:
false

})
//# sourceMappingURL=0.0276756918395155741e.hot-update.js.map