import React from 'react';
import styled from 'styled-components';
import Picture from "./picture/Picture";
import Header from "./Header";
import {CrossIcon} from "./Icons";

const Page = styled.div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Content = styled.div`
  background-color: black;
`

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

const AddAlbum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
`

const AlbumModal = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Label = styled.span`
  width: 100%;
  margin-bottom: 0.25rem;
`

const Ok = styled.button`
    width: 10rem;
    color: white;
    background-color: #232326;
    height: 2rem;
    font-size: 1rem;
    border-width: 3px;
    border-radius: 0.3rem;

`



class FotoSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addAlbumModal: false
    }
  }

  createAlbum() {
    this.setState({
      addAlbumModal: true
    });
  }

  closeModal() {
    this.setState({
      addAlbumModal: false
    });
  }

  render () {
  return (
    <Page>
      {this.state.addAlbumModal && <AddAlbum>
        <AlbumModal>
          <CrossIcon onClick={() => this.closeModal()}/>
          <Label>Name</Label>
          <input/>
          <Label>Title image:</Label>
          <input type="file"/>
          <Label>Description</Label>
          <textarea/>
          <Ok>ok</Ok>
        </AlbumModal>
      </AddAlbum>}

    <Content>
      <Header createAlbum={() => this.createAlbum()}/>

      <Container>
        <Picture src='/foto/download.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/images.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/5b405dc14959cd421a7579261b5ee261--awesome-pictures-colorful-pictures.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/images.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/download.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/images.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>
        <Picture src='/foto/download.jpg' animation='fade' images={['/foto/images.jpg', '/foto/download.jpg']}/>

      </Container>

    </Content>
    </Page>


  );
}
}

export default FotoSlider;