import React from 'react';
import styled from 'styled-components';
import connect from "react-redux/es/connect/connect";
import {fetchAlbums, fetchAlbumsBySearch} from "../actions/albumActions";
import withRouter from "react-router-dom/es/withRouter";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 1.2rem;
`

const HeaderMenu = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;

`

const MenuItem = styled.div`
  padding: 1rem;
  cursor: pointer;
`

const Search = styled.div`
  padding: 1rem;
`
@withRouter
@connect(store => ({}), {
    fetchAlbumsBySearch,
    fetchAlbums
})
class Header extends React.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if(e.target.value) this.props.fetchAlbumsBySearch(e.target.value);
            else this.props.fetchAlbums();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderMenu>
                    <MenuItem onClick={this.props.createAlbum}>new album</MenuItem>
                </HeaderMenu>
                <Search>Search: <input defaultValue=''
                    onKeyPress={(e) => this.onEnter(e)}/></Search>
            </HeaderContainer>
        );
    }
}

export default Header;