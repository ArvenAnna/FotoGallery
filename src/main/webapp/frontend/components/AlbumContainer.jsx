import React from 'react';
import styled from 'styled-components';
import Picture from "./picture/Picture";
import connect from "react-redux/es/connect/connect";
import {fetchAlbums} from "../actions/albumActions";

// overrides picture styles
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  &>div {
     padding: 1rem;
        
     .image {
        height: 15rem;
        width: 20rem;
        object-fit: cover;
      }

      .image_wrapper .overlay .overlay_bottom_text {
         font-size: 1rem;
      }
  }
`
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
        return (
            <Container>
                {this.props.albums.map(album => <Picture key={album._id}
                                                         animation='fade'
                                                         album={album}
                />)}

            </Container>
        );
    }
}

export default AlbumContainer;