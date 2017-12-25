import * as types from '../constants/ActionTypes';
import http from '../HttpService';
const routes = require('../constants/routes');

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
            .doGet(routes.routes.GET_ALBUMS)
            .then(result => dispatch(setAlbums(result)));
    }
}