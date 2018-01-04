import * as types from '../constants/ActionTypes';
import http from '../HttpService';
const routesModule = require('../constants/routes');

export function albumsRequest() {
    return {
        type: types.REQ_ALBUMS
    };
}

export function setAlbums(albums) {
    return {
        type: types.SET_ALBUMS,
        albums
    };
}

export function fetchAlbums() {
    return dispatch => {
        dispatch(albumsRequest());
        return http
            .doGet(routesModule.routes.GET_ALBUMS)
            .then(result => dispatch(setAlbums(result)));
    }
}

export function fetchAlbumsBySearch(search) {
    return dispatch => {
        dispatch(albumsRequest());
        return http
            .doGet(routesModule.routes.GET_ALBUMS_SEARCH(search))
            .then(result => dispatch(setAlbums(result)));
    }
}

// export function deleteFotoRequest() {
//     return {
//         type: types.REQ_ALBUMS
//     };
// }

export function deleteFotoFromAlbum(id, album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doDelete(routesModule.routes.DELETE_FOTO(id, album))
            .then(result => dispatch(fetchAlbums()));
    }
}

export function deleteAlbum(id) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doDelete(routesModule.routes.DELETE_ALBUM(id))
            .then(result => dispatch(fetchAlbums()));
    }
}

export function saveFotoDescription(album, image) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPut(routesModule.routes.UPDATE_FOTO(album), image)
            .then(result => dispatch(fetchAlbums()));
    }
}

export function saveAlbumDescription(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPut(routesModule.routes.ALBUM_ROUTE, album)
            .then(result => dispatch(fetchAlbums()));
    }
}

export function createAlbum(album) {
    return dispatch => {
        //dispatch(albumsRequest());
        return http
            .doPost(routesModule.routes.ALBUM_ROUTE, album)
            .then(result => dispatch(fetchAlbums()));
    }
}


