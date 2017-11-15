import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import './main.less';

import green from './constants/themes';

import AppContainer from './containers/AppContainer.jsx';

ReactDOM.render(
  <ThemeProvider theme={green}>
        <AppContainer/>
  </ThemeProvider>,
  document.getElementById('mount')
)