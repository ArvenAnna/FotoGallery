import * as types from '../constants/ActionTypes';
import http from '../HttpService';
const routesModule = require('../constants/routes');
import Alert from 'react-s-alert';

export const PAGE_ITEMS = 20;

export function albumsRequest() {
    return {
        type: types.REQ_ALBUMS
    };
}

export function setAlbums(result, search = null) {
    return {
        type: types.SET_ALBUMS,
        result: result,
        search
    };
}

export function fetchAlbums(offset, perPage) {
    const pagesOffset = offset | 0;
    const itemsPerPage = perPage | PAGE_ITEMS;
    return dispatch => {
        dispatch(albumsRequest());
        return http
            .doGet(routesModule.routes.GET_ALBUMS_PAGINATE(pagesOffset, itemsPerPage))
            .then(result => dispatch(setAlbums(result)))
            .catch(e => {
                Alert.error(e.response.data.error, {});
                dispatch({type: types.REQ_ALBUMS_ERROR});
            });
    }
}

export function fetchAlbumsBySearch(search, offset, perPage) {
    const pagesOffset = offset | 0;
    const itemsPerPage = perPage | PAGE_ITEMS;
    return dispatch => {
        dispatch(albumsRequest());
        return http
            .doGet(routesModule.routes.GET_ALBUMS_SEARCH(search, pagesOffset, itemsPerPage))
            .then(result => dispatch(setAlbums(result, search)))
            .catch(e => {
                Alert.error(e.response.data.error, {});
                dispatch({type: types.REQ_ALBUMS_ERROR});
            });
    }
}

export function deleteFotoFromAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doDelete(routesModule.routes.DELETE_FOTO(id))
            //.then(result => Alert.success('Foto deleted', {}))
            .catch(e => Alert.error(e.response.data.error, {}));
            //.then(result => dispatch(fetchAlbums()));
    }
}

export function deleteAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doDelete(routesModule.routes.DELETE_ALBUM(id))
            .then(result => {
                Alert.success('Foto deleted', {});
                dispatch(fetchAlbums());
            })
            .catch(e => Alert.error(e.response.data.error, {}));
    }
}

export function saveFotoInformation(image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPut(routesModule.routes.FOTO_ROUTE, image)
            .catch(e => Alert.error(e.response.data.error, {}));
            //.then(result => dispatch(fetchAlbums()));
    }
}

export function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPut(routesModule.routes.ALBUM_ROUTE, album)
            .catch(e => Alert.error(e.response.data.error, {}));
            //.then(result => dispatch(fetchAlbums()));
    }
}

export function saveItemsOrder(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPut(routesModule.routes.UPDATE_ITEMS_ORDER, album)
            .catch(e => Alert.error(e.response.data.error, {}));
            //.then(result => dispatch(fetchAlbums()));
    }
}

export function createAlbum(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPost(routesModule.routes.ALBUM_ROUTE, album)
            .then(result => {
                Alert.success('Album created', {});
                dispatch(fetchAlbums());
            })
            .catch(e => Alert.error(e.response.data.error, {}));
    }
}


