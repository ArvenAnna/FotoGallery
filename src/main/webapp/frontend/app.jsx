import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import green from './constants/themes';

import {HashRouter} from 'react-router-dom';
import FotoSlider from "./components/FotoSlider";

ReactDOM.render(
  <ThemeProvider theme={green}>
      <HashRouter>
          <FotoSlider/>
      </HashRouter>
  </ThemeProvider>,
  document.getElementById('mount')
)