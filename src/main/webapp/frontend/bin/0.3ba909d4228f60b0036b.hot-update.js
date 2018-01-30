webpackHotUpdate(0,{

/***/ 177:
/***/ (function(module, exports) {

const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: id => `${apiPrefix}album?id=${id}`,

    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`

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
//# sourceMappingURL=0.3ba909d4228f60b0036b.hot-update.js.map