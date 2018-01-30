webpackHotUpdate(0,{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HttpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_avatar_editor__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EditCanvas__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EditCanvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__EditCanvas__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;












const routesModule = __webpack_require__(17);

let EditAlbum = (_dec = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux_es_connect_connect__["a" /* default */])(store => ({}), {
    deleteFotoFromAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["c" /* deleteFotoFromAlbum */],
    saveFotoDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["g" /* saveFotoDescription */],
    saveAlbumDescription: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["f" /* saveAlbumDescription */],
    deleteAlbum: __WEBPACK_IMPORTED_MODULE_7__actions_albumActions__["b" /* deleteAlbum */],
    // fetchAlbums,
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
            this.setState({
                imageDownloaded: downloadedFoto.src
            });

            // http.doPost(routesModule.routes.FOTO_ROUTE, {
            //     src: downloadedFoto.src,
            //     album: this.state.album._id
            // }).then(result => {
            //         const newPictures = [...this.state.album.images];
            //         newPictures.push(result);
            //         const newAlbum = Object.assign({}, {
            //             ...this.state.album,
            //             images: newPictures,
            //         });
            //         this.setState({album: newAlbum});
            //         //this.props.fetchAlbums();
            //     });
        });
    }
    //
    // getEditedImage() {
    //     this.avatar.getImage().toBlob(img => {
    //         let name = this.state.imageDownloaded.split('/');
    //         name = path[path.length - 1];
    //         const file = new File([img], name);
    //         http.sendFile(routesModule.routes.UPLOAD_FOTO, file)
    //             .then(downloadedFoto => {
    //
    //
    //             });
    //     });
    // }

    render() {
        const { openPicture, album, openedAlbum, openedDialog, imageDownloaded } = this.state;
        return album && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'edit_container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'edit_album_card' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'album_image', src: album.images[0].src }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'album_name', onClick: () => this.openAlbumDetails() },
                    album.name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.setState({ openedDialog: true }) })
            ),
            album.images.sort((x, y) => x.order - y.order).map(p => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Card__["a" /* default */], {
                key: p._id,
                picture: p,
                pictures: album.images,
                openDetails: p => this.openDetails(p),
                deleteItem: p => this.deleteItem(p),
                replaceImage: target => this.replaceImage(target),
                openPicture: openPicture,
                changeDragState: obj => this.changeState(obj),
                dragState: this.state,
                updateOrder: album => this.props.saveItemsOrder(album),
                loadAlbum: () => this.loadAlbum()
            })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__fileInput_FileInput__["a" /* default */], { className: 'new_image',
                disabled: openPicture,
                label: 'Choose new foto',
                uploadFile: file => this.uploadFile(file)
            }),
            imageDownloaded && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__EditCanvas__["default"], {
                image: imageDownloaded,
                cleanImage: obj => this.changeState(obj),
                album: album
            }),
            openPicture && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: openPicture.name, ref: i => this.pinput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: openPicture.text, ref: t => this.ptextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveFotoDescription(openPicture) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            ),
            openedAlbum && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'new_text' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: album.name, ref: i => this.ainput = i }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { defaultValue: album.description, ref: t => this.atextarea = t }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["g" /* SaveIcon */], { className: 'save_icon', onClick: () => this.saveAlbumDescription() }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.onCrossClick() })
            ),
            openedDialog && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__dialog_Dialog__["a" /* default */], { onClick: () => this.removeAlbum(),
                onClose: () => this.setState({ openedDialog: false }),
                text: 'Do you really want to delete the album?' })
        );
    }
}) || _class);


