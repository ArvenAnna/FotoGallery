import React from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchAlbums, fetchAlbumsBySearch} from "../actions/albumActions";
import withRouter from "react-router-dom/es/withRouter";
import {NavLink} from 'react-router-dom';

@withRouter
@connect(store => ({}), {
    fetchAlbumsBySearch,
    fetchAlbums
})
class Header extends React.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if(e.target.value) {
                this.props.fetchAlbumsBySearch(e.target.value);
            } else {
                this.props.fetchAlbums();
            }
            this.props.history.push('/');
        }
    }

    render() {
        return (
                [<div key="header_menu" className="header_menu">
                    <div className="menu_item" onClick={this.props.createAlbum}>new album</div>
                    <div className="menu_item" onClick={this.props.openMap}>map</div>
                    <div className="menu_item"><NavLink to='/' onClick={this.props.fetchAlbums}>album's list</NavLink></div>
                </div>,
                <div className="search_menu" key="search">Search: <input className="search_input" defaultValue=''
                    onKeyPress={(e) => this.onEnter(e)}/>
                </div>]
        );
    }
}

export default Header;