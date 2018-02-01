import React from 'react';
import Header from "./Header";
import AddNewAlbum from "./newAlbum/AddNewAlbum";
import AlbumContainer from "./AlbumContainer";
import {Route, Switch} from "react-router-dom";
import EditAlbum from "./editAlbum/EditAlbum";
import { Scrollbars } from 'react-custom-scrollbars';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import connect from "react-redux/es/connect/connect";
import {fetchAlbums} from "../actions/albumActions";

@connect(store => ({}), {
    fetchAlbums
})
class FotoSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAlbumModal: false,
            width: 0,
            height: 0
        }
        props.fetchAlbums();
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
            [<Scrollbars
                key="scrollbars"
                className="scroll_bar"
                hideTracksWhenNotNeeded={true}
                ref={(scrollbars) => this.scrollbars = scrollbars}>
            <Content/>
        </Scrollbars>,<Alert stack={{limit: 6}}
                             key="alert"
                             effect='scale'
                             timeout={5000}
                             position='top-right'
                             beep={{
                // info: '/path-to-audio/file-info.mp3',
                 error: '../sounds/Sound_error.mp3',
                // warning: '/path-to-audio/file-warning.mp3',
                 success: '../sounds/Sound_success.mp3'}}
            />]
    }
}

export default FotoSlider;