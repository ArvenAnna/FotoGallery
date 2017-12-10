import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import AddNewAlbum from "./AddNewAlbum";
import AlbumContainer from "./AlbumContainer";

const Page = styled.div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Content = styled.div`
    background-color: black;
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

    render() {
        return (
            <Page>
                {this.state.addAlbumModal && <AddNewAlbum closeModal={() => this.closeModal()}/>}
                <Content>
                    <Header createAlbum={() => this.createAlbum()}/>
                    <AlbumContainer/>
                </Content>
            </Page>
        );
    }
}

export default FotoSlider;