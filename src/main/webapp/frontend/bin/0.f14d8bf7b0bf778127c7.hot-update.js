webpackHotUpdate(0,{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: 0 auto;\n    height: 560px;\n    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.5);\n    border-radius:5px;\n'], ['\n    margin: 0 auto;\n    height: 560px;\n    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.5);\n    border-radius:5px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(47);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageWrapper = _styledComponents2.default.div(_templateObject);

var Image = _styledComponents2.default.img(_templateObject2);

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
        fade: true,
        nextArrow: _react2.default.createElement(_Icons.RightArrowIcon, null),
        prevArrow: _react2.default.createElement(_Icons.LeftArrowIcon, null)

      };
      return _react2.default.createElement(
        _reactSlick2.default,
        settings,
        _react2.default.createElement(
          ImageWrapper,
          null,
          _react2.default.createElement(Image, { src: '/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg' })
        ),
        _react2.default.createElement(
          ImageWrapper,
          null,
          _react2.default.createElement(Image, { src: '/foto/download.jpg' })
        ),
        _react2.default.createElement(
          ImageWrapper,
          null,
          _react2.default.createElement(Image, { src: '/foto/images.jpg' })
        )
      );
    }
  }]);

  return FotoSlider;
}(_react2.default.Component);

exports.default = FotoSlider;

/***/ }),

/***/ 64:
false,

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightArrowIcon = exports.LeftArrowIcon = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _leftArrow = __webpack_require__(65);

var _leftArrow2 = _interopRequireDefault(_leftArrow);

var _rightArrow = __webpack_require__(66);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = '\n        width: 1rem;\n        height: 1rem;\n        fill: ' + function (props) {
  return props.theme.text;
} + ';\n        \n        &:hover {\n            cursor: pointer;\n            fill: ' + function (props) {
  return props.theme.content;
} + ';\n        }\n';

var LeftArrowIcon = exports.LeftArrowIcon = (0, _styledComponents2.default)(_leftArrow2.default)(_templateObject, Icon);

var RightArrowIcon = exports.RightArrowIcon = (0, _styledComponents2.default)(_rightArrow2.default)(_templateObject, Icon);

/***/ })

})
//# sourceMappingURL=0.f14d8bf7b0bf778127c7.hot-update.js.map