import {REQ_ALBUMS, REQ_ALBUMS_ERROR, SET_ALBUMS} from "../constants/ActionTypes";
import {mode} from "../actions/albumActions";

const albums = [];
const isLoadingAlbums = false;

const albumReducer = (state = albums, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            const sortedAlbums = action.result.albums;
            sortedAlbums.forEach(album => {
                album.images.sort((x, y) => x.order - y.order);
            });
            return sortedAlbums;
        default:
            return state;
    }
}

const loaderReducer = (state = isLoadingAlbums, action) => {
    switch (action.type) {
        case REQ_ALBUMS:
            return true;
        case SET_ALBUMS:
            return false;
        case REQ_ALBUMS_ERROR:
            return false;
        default:
            return state;
    }
}

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return action.result.count;
        default:
            return state;
    }
}

const modeReducer = (state = null, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return action.search;
        default:
            return state;
    }
}

const AlbumReducer = {
    albums: albumReducer,
    isLoadingAlbums: loaderReducer,
    itemCount: countReducer,
    search: modeReducer
}

export default AlbumReducer;