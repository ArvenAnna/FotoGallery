import {SET_ALBUMS} from "../constants/ActionTypes";

const albums = [];

const albumReducer = (state = albums, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            const sortedAlbums = action.albums;
            sortedAlbums.forEach(album => {
                album.images.sort((x, y) => x.order - y.order);
            });
            return sortedAlbums;
        default:
            return state;
    }
}

const AlbumReducer = {
    albums: albumReducer
}

export default AlbumReducer;