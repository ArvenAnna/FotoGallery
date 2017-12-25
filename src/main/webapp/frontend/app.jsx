import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import green from './constants/themes';

import {BrowserRouter, HashRouter} from 'react-router-dom';
import FotoSlider from './components/FotoSlider';
import {Provider} from 'react-redux'
import store from './Store.js';
import './main.less';

ReactDOM.render(
  <ThemeProvider theme={green}>
      <Provider store={store}>
      <BrowserRouter>
          <FotoSlider/>
      </BrowserRouter>
      </Provider>
  </ThemeProvider>,
  document.getElementById('mount')
)