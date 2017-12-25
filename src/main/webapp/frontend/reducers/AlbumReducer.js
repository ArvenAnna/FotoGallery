import {SET_ALBUMS} from "../constants/ActionTypes";

const albums = [];

const albumReducer = (state = albums, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            return action.albums;
        default:
            return state;
    }
}

const AlbumReducer = {
    albums: albumReducer
}

export default AlbumReducer;