/* harmony default export */ __webpack_exports__["a"] = (EditAlbum);

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (62:32)\n\n\u001b[0m \u001b[90m 60 | \u001b[39m                width\u001b[33m=\u001b[39m{\u001b[35m800\u001b[39m}\n \u001b[90m 61 | \u001b[39m                height\u001b[33m=\u001b[39m{\u001b[35m250\u001b[39m}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 62 | \u001b[39m                onLoadSuccess\u001b[33m=\u001b[39m{()}\n \u001b[90m    | \u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 63 | \u001b[39m            \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 64 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mRotateIcon\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m'rotate_icon'\u001b[39m onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mrotateImage()}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 65 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mSaveIcon\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m'save_icon'\u001b[39m onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetEditedImage()}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 188:
false,

/***/ 44:
false,

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(2),__webpack_require__(0),__webpack_require__(46)):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],t):e.AvatarEditor=t(e.PropTypes,e.React,e.ReactDOM)}(this,function(e,t,o){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var r=function(e){var t="undefined"==typeof DOMParser?null:new DOMParser;return t?t.parseFromString(e,"text/html"):null},s=function(e,t){for(var o=0;o<e.length;o++){var a=e[o];if("text/html"===a.type){a.getAsString(function(e){var o=r(e).querySelector("img");o&&o.src&&t(o.src)});break}}},h=function(){function e(e,t){var o=[],a=!0,n=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw i}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),d=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),p="undefined"!=typeof File,l={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",drop:"onTouchEnd",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",drop:"touchend",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",drop:"onDrop",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",drop:"drop",move:"mousemove",up:"mouseup"}}},g=d?l.touch:l.desktop,m="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,v=function(e,t,o,a,n,i){if(0===i)e.rect(t,o,a,n);else{var r=a-i,s=n-i;e.translate(t,o),e.arc(i,i,i,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,i,i,1.5*Math.PI,2*Math.PI),e.lineTo(a,s),e.arc(r,s,i,2*Math.PI,.5*Math.PI),e.lineTo(i,n),e.arc(i,s,i,.5*Math.PI,Math.PI),e.translate(-t,-o)}},f=function(e){function r(){var e,t,o,i;a(this,r);for(var h=arguments.length,c=Array(h),d=0;d<h;d++)c[d]=arguments[d];return t=o=n(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(c))),o.state={drag:!1,my:null,mx:null,image:{x:.5,y:.5}},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null})},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp())},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,a=e.targetTouches?e.targetTouches[0].pageY:e.clientY,n={mx:t,my:a},i=o.props.rotate;if(i%=360,i=i<0?i+360:i,o.state.mx&&o.state.my){var r=o.state.mx-t,s=o.state.my-a,h=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),p=d.x,l=d.y;p*=h,l*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(i)),v=Math.sin(g(i)),f=l+-r*v+s*m,y={x:(p+r*m+s*v)/h+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),n.image=u({},o.state.image,y)}o.setState(n),o.props.onMouseMove(e)}},o.handleDragOver=function(e){(e=e||window.event).preventDefault()},o.handleDrop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;if(e.stopPropagation(),e.preventDefault(),e.dataTransfer){var t=e.dataTransfer,a=t.files,n=t.items;a&&a.length?(o.props.onDropFile(e),o.loadImageFile(a[0])):n&&n.length&&s(n,function(e){return o.loadImage(e)})}},o.setCanvas=function(e){o.canvas=e},i=t,n(o,i)}return i(r,t.Component),c(r,[{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,a=e.rotate,n=e.border,i={},r=this.getBorders(n),s=h(r,2),u=s[0],c=s[1],d=t,p=o;return this.isVertical()?(i.width=p,i.height=d):(i.width=d,i.height=p),i.width+=2*u,i.height+=2*c,{canvas:i,rotate:a,width:t,height:o,border:n}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var a=o.getContext("2d");return a.translate(o.width/2,o.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-o.width/2,-o.height/2),this.isVertical()&&a.translate((o.width-o.height)/2,(o.height-o.width)/2),a.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,a=document.createElement("canvas");return this.isVertical()?(a.width=o,a.height=t):(a.width=t,a.height=o),this.paintImage(a.getContext("2d"),this.state.image,0,1),a}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-o/2,width:t,height:o},n=0,i=1-a.width,r=0,s=1-a.height;return(t>1||o>1)&&(n=-a.width,i=1,r=-a.height,s=1),u({},a,{x:Math.max(n,Math.min(a.x,i)),y:Math.max(r,Math.min(a.y,s))})}},{key:"isDataURL",value:function(e){if(null===e)return!1;var t=/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;return!!e.match(t)}},{key:"loadImage",value:function(e){p&&e instanceof File?this.loadImageFile(e):"string"==typeof e&&this.loadImageURL(e)}},{key:"loadImageURL",value:function(e){var t=new Image;t.onload=this.handleImageReady.bind(this,t),t.onerror=this.props.onLoadFailure,!this.isDataURL(e)&&this.props.crossOrigin&&(t.crossOrigin=this.props.crossOrigin),t.src=e}},{key:"loadImageFile",value:function(e){var t=this,o=new FileReader;o.onload=function(e){return t.loadImageURL(e.target.result)},o.readAsDataURL(e)}},{key:"componentDidMount",value:function(){var e=o.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=g.native;document.addEventListener(t.move,this.handleMouseMove,!1),document.addEventListener(t.up,this.handleMouseUp,!1),d&&(document.addEventListener(t.mouseMove,this.handleMouseMove,!1),document.addEventListener(t.mouseUp,this.handleMouseUp,!1))}}},{key:"componentWillUnmount",value:function(){if(document){var e=g.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),d&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"componentDidUpdate",value:function(e,t){var a=o.findDOMNode(this.canvas),n=a.getContext("2d");n.clearRect(0,0,a.width,a.height),this.paint(n),this.paintImage(n,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:"handleImageReady",value:function(e){var t=this.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,this.setState({drag:!1,image:t},this.props.onImageReady),this.props.onLoadSuccess(t)}},{key:"getInitialSize",value:function(e,t){var o=void 0,a=void 0,n=this.getDimensions();return n.height/n.width>t/e?a=e*((o=this.getDimensions().height)/t):o=t*((a=this.getDimensions().width)/e),{height:o,width:a}}},{key:"componentWillReceiveProps",value:function(e){(e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height)&&this.loadImage(e.image)}},{key:"paintImage",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;if(t.resource){var n=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(a,a),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,n.x,n.y,n.width,n.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),a=h(o,2),n=a[0],i=a[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=i,d+=n):(c+=n,d+=i),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(m,m),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),a=this.getBorders(o.border),n=h(a,2),i=n[0],r=n[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-i,s/2-r),e.beginPath(),v(e,i,r,u-2*i,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.getDimensions(),o={width:e.canvas.width,height:e.canvas.height,cursor:this.state.drag?"grabbing":"grab"},a={width:e.canvas.width*m,height:e.canvas.height*m,style:u({},o,this.props.style)};return a[g.react.down]=this.handleMouseDown,a[g.react.drag]=this.handleDragOver,this.props.disableDrop||(a[g.react.drop]=this.handleDrop),d&&(a[g.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",u({ref:this.setCanvas},a))}}]),r}();return f.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(p?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),onDropFile:e.func,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableDrop:e.bool},f.defaultProps={disableDrop:!1,scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},onDropFile:function(){},onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){}},f});
//# sourceMappingURL=index.js.map


/***/ })

})
//# sourceMappingURL=0.8e9e7fc179b6d2f31147.hot-update.js.map