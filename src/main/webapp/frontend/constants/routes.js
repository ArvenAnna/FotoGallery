const apiPrefix = '/api/';

const routes = {
    GET_ALBUMS: `${apiPrefix}albums`,
    GET_ALBUMS_SEARCH: (search) => `${apiPrefix}albums?search=${search}`,

    ALBUM_ROUTE: `${apiPrefix}album`,
    GET_ALBUM: (id) => `${apiPrefix}album?id=${id}`,
    DELETE_ALBUM : (id) => `${apiPrefix}album?id=${id}`,
    UPDATE_ITEMS_ORDER: `${apiPrefix}album/items`,

    FOTO_ROUTE: `${apiPrefix}foto`,
    DELETE_FOTO: (id, album) => `${apiPrefix}foto?album=${album}&id=${id}`,
    UPDATE_FOTO: (album) => `${apiPrefix}foto?album=${album}`,

    UPLOAD_FOTO: `${apiPrefix}upload`

};

exports.routes = routes;

