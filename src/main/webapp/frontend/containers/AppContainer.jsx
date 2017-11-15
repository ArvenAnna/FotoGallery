import React from 'react';
import styled from 'styled-components';
import FotoSlider from "../components/FotoSlider.jsx";

const Content = styled.div`
    margin: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 0;
    min-width: 0;
`

class AppContainer extends React.Component {
  render() {
      return (<Content>
        <FotoSlider/>
      </Content>);
  }
}

export default AppContainer;
