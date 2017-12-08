import React from 'react';
import styled from 'styled-components';

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

class Header extends React.Component {



  render () {
    return (
        <HeaderContainer>
          <HeaderMenu>
            <MenuItem onClick={this.props.createAlbum}>new album</MenuItem>
          </HeaderMenu>
          <Search>Search: <input></input></Search>
        </HeaderContainer>
    );
  }
}

export default Header;