webpackHotUpdate(0,{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icons = __webpack_require__(14);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    key: "mouseLeave",
    value: function mouseLeave(e) {
      if (this.props.animation === 'fade') {
        this.setState({
          animation: 'fade_out'
        });
        return;
      }

      var clientRect = e.target.getClientRects()[0];
      var x = e.clientX;
      var y = e.clientY;
      var diffs = [{
        side: 'move_from_right',
        diff: Math.abs(x - clientRect.left)
      }, {
        side: 'move_from_left',
        diff: Math.abs(x - clientRect.right)
      }, {
        side: 'move_from_bottom',
        diff: Math.abs(y - clientRect.top)
      }, {
        side: 'move_from_top',
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
    key: "mouseEnter",
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
    key: "findSide",
    value: function findSide(e, direction) {
      var clientRect = e.target.getClientRects()[0];
      var x = e.clientX;
      var y = e.clientY;
      var diffs = [{
        side: "move_" + direction + "_right",
        diff: Math.abs(x - clientRect.left)
      }, {
        side: "move_" + direction + "_left",
        diff: Math.abs(x - clientRect.right)
      }, {
        side: "move_" + direction + "_bottom",
        diff: Math.abs(y - clientRect.top)
      }, {
        side: "move_" + direction + "_top",
        diff: Math.abs(y - clientRect.bottom)
      }];

      var minDiff = Math.min.apply(Math, _toConsumableArray(Array.from(diffs, function (el) {
        return el.diff;
      })));
      var side = diffs.find(function (el) {
        return el.diff == minDiff;
      }).side;
      console.log(side);
    }
  }, {
    key: "render",
    value: function render() {
      var src = this.props.src;
      var animation = this.state.animation;

      return _react2.default.createElement(
        "div",
        {
          className: "image_wrapper " + animation,
          onMouseLeave: this.mouseLeave,
          onMouseEnter: this.mouseEnter },
        _react2.default.createElement("img", { src: src }),
        _react2.default.createElement(
          "div",
          { className: 'overlay' },
          _react2.default.createElement(
            "div",
            { className: "overlay_top" },
            _react2.default.createElement(_Icons.MagnifierIcon, null)
          ),
          _react2.default.createElement(
            "div",
            { className: "overlay_bottom" },
            _react2.default.createElement(
              "span",
              { className: "overlay_bottom_text" },
              "some beautiful picture"
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
//# sourceMappingURL=0.db01f600b0ed2c04723a.hot-update.js.map