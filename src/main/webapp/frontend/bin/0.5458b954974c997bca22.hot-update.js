webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_base {\n  from {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n  to {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes fade_in_top {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n}\n@-webkit-keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fade_in_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n}\n@-webkit-keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@keyframes fade_in_icon {\n  from {\n    fill: rgba(255, 255, 255, 0);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n}\n@-webkit-keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_base {\n  from {\n    visibility: visible;\n    color: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    visibility: hidden;\n    color: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_top {\n  from {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes fade_out_bottom {\n  from {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@keyframes fade_out_icon {\n  from {\n    fill: rgba(255, 255, 255, 0.7);\n  }\n  to {\n    fill: rgba(255, 255, 255, 0);\n  }\n}\n@-webkit-keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@keyframes move_to_right {\n  from {\n    right: 100%;\n  }\n  to {\n    right: 0;\n  }\n}\n@-webkit-keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@keyframes move_to_left {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n@-webkit-keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@keyframes move_to_top {\n  from {\n    top: 100%;\n  }\n  to {\n    top: 0;\n  }\n}\n@-webkit-keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n  }\n  to {\n    bottom: 0;\n  }\n}\n@keyframes move_to_bottom {\n  from {\n    bottom: 100%;\n  }\n  to {\n    bottom: 0;\n  }\n}\n.image_wrapper {\n  position: relative;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0.5rem 0.5rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5);\n  border-radius: 0.3rem;\n}\n.image_wrapper:hover .overlay {\n  visibility: visible;\n}\n.image_wrapper img {\n  margin: 0 auto;\n  height: 30rem;\n}\n.image_wrapper .overlay {\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n}\n.image_wrapper .overlay .overlay_top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 80%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.image_wrapper .overlay .overlay_bottom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 20%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.image_wrapper .overlay .overlay_bottom_text {\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: italic;\n  margin: 0 20px;\n}\n.image_wrapper.fade_in .overlay {\n  -webkit-animation-name: fade_in_base;\n          animation-name: fade_in_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top {\n  -webkit-animation-name: fade_in_top;\n          animation-name: fade_in_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_top svg {\n  -webkit-animation-name: fade_in_icon;\n          animation-name: fade_in_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_in .overlay .overlay_bottom {\n  -webkit-animation-name: fade_in_bottom;\n          animation-name: fade_in_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay {\n  -webkit-animation-name: fade_out_base;\n          animation-name: fade_out_base;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top {\n  -webkit-animation-name: fade_out_top;\n          animation-name: fade_out_top;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_top svg {\n  -webkit-animation-name: fade_out_icon;\n          animation-name: fade_out_icon;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper.fade_out .overlay .overlay_bottom {\n  -webkit-animation-name: fade_out_bottom;\n          animation-name: fade_out_bottom;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper:hover > .move_to_right {\n  -webkit-animation-name: move_to_right;\n          animation-name: move_to_right;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper:hover > .move_to_left {\n  -webkit-animation-name: move_to_left;\n          animation-name: move_to_left;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper:hover > .move_to_top {\n  -webkit-animation-name: move_to_top;\n          animation-name: move_to_top;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n.image_wrapper:hover > .move_to_bottom {\n  -webkit-animation-name: move_to_bottom;\n          animation-name: move_to_bottom;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n", ""]);

// exports


/***/ }),

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(7);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = __webpack_require__(14);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const ImageWrapper = styled.div`
//
//   &:hover > .move_to_right {
//       animation-name: move_to_right;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_left {
//       animation-name: move_to_left;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_top {
//       animation-name: move_to_top;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//   &:hover > .move_to_bottom {
//       animation-name: move_to_bottom;
//       animation-duration: 0.5s;
//       animation-timing-function: ease;
//   }
//
//
//   }
// `

var Picture = function (_React$Component) {
    _inherits(Picture, _React$Component);

    // animation: fade, move_to

    function Picture(props) {
        _classCallCheck(this, Picture);

        var _this = _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).call(this, props));

        _this.state = {
            animation: ''
        };
        _this.mouseEnter = _this.mouseEnter.bind(_this);
        _this.mouseLeave = _this.mouseLeave.bind(_this);

        return _this;
    }

    _createClass(Picture, [{
        key: 'mouseLeave',
        value: function mouseLeave(e) {
            if (this.props.animation === 'fade') {
                this.setState({
                    animation: 'fade_out'
                });
                return;
            }
        }
    }, {
        key: 'mouseEnter',
        value: function mouseEnter(e) {
            if (this.props.animation === 'fade') {
                this.setState({
                    animation: 'fade_in'
                });
                return;
            }

            var clientRect = e.target.getClientRects()[0];
            var x = e.clientX;
            var y = e.clientY;
            var diffs = [{
                side: 'move_to_right',
                diff: Math.abs(x - clientRect.left)
            }, {
                side: 'move_to_left',
                diff: Math.abs(x - clientRect.right)
            }, {
                side: 'move_to_bottom',
                diff: Math.abs(y - clientRect.top)
            }, {
                side: 'move_to_top',
                diff: Math.abs(y - clientRect.bottom)
            }];

            var minDiff = Math.min.apply(Math, _toConsumableArray(Array.from(diffs, function (el) {
                return el.diff;
            })));
            var side = diffs.find(function (el) {
                return el.diff == minDiff;
            }).side;
            console.log(side);

            this.setState({
                animation: side
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var src = this.props.src;
            var animation = this.state.animation;

            return _react2.default.createElement(
                'div',
                {
                    className: 'image_wrapper ' + animation,
                    onMouseLeave: this.mouseLeave,
                    onMouseEnter: this.mouseEnter },
                _react2.default.createElement('img', { src: src }),
                _react2.default.createElement(
                    'div',
                    { className: 'overlay' },
                    _react2.default.createElement(
                        'div',
                        { className: 'overlay_top' },
                        _react2.default.createElement(_Icons.MagnifierIcon, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'overlay_bottom' },
                        _react2.default.createElement(
                            'span',
                            { className: 'overlay_bottom_text' },
                            'some beautiful picture'
                        )
                    )
                )
            );
        }
    }]);

    return Picture;
}(_react2.default.Component);

exports.default = Picture;

/***/ })

})
//# sourceMappingURL=0.5458b954974c997bca22.hot-update.js.map