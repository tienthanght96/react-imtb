import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'antd/dist/antd.css';
import App from './app/App';
import { appStore } from './app/appStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
