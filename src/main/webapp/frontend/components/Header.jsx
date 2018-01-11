import React from 'react';
import styled from 'styled-components';
import connect from "react-redux/es/connect/connect";
import {fetchAlbums, fetchAlbumsBySearch} from "../actions/albumActions";
import withRouter from "react-router-dom/es/withRouter";
import {NavLink} from 'react-router-dom';
import constants from '../constants/styles';

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
  text-shadow: 2px 2px ${constants.shadow_color};
  
  &:hover {
    color: ${constants.shadow_color};
    text-shadow: none;
    a {
        color: ${constants.shadow_color};
    }
  }
  
  a {
    text-decoration: none;
    color: ${constants.text_color};
  }
  
`

const Search = styled.div`
  padding: 1rem;
  text-shadow: 2px 2px ${constants.shadow_color};
  font-size: 1rem;
`

const SearchInput = styled.input`
    background-color: ${constants.body_color};
    color: ${constants.text_color};
    padding-left: 3px;
    
    &:focus {
        outline: none;
        background-color: ${constants.body_color_light};
    }
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
                    <MenuItem><NavLink to='/'>album's list</NavLink></MenuItem>
                </HeaderMenu>
                <Search>Search: <SearchInput defaultValue=''
                    onKeyPress={(e) => this.onEnter(e)}/></Search>
            </HeaderContainer>
        );
    }
}

export default Header;