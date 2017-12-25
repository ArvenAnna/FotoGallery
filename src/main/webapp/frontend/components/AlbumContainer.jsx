import React from 'react';
import styled from 'styled-components';
import Picture from "./picture/Picture";

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

class AlbumContainer extends React.Component {

    render() {
        return (
            <Container>
                <Picture src='/foto/download.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/images.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg'
                         editRoute='/edit'
                         animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/images.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/download.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/images.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>
                <Picture src='/foto/download.jpg' animation='fade'
                         editRoute='/edit'
                         images={['/foto/images.jpg', '/foto/download.jpg']}/>

            </Container>
        );
    }
}

export default AlbumContainer;