import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <ScrollContext>
        <App />
      </ScrollContext>
    </HashRouter>
  </Provider>
);

export default Root;