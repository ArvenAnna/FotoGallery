webpackHotUpdate(0,{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture_Picture__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icons__ = __webpack_require__(8);






const Page = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  background-color: black;
`;

const Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  
  &>div {
     padding: 1rem;
        
     .image {
        height: 15rem;
        width: 20rem;
        object-fit: cover;
      }
  
  
        .image_wrapper .overlay .overlay_bottom_text {
            font-size: 1rem;
        }
  }
  
`;

const AddAlbum = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
`;

const AlbumModal = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].span`
  width: 100%;
`;

let FotoSlider = class FotoSlider extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      addAlbumModal: false
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

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Page,
      null,
      this.state.addAlbumModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        AddAlbum,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          AlbumModal,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Icons__["a" /* CrossIcon */], { onClick: () => this.closeModal() }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Label,
            null,
            'Name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Label,
            null,
            'Title image:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'file' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Label,
            null,
            'Description'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            null,
            'ok'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Content,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { createAlbum: () => this.createAlbum() }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Container,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/images.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__picture_Picture__["a" /* default */], { src: '/foto/download.jpg', animation: 'fade', images: ['/foto/images.jpg', '/foto/download.jpg'] })
        )
      )
    );
  }
};


/* harmony default export */ __webpack_exports__["a"] = (FotoSlider);

/***/ })

})
//# sourceMappingURL=0.5a79f694565dce04b300.hot-update.js.map