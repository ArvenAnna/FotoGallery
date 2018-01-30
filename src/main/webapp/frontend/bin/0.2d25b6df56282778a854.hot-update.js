webpackHotUpdate(0,{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpService__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const routesModule = __webpack_require__(17);


let Card = class Card extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

    constructor(props) {
        super(props);
        this.replaceEvent = 'replace';
    }

    componentWillReceiveProps() {
        if (this.dragContainer && !this.replaceAttached) {
            this.replaceAttached = true;
            this.dragContainer.addEventListener(this.replaceEvent, e => this.replaceImage(e.target));
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

        dragFromEl.style.top = '0px';
        dragFromEl.style.left = '0px';

        target.style.top = '0px';
        target.style.left = '0px';

        dragFromEl.style.zIndex = 0;

        if (picture == dragFrom) {
            const event = new Event(this.replaceEvent);
            document.elementFromPoint(e.clientX + window.scrollX, e.clientY + window.scrollY).parentElement.dispatchEvent(event);
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
            this.props.isVideo() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'video',
                { height: '200', controls: 'controls', className: 'drag_video' },
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".edit_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 2rem;\n  position: relative;\n}\n.edit_container .drag_container {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n  z-index: 0;\n}\n.edit_container .drag_container .cross_icon,\n.edit_container .drag_container .edit_icon {\n  position: absolute;\n  fill: white;\n  width: 1rem;\n  height: 1rem;\n  top: 0.2rem;\n}\n.edit_container .drag_container .cross_icon {\n  right: 0.2rem;\n}\n.edit_container .drag_container .edit_icon {\n  right: 1.5rem;\n}\n.edit_container .drag_container .text_description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 0.3rem;\n  font-size: 16px;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n}\n.edit_container .drag_image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.edit_container .drag_video {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n.edit_container .file_input_wrapper {\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n}\n.edit_container .edit_album_card {\n  position: relative;\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n  color: white;\n  box-shadow: 0 0 0.3rem 0.1rem white;\n}\n.edit_container .edit_album_card .album_image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.edit_container .edit_album_card .album_name {\n  position: absolute;\n  bottom: 0.3rem;\n  left: 0.3rem;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.edit_container .edit_album_card .cross_icon {\n  position: absolute;\n  width: 3rem;\n  height: 3rem;\n  fill: white;\n  top: 0.3rem;\n  right: 0.3rem;\n}\n.edit_container .new_text {\n  position: absolute;\n  width: 70%;\n  height: 50%;\n}\n.edit_container .new_text .save_icon,\n.edit_container .new_text .cross_icon {\n  position: absolute;\n  fill: white;\n  width: 2rem;\n  height: 2rem;\n  top: -2.2rem;\n}\n.edit_container .new_text .cross_icon {\n  right: 0;\n}\n.edit_container .new_text .save_icon {\n  right: 3rem;\n}\n.edit_container .new_text textarea,\n.edit_container .new_text input {\n  background-color: #232326;\n  border-radius: 0.3rem;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n  line-height: 2rem;\n  border: white solid 1px;\n  overflow-x: hidden;\n  resize: none;\n  width: 100%;\n}\n.edit_container .new_text textarea:focus,\n.edit_container .new_text input:focus {\n  outline: none;\n  background-color: #54545b;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.2d25b6df56282778a854.hot-update.js.map