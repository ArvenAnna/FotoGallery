webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports) {

const constants = {
    'preview_animation_duration': '2s',
    'picture_animation_duration': '1s',
    'preview_frame_color': 'black',
    'body_color': '#232326',
    'body_color_light': '#54545b',
    'shadow_color': 'rgba(238,130,238, 0.5)',
    'text_color': 'white',
    'picture_height': '200px',
    'picture_width': '300px',
    'picture_edit_height': '200px',
    'picture_edit_width': '300px',
    'border_radius': '0.3rem',
    'add_album_border': 'white 1px solid',
    'add_album_font_size': '1rem',
    'dialog_bg': 'black',
    'preview_border_width': '10px'
};

module.exports = constants;

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__);








let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false,
            width: 0,
            height: 0
        };
    }

    createAlbum() {
        this.setState({
            addAlbumModal: true
        });
    }

    closeModal() {
        this.setState({
            addAlbumModal: false
        });
    }

    componentDidMount() {
        //setTimeout(() => this.scrollbars.forceUpdate(), 100);
    }

    render() {

        const Content = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "app_container" },
            this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__newAlbum_AddNewAlbum__["a" /* default */], { closeModal: () => this.closeModal() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "app_page" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["d" /* Switch */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { exact: true, path: "/", component: __WEBPACK_IMPORTED_MODULE_3__AlbumContainer__["a" /* default */] }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["c" /* Route */], { path: "/edit/:id", component: __WEBPACK_IMPORTED_MODULE_5__editAlbum_EditAlbum__["a" /* default */] })
                )
            )
        );

        return this.state.addAlbumModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_custom_scrollbars__["Scrollbars"],
            {
                className: "scroll_bar",
                hideTracksWhenNotNeeded: true,
                ref: scrollbars => this.scrollbars = scrollbars },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, null)
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
var _dec, _class;







let Header = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    fetchAlbumsBySearch: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["e" /* fetchAlbumsBySearch */],
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_2__actions_albumActions__["d" /* fetchAlbums */]
}), Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__["a" /* default */])(_class = _dec(_class = class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if (e.target.value) this.props.fetchAlbumsBySearch(e.target.value);else this.props.fetchAlbums();
            this.props.history.push('/');
        }
    }

    render() {
        return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { key: "header_menu", className: "header_menu" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item", onClick: this.props.createAlbum },
                "new album"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "menu_item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* NavLink */],
                    { to: "/" },
                    "album's list"
                )
            )
        ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "search_menu", key: "search" },
            "Search: ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { className: "search_input", defaultValue: "",
                onKeyPress: e => this.onEnter(e) })
        )];
    }
}) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__addNewAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HttpService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_albumActions__ = __webpack_require__(23);
var _dec, _class;









const routesModule = __webpack_require__(25);



const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
  margin-bottom: 0.25rem;
