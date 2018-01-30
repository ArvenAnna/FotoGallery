webpackHotUpdate(0,{

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MagnifierIcon = exports.RightArrowIcon = exports.LeftArrowIcon = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   width: 3rem;\n   height: 3rem;\n   fill: rgba(255,255,255, 0.7);\n'], ['\n   width: 3rem;\n   height: 3rem;\n   fill: rgba(255,255,255, 0.7);\n']);

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

/***/ })

})
//# sourceMappingURL=0.b38cc7ddacde72ab738f.hot-update.js.map