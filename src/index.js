import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cart from './cart';
import Account from './account';
import App from './App';
import reducers from './reducers';

import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App />
        <div>
          <Switch>
            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
