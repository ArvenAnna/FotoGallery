import React from 'react';
import Picture from "./picture/Picture";
import connect from "react-redux/es/connect/connect";
import {fetchAlbums} from "../actions/albumActions";
import './albumContainer.less';

@connect(store => ({
    albums: store.albums
}), {
    fetchAlbums
})
class AlbumContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    render() {
        const pictures = this.props.albums.map(album => <Picture key={album._id}
                                                                 animation='fade'
                                                                 album={album}
        />);
        return pictures;
    }
}

export default AlbumContainer;