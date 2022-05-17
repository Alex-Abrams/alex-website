import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';
import FrontPage from './front_page/front_page';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <FrontPage />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root );
});
