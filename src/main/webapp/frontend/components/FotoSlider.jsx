import React from 'react';
import Header from "./Header";
import AddNewAlbum from "./newAlbum/AddNewAlbum";
import AlbumContainer from "./AlbumContainer";
import {Route, Switch} from "react-router-dom";
import EditAlbum from "./editAlbum/EditAlbum";
import { Scrollbars } from 'react-custom-scrollbars';

class FotoSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false,
            width: 0,
            height: 0
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

    componentDidMount() {
        setTimeout(() => this.scrollbars.forceUpdate(), 100);
    }



    render() {

        const Content = () => <div className="app_container">
            {this.state.addAlbumModal && <AddNewAlbum closeModal={() => this.closeModal()}/>}

            <div className="app_page">
                <Header createAlbum={() => this.createAlbum()}/>
                <Switch>
                    <Route exact path='/' component={AlbumContainer}/>
                    <Route path='/edit/:id' component={EditAlbum}/>
                </Switch>
            </div>
        </div>;

        return this.state.addAlbumModal ? <Content/> :
            <Scrollbars
                className="scroll_bar"
                hideTracksWhenNotNeeded={true}
                ref={(scrollbars) => this.scrollbars = scrollbars}>
            <Content/>
        </Scrollbars>
    }
}

export default FotoSlider;