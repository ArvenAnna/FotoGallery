webpackHotUpdate(0,{

/***/ 177:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,

    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    FOTO_ROUTE: `${apiPrefix}foto`

    // GET_RECEPTS: (departId) => `/recept_list.req?departId=${departId}`,
    // GET_RECEPT: (receptId) => `/recept.req?receptId=${receptId}`,
    // GET_INGRIDIENTS: '/ing_list.req',
    // GET_TAGS: '/tags.req',
    //
    // POST_INGRIDIENTS: '/ingridient.req',
    // POST_CREATE_RECEPT: '/recept.req',
    //
    // UPLOAD_FILE: '/file.req',
    //
    // IMAGE_CATALOG: '/foto/'
};

exports.routes = routes;

/***/ })

})
//# sourceMappingURL=0.746e88008f881255da13.hot-update.js.map