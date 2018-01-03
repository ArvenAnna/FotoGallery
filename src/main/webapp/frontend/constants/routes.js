const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: (id) => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM : (id) => `${apiPrefix}album?id=${id}`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    UPDATE_FOTO: (album) => `${apiPrefix}foto?album=${album}`,






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

