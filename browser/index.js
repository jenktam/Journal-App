import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './containers/MainContainer';

import {Provider} from 'react-redux';
import store from './redux';

ReactDOM.render(
  <Provider store={store} >
    <MainContainer />
  </Provider>,
  document.getElementById('app')
)
