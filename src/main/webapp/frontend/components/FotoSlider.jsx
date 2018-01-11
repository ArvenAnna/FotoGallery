import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import AddNewAlbum from "./newAlbum/AddNewAlbum";
import AlbumContainer from "./AlbumContainer";
import Scroll from "./scroll/Scroll";
import ProgressScroll from "./scroll/ProgressScroll";
import {Route, Switch} from "react-router-dom";
import EditAlbum from "./editAlbum/EditAlbum";
import constants from '../constants/styles';


const Page = styled.div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
   font-size:2rem;
`

const Content = styled.div`
    background-color: black;
    width: 100%;
    box-shadow: 5px 5px 5px 5px ${constants.preview_frame_color};
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
                    <Switch>
                        <Route exact path='/' component={AlbumContainer}/>
                        <Route path='/edit/:id' component={EditAlbum}/>
                    </Switch>
                </Content>
            </Page>

        );
    }
}

export default FotoSlider;