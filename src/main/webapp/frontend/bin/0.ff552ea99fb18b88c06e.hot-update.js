webpackHotUpdate(0,{

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MagnifierIcon = exports.RightArrowIcon = exports.LeftArrowIcon = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   width: 1rem;\n   height: 1rem;\n'], ['\n   width: 1rem;\n   height: 1rem;\n']);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _leftArrow = __webpack_require__(65);

var _leftArrow2 = _interopRequireDefault(_leftArrow);

var _rightArrow = __webpack_require__(66);

var _rightArrow2 = _interopRequireDefault(_rightArrow);

var _magnifier = __webpack_require__(75);

var _magnifier2 = _interopRequireDefault(_magnifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = '\n        width: 1rem;\n        height: 1rem;\n        fill: ' + function (props) {
  return props.theme.text;
} + ';\n        \n        &:hover {\n            cursor: pointer;\n            fill: ' + function (props) {
  return props.theme.content;
} + ';\n        }\n';

var LeftArrowIcon = exports.LeftArrowIcon = (0, _styledComponents2.default)(_leftArrow2.default)(_templateObject, Icon);

var RightArrowIcon = exports.RightArrowIcon = (0, _styledComponents2.default)(_rightArrow2.default)(_templateObject, Icon);

var MagnifierIcon = exports.MagnifierIcon = (0, _styledComponents2.default)(_magnifier2.default)(_templateObject2);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", width: "390.704", height: "390.704", viewBox: "0 0 390.704 390.704" }, this.props),
        _react2.default.createElement("path", { d: "M379.711 326.556L265.343 212.188c30.826-54.189 23.166-124.495-23.001-170.663-55.367-55.366-145.453-55.366-200.818 0-55.365 55.366-55.366 145.452 0 200.818 46.167 46.167 116.474 53.827 170.663 23.001l114.367 114.369c14.655 14.655 38.503 14.654 53.157 0 14.656-14.654 14.657-38.501 0-53.157zM214.057 214.059c-39.77 39.771-104.479 39.771-144.25 0-39.77-39.77-39.77-104.48 0-144.25 39.771-39.77 104.48-39.77 144.25 0 39.771 39.77 39.77 104.481 0 144.25z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;

/***/ })

})
//# sourceMappingURL=0.ff552ea99fb18b88c06e.hot-update.js.map