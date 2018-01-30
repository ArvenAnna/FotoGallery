webpackHotUpdate(0,{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editAlbum_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editAlbum_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icons__ = __webpack_require__(10);




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
        const picture = this.props.pictures.find(p => p.id == attr);

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
        const { dragFrom } = this.props.dragState;
        this.props.changeDragState({ dragStarted: false, dragFrom: null, dragObj: null, dragFromEl: null });

        const prevOrder = dragFrom.order;
        dragFrom.order = picture.order;
        picture.order = prevOrder;
    }

    render() {
        const { picture, isTextOpen } = this.props;
        return isTextOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                imgid: picture.id },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image',
                src: picture.src,
                draggable: false })
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'drag_container',
                ref: r => this.dragContainer = r,
                imgid: picture.id,
                draggable: true,
                onMouseDown: e => this.onMouseDown(e, picture),
                onMouseUp: e => this.onMouseUp(e, picture),
                onMouseMove: e => this.onMouseMove(e, picture) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'drag_image', src: picture.src }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["a" /* CrossIcon */], { className: 'cross_icon', onClick: () => this.props.deleteItem(picture) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icons__["b" /* EditIcon */], { className: 'edit_icon', onClick: this.props.openDetails }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'text_description' },
                'bla bla'
            )
        );
    }
};


/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".edit_container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 2rem;\n  position: relative;\n}\n.edit_container .drag_container {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n  z-index: 0;\n}\n.edit_container .drag_container:first-of-type {\n  box-shadow: 0 0 0.3rem 0.1rem white;\n}\n.edit_container .drag_container .cross_icon,\n.edit_container .drag_container .edit_icon {\n  position: absolute;\n  fill: white;\n  width: 1rem;\n  height: 1rem;\n  top: 0.2rem;\n}\n.edit_container .drag_container .cross_icon {\n  right: 0.2rem;\n}\n.edit_container .drag_container .edit_icon {\n  right: 1.5rem;\n}\n.edit_container .drag_container .text_description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.edit_container .drag_image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.edit_container .file_input_wrapper {\n  width: 300px;\n  height: 200px;\n  margin: 0.5rem;\n}\n.edit_container .new_text {\n  position: absolute;\n  width: 70%;\n  height: 50%;\n}\n.edit_container .new_text .save_icon,\n.edit_container .new_text .cross_icon {\n  position: absolute;\n  fill: white;\n  width: 2rem;\n  height: 2rem;\n  top: -2.2rem;\n}\n.edit_container .new_text .cross_icon {\n  right: 0;\n}\n.edit_container .new_text .save_icon {\n  right: 3rem;\n}\n.edit_container .new_text textarea,\n.edit_container .new_text input {\n  background-color: #232326;\n  border-radius: 0.3rem;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n  line-height: 2rem;\n  border: white solid 1px;\n  overflow-x: hidden;\n  resize: none;\n  width: 100%;\n}\n.edit_container .new_text textarea:focus,\n.edit_container .new_text input:focus {\n  outline: none;\n  background-color: #54545b;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.cc2009b9b643c6308047.hot-update.js.map