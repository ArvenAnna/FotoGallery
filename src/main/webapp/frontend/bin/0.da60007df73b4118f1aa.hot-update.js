webpackHotUpdate(0,{

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var LeftArrowIcon = (0, _styledComponents2.default)(_leftArrow2.default)(_templateObject, Icon);

var RightArrowIcon = (0, _styledComponents2.default)(_rightArrow2.default)(_templateObject, Icon);

var Arrow = function Arrow(_ref) {
    var direction = _ref.direction;


    return direction == "left" ? _react2.default.createElement(LeftArrowIcon, null) : _react2.default.createElement(RightArrowIcon, null);
};

exports.default = Arrow;

/***/ })

})
//# sourceMappingURL=0.da60007df73b4118f1aa.hot-update.js.map