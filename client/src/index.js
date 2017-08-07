import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './App'
import './index.css';
import store from './store'
import FirstEmotion from './components/first-emotion'

ReactDOM.render(
  <Provider store={store}>
    <FirstEmotion />
  </Provider>,
  document.getElementById('root')
);