`;

let AddNewAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_5_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    createAlbum: __WEBPACK_IMPORTED_MODULE_9__actions_albumActions__["a" /* createAlbum */]
}), _dec(_class = class AddNewAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.modal = null;
        this.state = {
            height: '100%',
            name: '',
            description: '',
            src: null
        };
    }

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);

        // window.addEventListener('resize', () => this.calculateModalHeight())
        this.calculateModalHeight();
    }

    calculateModalHeight() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        if (this.modal) {
            const modalStyle = this.modal.currentStyle || window.getComputedStyle(this.modal);
            const height = Math.min(parseInt(y), parseInt(modalStyle.height)) + 'px';
            this.setState({
                height
            });
        }
    }

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_8__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(id => {
            this.setState({ src: id.src });
        });
    }

    createAlbum() {
        const { name, description, src } = this.state;
        if (name && description && src) {
            this.props.createAlbum({
                name, description, src
            });
            this.props.closeModal();
        }
    }

    render() {
        const { name, description, src, height } = this.state;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'add_album' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_custom_scrollbars__["Scrollbars"],
                {
                    hideTracksWhenNotNeeded: true,
                    className: 'scroll_bar'
                    // renderTrackVertical={({ style, ...props }) =>
                    //     <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>}
                    // renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                    // renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                    , ref: scrollbars => this.scrollbars = scrollbars
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'add_album_modal', ref: r => this.modal = r },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: this.props.closeModal }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Name'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: name, onChange: e => this.setState({ name: e.target.value }) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Title image:'
                    ),
                    src ? Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'video',
                        {

                            controls: 'controls' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: src })
                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: src }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fileInput_FileInput__["a" /* default */], { label: 'Choose main foto',
                        uploadFile: file => this.uploadFile(file) }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Label,
                        null,
                        'Description'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { value: description, onChange: e => this.setState({ description: e.target.value }) }),
                    src && !Object(__WEBPACK_IMPORTED_MODULE_6__utils_index__["a" /* isVideo */])(src) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'warning' },
                        'You will be able to rotate your foto in the edit mode after album creation.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'ok_button', onClick: () => this.createAlbum() },
                        'ok'
                    )
                )
            )
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AddNewAlbum);

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export css */
/* unused harmony export keyframes */
/* unused harmony export injectGlobal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* unused harmony export withTheme */
/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_function__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_is_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);







/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(ruleSet, flatten(chunk, executionContext));

    /* Handle other components */
    // $FlowFixMe not sure how to make this pass
    if (chunk.hasOwnProperty('styledComponentId')) return [].concat(ruleSet, ['.' + chunk.styledComponentId]);

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat(__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

//      
var css = (function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
});

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//mg;

var extractCompsFromCSS = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

//      
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
                                     return  true ? __webpack_require__.nc : null;
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.textNode.data === '') comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error('BrowserTag doesn\'t implement toReactElement!');
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */


  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) throw new Error("Trying to replace an element that wasn't mounted!");

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/


var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */


  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */


  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */


  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */


  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if (!comp) throw new Error('Must add a new component before you can inject css into it');
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('style', _extends({
      key: key, type: 'text/css' }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) throw new Error("Can't collect styles once you've called getStyleTags!");
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

//      
/* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,
  autoFocus: true,
  defaultValue: true,
  valueLink: true,
  defaultChecked: true,
  checkedLink: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,
  className: true,

  /* List copied from https://facebook.github.io/react/docs/events.html */
  onCopy: true,
  onCut: true,
  onPaste: true,
  onCompositionEnd: true,
  onCompositionStart: true,
  onCompositionUpdate: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onFocus: true,
  onBlur: true,
  onChange: true,
  onInput: true,
  onSubmit: true,
  onReset: true,
  onClick: true,
  onContextMenu: true,
  onDoubleClick: true,
  onDrag: true,
  onDragEnd: true,
  onDragEnter: true,
  onDragExit: true,
  onDragLeave: true,
  onDragOver: true,
  onDragStart: true,
  onDrop: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOut: true,
  onMouseOver: true,
  onMouseUp: true,
  onSelect: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchMove: true,
  onTouchStart: true,
  onScroll: true,
  onWheel: true,
  onAbort: true,
  onCanPlay: true,
  onCanPlayThrough: true,
  onDurationChange: true,
  onEmptied: true,
  onEncrypted: true,
  onEnded: true,
  onError: true,
  onLoadedData: true,
  onLoadedMetadata: true,
  onLoadStart: true,
  onPause: true,
  onPlay: true,
  onPlaying: true,
  onProgress: true,
  onRateChange: true,
  onSeeked: true,
  onSeeking: true,
  onStalled: true,
  onSuspend: true,
  onTimeUpdate: true,
  onVolumeChange: true,
  onWaiting: true,
  onLoad: true,
  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  onCopyCapture: true,
  onCutCapture: true,
  onPasteCapture: true,
  onCompositionEndCapture: true,
  onCompositionStartCapture: true,
  onCompositionUpdateCapture: true,
  onKeyDownCapture: true,
  onKeyPressCapture: true,
  onKeyUpCapture: true,
  onFocusCapture: true,
  onBlurCapture: true,
  onChangeCapture: true,
  onInputCapture: true,
  onSubmitCapture: true,
  onResetCapture: true,
  onClickCapture: true,
  onContextMenuCapture: true,
  onDoubleClickCapture: true,
  onDragCapture: true,
  onDragEndCapture: true,
  onDragEnterCapture: true,
  onDragExitCapture: true,
  onDragLeaveCapture: true,
  onDragOverCapture: true,
  onDragStartCapture: true,
  onDropCapture: true,
  onMouseDownCapture: true,
  onMouseEnterCapture: true,
  onMouseLeaveCapture: true,
  onMouseMoveCapture: true,
  onMouseOutCapture: true,
  onMouseOverCapture: true,
  onMouseUpCapture: true,
  onSelectCapture: true,
  onTouchCancelCapture: true,
  onTouchEndCapture: true,
  onTouchMoveCapture: true,
  onTouchStartCapture: true,
  onScrollCapture: true,
  onWheelCapture: true,
  onAbortCapture: true,
  onCanPlayCapture: true,
  onCanPlayThroughCapture: true,
  onDurationChangeCapture: true,
  onEmptiedCapture: true,
  onEncryptedCapture: true,
  onEndedCapture: true,
  onErrorCapture: true,
  onLoadedDataCapture: true,
  onLoadedMetadataCapture: true,
  onLoadStartCapture: true,
  onPauseCapture: true,
  onPlayCapture: true,
  onPlayingCapture: true,
  onProgressCapture: true,
  onRateChangeCapture: true,
  onSeekedCapture: true,
  onSeekingCapture: true,
  onStalledCapture: true,
  onSuspendCapture: true,
  onTimeUpdateCapture: true,
  onVolumeChangeCapture: true,
  onWaitingCapture: true,
  onLoadCapture: true,
  onAnimationStartCapture: true,
  onAnimationEndCapture: true,
  onAnimationIterationCapture: true,
  onTransitionEndCapture: true
};

/* From HTMLDOMPropertyConfig */
var htmlProps = {
  /**
   * Standard Properties
   */
  accept: true,
  acceptCharset: true,
  accessKey: true,
  action: true,
  allowFullScreen: true,
  allowTransparency: true,
  alt: true,
  // specifies target context for links with `preload` type
  as: true,
  async: true,
  autoComplete: true,
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  autoPlay: true,
  capture: true,
  cellPadding: true,
  cellSpacing: true,
  charSet: true,
  challenge: true,
  checked: true,
  cite: true,
  classID: true,
  className: true,
  cols: true,
  colSpan: true,
  content: true,
  contentEditable: true,
  contextMenu: true,
  controls: true,
  coords: true,
  crossOrigin: true,
  data: true, // For `<object />` acts as `src`.
  dateTime: true,
  default: true,
  defer: true,
  dir: true,
  disabled: true,
  download: true,
  draggable: true,
  encType: true,
  form: true,
  formAction: true,
  formEncType: true,
  formMethod: true,
  formNoValidate: true,
  formTarget: true,
  frameBorder: true,
  headers: true,
  height: true,
  hidden: true,
  high: true,
  href: true,
  hrefLang: true,
  htmlFor: true,
  httpEquiv: true,
  icon: true,
  id: true,
  inputMode: true,
  integrity: true,
  is: true,
  keyParams: true,
  keyType: true,
  kind: true,
  label: true,
  lang: true,
  list: true,
  loop: true,
  low: true,
  manifest: true,
  marginHeight: true,
  marginWidth: true,
  max: true,
  maxLength: true,
  media: true,
  mediaGroup: true,
  method: true,
  min: true,
  minLength: true,
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  multiple: true,
  muted: true,
  name: true,
  nonce: true,
  noValidate: true,
  open: true,
  optimum: true,
  pattern: true,
  placeholder: true,
  playsInline: true,
  poster: true,
  preload: true,
  profile: true,
  radioGroup: true,
  readOnly: true,
  referrerPolicy: true,
  rel: true,
  required: true,
  reversed: true,
  role: true,
  rows: true,
  rowSpan: true,
  sandbox: true,
  scope: true,
  scoped: true,
  scrolling: true,
  seamless: true,
  selected: true,
  shape: true,
  size: true,
  sizes: true,
  span: true,
  spellCheck: true,
  src: true,
  srcDoc: true,
  srcLang: true,
  srcSet: true,
  start: true,
  step: true,
  style: true,
  summary: true,
  tabIndex: true,
  target: true,
  title: true,
  // Setting .type throws on non-<input> tags
  type: true,
  useMap: true,
  value: true,
  width: true,
  wmode: true,
  wrap: true,

  /**
   * RDFa Properties
   */
  about: true,
  datatype: true,
  inlist: true,
  prefix: true,
  // property is also supported for OpenGraph in meta tags.
  property: true,
  resource: true,
  typeof: true,
  vocab: true,

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  autoCapitalize: true,
  autoCorrect: true,
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  autoSave: true,
  // color is for Safari mask-icon link
  color: true,
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  itemProp: true,
  itemScope: true,
  itemType: true,
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  itemID: true,
  itemRef: true,
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  results: true,
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  security: true,
  // IE-only attribute that controls focus behavior
  unselectable: 0
};

var svgProps = {
  accentHeight: true,
  accumulate: true,
  additive: true,
  alignmentBaseline: true,
  allowReorder: true,
  alphabetic: true,
  amplitude: true,
  arabicForm: true,
  ascent: true,
  attributeName: true,
  attributeType: true,
  autoReverse: true,
  azimuth: true,
  baseFrequency: true,
  baseProfile: true,
  baselineShift: true,
  bbox: true,
  begin: true,
  bias: true,
  by: true,
  calcMode: true,
  capHeight: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  clipPathUnits: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  contentScriptType: true,
  contentStyleType: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  decelerate: true,
  descent: true,
  diffuseConstant: true,
  direction: true,
  display: true,
  divisor: true,
  dominantBaseline: true,
  dur: true,
  dx: true,
  dy: true,
  edgeMode: true,
  elevation: true,
  enableBackground: true,
  end: true,
  exponent: true,
  externalResourcesRequired: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  filterRes: true,
  filterUnits: true,
  floodColor: true,
  floodOpacity: true,
  focusable: true,
  fontFamily: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  format: true,
  from: true,
  fx: true,
  fy: true,
  g1: true,
  g2: true,
  glyphName: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  glyphRef: true,
  gradientTransform: true,
  gradientUnits: true,
  hanging: true,
  horizAdvX: true,
  horizOriginX: true,
  ideographic: true,
  imageRendering: true,
  in: true,
  in2: true,
  intercept: true,
  k: true,
  k1: true,
  k2: true,
  k3: true,
  k4: true,
  kernelMatrix: true,
  kernelUnitLength: true,
  kerning: true,
  keyPoints: true,
  keySplines: true,
  keyTimes: true,
  lengthAdjust: true,
  letterSpacing: true,
  lightingColor: true,
  limitingConeAngle: true,
  local: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  markerHeight: true,
  markerUnits: true,
  markerWidth: true,
  mask: true,
  maskContentUnits: true,
  maskUnits: true,
  mathematical: true,
  mode: true,
  numOctaves: true,
  offset: true,
  opacity: true,
  operator: true,
  order: true,
  orient: true,
  orientation: true,
  origin: true,
  overflow: true,
  overlinePosition: true,
  overlineThickness: true,
  paintOrder: true,
  panose1: true,
  pathLength: true,
  patternContentUnits: true,
  patternTransform: true,
  patternUnits: true,
  pointerEvents: true,
  points: true,
  pointsAtX: true,
  pointsAtY: true,
  pointsAtZ: true,
  preserveAlpha: true,
  preserveAspectRatio: true,
  primitiveUnits: true,
  r: true,
  radius: true,
  refX: true,
  refY: true,
  renderingIntent: true,
  repeatCount: true,
  repeatDur: true,
  requiredExtensions: true,
  requiredFeatures: true,
  restart: true,
  result: true,
  rotate: true,
  rx: true,
  ry: true,
  scale: true,
  seed: true,
  shapeRendering: true,
  slope: true,
  spacing: true,
  specularConstant: true,
  specularExponent: true,
  speed: true,
  spreadMethod: true,
  startOffset: true,
  stdDeviation: true,
  stemh: true,
  stemv: true,
  stitchTiles: true,
  stopColor: true,
  stopOpacity: true,
  strikethroughPosition: true,
  strikethroughThickness: true,
  string: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  surfaceScale: true,
  systemLanguage: true,
  tableValues: true,
  targetX: true,
  targetY: true,
  textAnchor: true,
  textDecoration: true,
  textRendering: true,
  textLength: true,
  to: true,
  transform: true,
  u1: true,
  u2: true,
  underlinePosition: true,
  underlineThickness: true,
  unicode: true,
  unicodeBidi: true,
  unicodeRange: true,
  unitsPerEm: true,
  vAlphabetic: true,
  vHanging: true,
  vIdeographic: true,
  vMathematical: true,
  values: true,
  vectorEffect: true,
  version: true,
  vertAdvY: true,
  vertOriginX: true,
  vertOriginY: true,
  viewBox: true,
  viewTarget: true,
  visibility: true,
  widths: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  xHeight: true,
  x1: true,
  x2: true,
  xChannelSelector: true,
  xlinkActuate: true,
  xlinkArcrole: true,
  xlinkHref: true,
  xlinkRole: true,
  xlinkShow: true,
  xlinkTitle: true,
  xlinkType: true,
  xmlBase: true,
  xmlns: true,
  xmlnsXlink: true,
  xmlLang: true,
  xmlSpace: true,
  y: true,
  y1: true,
  y2: true,
  yChannelSelector: true,
  z: true,
  zoomAndPan: true
};

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var hasOwnProperty = {}.hasOwnProperty;
var validAttr = (function (name) {
  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
});

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
});

var warnChannelDeprecated = once(function () {
  // eslint-disable-next-line no-console
  console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
});
/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      warnChannelDeprecated();

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (__WEBPACK_IMPORTED_MODULE_4_is_function___default()(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (!__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
var multiDashRegex = /--+/g;

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  /* We depend on components having unique IDs */
  var identifiers = {};
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : _displayName.replace(escapeRegex, '-') // Replace all possible CSS selectors
    .replace(multiDashRegex, '-'); // Replace multiple -- with single -

    var nr = (identifiers[displayName] || 0) + 1;
    identifiers[displayName] = nr;

    var hash = ComponentStyle.generateName(displayName + nr);
    var componentId = displayName + '-' + hash;
    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (warnTooManyClasses !== undefined) warnTooManyClasses(className);

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? options.displayName + '-' + options.componentId : componentId;

    var warnTooManyClasses = void 0;
    if (process.env.NODE_ENV !== 'production') {
      warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : getComponentName(tag));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.warnTooManyClasses = warnTooManyClasses;
    StyledComponent.target = target;


    return StyledComponent;
  };

  return createStyledComponent;
});

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder = process.env.NODE_ENV !== 'production' ? '.' + componentId + ' {}' : '';
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
});

//      
var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
});

//      


var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs) }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var isStyledComponent$$1 = isStyledComponent(Component$$1);

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component$$1, _extends({
        theme: theme
      }, this.props, {
        innerRef: isStyledComponent$$1 ? innerRef : undefined,
        ref: isStyledComponent$$1 ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["b"] = (styled);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture_Picture___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loaders___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loaders__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__albumContainer_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__albumContainer_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_loaders_css_src_animations_ball_grid_pulse_scss__);
var _dec, _class;









let AlbumContainer = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux_es_connect_connect__["a" /* default */])(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums
}), {
    fetchAlbums: __WEBPACK_IMPORTED_MODULE_3__actions_albumActions__["d" /* fetchAlbums */]
}), _dec(_class = class AlbumContainer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    render() {
        if (!this.props.albums) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_loaders___default.a, { type: "ball-grid-pulse", innerClassName: "Data_loader" });
        const pictures = this.props.albums.map(album => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__picture_Picture__["default"], { key: album._id,
            animation: "fade",
            album: album
        }));
        return pictures;
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (AlbumContainer);

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (129:20)\n\n\u001b[0m \u001b[90m 127 | \u001b[39m                    \u001b[90m//      src={main.src}\u001b[39m\n \u001b[90m 128 | \u001b[39m                    \u001b[90m//      alt=\"something wrong happens\"/>}\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 129 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m'overlay'\u001b[39m}\u001b[33m>\u001b[39m\n \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 130 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m`overlay_top`\u001b[39m}\u001b[33m>\u001b[39m\n \u001b[90m 131 | \u001b[39m                            \u001b[33m<\u001b[39m\u001b[33mMagnifierIcon\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 132 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 196:
false,

/***/ 197:
false,

/***/ 198:
false,

/***/ 199:
false,

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(105);
/* unused harmony reexport HashRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(59);
/* unused harmony reexport Link */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(107);
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(113);
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(115);
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(30);
/* unused harmony reexport Router */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(121);
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(125);
/* unused harmony reexport matchPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(63);
/* unused harmony reexport withRouter */



























/***/ }),

/***/ 200:
false,

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EditCanvas__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__constants_styles__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;













const routesModule = __webpack_require__(25);

let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["g" /* saveFotoDescription */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["f" /* saveAlbumDescription */],
    deleteAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["b" /* deleteAlbum */],
    saveItemsOrder: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["h" /* saveItemsOrder */]
}), _dec(_class = class EditAlbum extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragStarted: false,
            dragFrom: null,
            dragFromEl: null,
            dragObj: null,
            openPicture: null,
            openedAlbum: false,
            album: null,
            openedDialog: false,
            imageDownloaded: false
        };
    }

    componentDidMount() {
        this.loadAlbum();
    }

    loadAlbum() {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doGet(routesModule.routes.GET_ALBUM(this.props.match.params.id)).then(result => {
            result.images.sort((x, y) => x.order - y.order);
            result.images.forEach(image => image.src = image.src + '?forceUpdate=' + new Date().toISOString());
            this.setState({ album: result });
        });
    }

    openDetails(picture) {
        this.setState({ openPicture: picture });
    }

    openAlbumDetails() {
        this.setState({ openedAlbum: true });
    }

    onCrossClick() {
        this.setState({ openPicture: null, openedAlbum: false });
    }

    deleteItem(picture) {
        if (this.state.album.images.length == 1) {
            this.setState({ openedDialog: true });
            return;
        }

        this.props.deleteFotoFromAlbum(picture._id);
        const newPictures = this.state.album.images.filter(p => p._id != picture._id);
        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum });
    }

    removeAlbum() {
        this.props.deleteAlbum(this.state.album._id);
        this.props.history.push('/');
    }

    changeState(obj) {
        this.setState(obj);
    }

    saveFotoDescription(picture) {
        const newPictures = [...this.state.album.images];
        const editedPicture = this.state.album.images.find(p => p._id == picture._id);
        if (this.pinput.value) editedPicture.name = this.pinput.value;
        if (this.ptextarea.value) editedPicture.text = this.ptextarea.value;

        this.props.saveFotoDescription(this.state.album._id, editedPicture);

        const newAlbum = Object.assign({}, _extends({}, this.state.album, {
            images: newPictures
        }));
        this.setState({ album: newAlbum, openPicture: null });
    }

    saveAlbumDescription() {
        const editedAlbum = Object.assign({}, _extends({}, this.state.album));
        if (this.ainput.value) editedAlbum.name = this.ainput.value;
        if (this.atextarea.value) editedAlbum.description = this.atextarea.value;

        this.props.saveAlbumDescription(editedAlbum);

        this.setState({ album: editedAlbum, openedAlbum: false });
    }

    uploadFile(file) {
        __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
            if (Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(downloadedFoto.src)) {
                __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: this.state.album._id
                }).then(result => {
                    const newPictures = [...this.state.album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, this.state.album, {
                        images: newPictures
                    }));

                    this.setState({
                        //imageDownloaded: null,
                        album: newAlbum
                    });
                });
            } else {
                this.setState({
                    imageDownloaded: downloadedFoto.src
                });
            }
        });
    }

    renderEditAlbumCard() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_album_card', key: 'edit_album_card' },
            Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.album.images[0].src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { className: 'album_image',
                    height: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_height"],
                    width: __WEBPACK_IMPORTED_MODULE_11__constants_styles__["picture_edit_width"],
                    controls: 'controls' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: this.state.album.images[0].src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image', src: this.state.album.images[0].src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'album_name', onClick: () => this.openAlbumDetails() },
                this.state.album.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.setState({ openedDialog: true }) })
        );
    }

    renderImages() {
        return this.state.album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
            key: p._id,
            picture: p,
            pictures: this.state.album.images,
            openDetails: p => this.openDetails(p),
            deleteItem: p => this.deleteItem(p),
            replaceImage: target => this.replaceImage(target),
            openPicture: this.state.openPicture,
            changeDragState: obj => this.changeState(obj),
            dragState: this.state,
            updateOrder: album => this.props.saveItemsOrder(album),
            loadAlbum: () => this.loadAlbum()
        }));
    }

    renderFileInput() {
        return !this.state.imageDownloaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'edit_file_input',
            disabled: this.state.openPicture,
            label: 'Choose new foto',
            uploadFile: file => this.uploadFile(file)
        });
    }

    renderEditCanvas() {
        return this.state.imageDownloaded && !Object(__WEBPACK_IMPORTED_MODULE_10__utils_index__["a" /* isVideo */])(this.state.imageDownloaded) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__EditCanvas__["a" /* default */], {
            image: this.state.imageDownloaded,
            cleanImage: obj => this.changeState(obj),
            album: this.state.album
        });
    }

    renderChangeFotoTextInfoDialog() {
        return this.state.openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter foto name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(this.state.openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.openPicture.text, ref: t => this.ptextarea = t })
            )
        );
    }

    renderChangeAlbumTextInfoDialog() {
        return this.state.openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'new_text_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'new_text_caption' },
                    'Enter album name and description:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: this.state.album.description, ref: t => this.atextarea = t })
            )
        );
    }

    renderDeleteDialog() {
        return this.state.openedDialog && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__["a" /* default */], { onClick: () => this.removeAlbum(),
            onClose: () => this.setState({ openedDialog: false }),
            text: 'Do you really want to delete the album?' });
    }

    render() {
        const { album } = this.state;
        if (!album) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
            null,
            this.renderEditAlbumCard(),
            this.renderImages(),
            this.renderFileInput(),
            this.renderEditCanvas(),
            this.renderChangeFotoTextInfoDialog(),
            this.renderChangeAlbumTextInfoDialog(),
            this.renderDeleteDialog()
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







let Card = class Card extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.replaceEvent = 'replace';
    }

    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener(this.replaceEvent, e => this.replaceImage(e.target));
            document.body.addEventListener('mouseup', e => this.onUpBody(e));
        }
    }

    onUpBody(e) {
        const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY).parentElement;
        if (!elementAtPoint.classList.contains('drag_container')) {
            this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null });
        }
    }

    replaceImage(target) {
        const attr = target.getAttribute('imgid');
        const picture = this.props.pictures.find(p => p._id == attr);

        this.changePictureAndClear(picture);
    }

    onMouseDown(e, picture) {
        e.preventDefault();

        const target = e.target.parentElement;

        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        const style = target.currentStyle || window.getComputedStyle(target);

        const elStartLeft = parseInt(style.left, 10);
        const elStartTop = parseInt(style.top, 10);
        const dragObj = {
            x, y, elStartLeft, elStartTop
        };
        target.style.zIndex = 10;
        this.props.changeDragState({ dragStarted: true, dragFrom: picture, dragObj, dragFromEl: target });
        target.style.zIndex = 10;
    }

    onMouseMove(e, picture) {
        e.preventDefault();
        const { dragFrom, dragStarted, dragObj } = this.props.dragState;
        const target = e.target.parentElement;
        if (dragStarted && dragFrom == picture) {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            target.style.top = dragObj.elStartTop + y - dragObj.y + 'px';
            target.style.left = dragObj.elStartLeft + x - dragObj.x + 'px';
        }
    }

    onMouseUp(e, picture) {
        e.preventDefault();

        const { dragFrom, dragFromEl } = this.props.dragState;
        const target = e.target.parentElement;

        if (!dragFromEl) {
            return;
        }

        dragFromEl.style.top = '0px';
        dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        dragFromEl.style.zIndex = 0;

        if (picture == dragFrom) {
            const event = new Event(this.replaceEvent);
            const elementAtPoint = document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY).parentElement;
            if (elementAtPoint.classList.contains('drag_container')) {
                elementAtPoint.dispatchEvent(event);
            } else {
                this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null });
            }

            return;
        }

        this.changePictureAndClear(picture);
    }

    changePictureAndClear(picture) {
        const { dragFrom, album } = this.props.dragState;

        const newPictures = [...album.images];

        const dragToPicture = album.images.find(p => p._id == picture._id);
        // editedPicture.order = prevOrder;
        const dragFromPicture = album.images.find(p => p._id == dragFrom._id);

        const prevOrder = dragFromPicture.order;
        dragFromPicture.order = dragToPicture.order;
        dragToPicture.order = prevOrder;

        newPictures.sort((x, y) => x.order - y.order);

        const newAlbum = Object.assign({}, _extends({}, album, {
            images: newPictures
        }));

        this.props.updateOrder(newAlbum);
        this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null, album: newAlbum });
    }

    render() {
        const { picture, openPicture } = this.props;
        return openPicture ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                imgid: picture._id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image',
                src: picture.src,
                draggable: false })
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                ref: r => this.dragContainer = r,
                imgid: picture._id,
                draggable: true,
                onMouseDown: e => this.onMouseDown(e, picture),
                onMouseUp: e => this.onMouseUp(e, picture),
                onMouseMove: e => this.onMouseMove(e, picture) },
            Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* isVideo */])(picture.src) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { height: __WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"],
                    controls: 'controls',
                    className: 'drag_image' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: picture.src })
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image', src: picture.src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.props.deleteItem(picture) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* EditIcon */], { className: 'edit_icon', onClick: () => this.props.openDetails(picture) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text_description', onClick: () => this.props.openDetails(picture) },
                picture.name
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dialog_less__);




let Dialog = class Dialog extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Dialog' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["a" /* CrossIcon */], { className: 'cross', onClick: this.props.onClose }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'Dialog_text' },
                this.props.text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'Dialog_ok_button', onClick: this.props.onClick },
                'ok'
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editCanvas_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editCanvas_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRotater__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__constants_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






const routesModule = __webpack_require__(25);


let EditCanvas = class EditCanvas extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            width: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_width"]),
            height: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"])
        };
    }

    getEditedImage() {
        const { album, image } = this.props;
        this.avatar.getImage().toBlob(img => {
            let name = image.split('/');
            name = name[name.length - 1];
            const file = new File([img], name);

            __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].sendFile(routesModule.routes.UPLOAD_FOTO, file).then(downloadedFoto => {
                __WEBPACK_IMPORTED_MODULE_5__HttpService__["a" /* default */].doPost(routesModule.routes.FOTO_ROUTE, {
                    src: downloadedFoto.src,
                    album: album._id
                }).then(result => {
                    const newPictures = [...album.images];
                    newPictures.push(result);
                    const newAlbum = Object.assign({}, _extends({}, album, {
                        images: newPictures
                    }));

                    this.props.cleanImage({
                        imageDownloaded: null,
                        album: newAlbum
                    });
                });
            });
        });
    }

    rotateImage() {
        const newAngle = this.state.angle + 90;
        this.calculateParameters(newAngle);
    }

    calculateParameters(newAngle) {
        const newState = {
            height: parseInt(__WEBPACK_IMPORTED_MODULE_4__constants_styles__["picture_edit_height"]),
            angle: newAngle
        };
        newState.width = newAngle % 180 == 0 ? parseInt(this.naturalWidth * this.state.height / this.naturalHeight) : parseInt(this.naturalHeight * this.state.height / this.naturalWidth);
        this.setState(newState);
    }

    onLoad(imgInfo) {
        this.naturalWidth = imgInfo.naturalWidth;
        this.naturalHeight = imgInfo.naturalHeight;

        this.calculateParameters(this.state.angle);
    }

    closeImage() {
        this.props.cleanImage({ imageDownloaded: false });
    }

    render() {
        const { image } = this.props;
        const { angle, width, height } = this.state;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'Edit_canvas' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageRotater__["a" /* default */], {
                ref: ae => this.avatar = ae,
                image: image,
                rotate: angle,
                width: width,
                height: height,
                onLoadSuccess: imgInfo => this.onLoad(imgInfo)
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["d" /* RotateIcon */], { className: 'rotate_icon', onClick: () => this.rotateImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["e" /* SaveIcon */], { className: 'save_icon', onClick: () => this.getEditedImage() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.closeImage() })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (EditCanvas);

/***/ }),

/***/ 222:
false,

/***/ 223:
false,

/***/ 40:
false,

/***/ 41:
false,

/***/ 42:
false,

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fileInput_less__);




let FileInput = class FileInput extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    onChange({ target }) {
        this.setState({
            file: target.files[0]
        });
        this.props.uploadFile(target.files[0]);
    }

    render() {
        const classNames = this.props.className ? `file_input_wrapper ${this.props.className}` : 'file_input_wrapper';
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: classNames },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                null,
                this.props.label
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'file_input_area' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icons__["c" /* MagnifierIcon */], { className: 'magnify_icon' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file', disabled: this.props.disabled || false,
                onChange: e => this.onChange(e) })
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (FileInput);

/***/ }),

/***/ 82:
false,

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_themes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__constants_themes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FotoSlider__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Store_js__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_less__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__main_less__);












__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ThemeProvider */],
    { theme: __WEBPACK_IMPORTED_MODULE_3__constants_themes___default.a },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_redux__["a" /* Provider */],
        { store: __WEBPACK_IMPORTED_MODULE_7__Store_js__["a" /* default */] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* BrowserRouter */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_FotoSlider__["a" /* default */], null)
        )
    )
), document.getElementById('mount'));

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg__);









const Icon = `
        width: 1rem;
        height: 1rem;
        fill: ${props => props.theme.text};
        
        &:hover {
            cursor: pointer;
            fill: ${props => props.theme.content};
        }
`;

const LeftArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_1__svg_left_arrow_svg___default.a)`
  ${Icon}
`;
/* unused harmony export LeftArrowIcon */


const RightArrowIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__svg_right_arrow_svg___default.a)`
  ${Icon}
`;
/* unused harmony export RightArrowIcon */


const MagnifierIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_3__svg_magnifier_svg___default.a)`
   width: 3rem;
   height: 3rem;
   fill: rgba(255,255,255, 0.7);
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = MagnifierIcon;


const CrossIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_4__svg_cancel_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = CrossIcon;


const EditIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__svg_edit_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = EditIcon;


const SaveIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_6__svg_save_file_option_svg___default.a)`
   ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = SaveIcon;


const RotateIcon = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_7__svg_rotate_option_svg___default.a)`
    ${Icon}
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = RotateIcon;


/***/ })

})
//# sourceMappingURL=0.2f6d030d807bba2d7004.hot-update.js.map