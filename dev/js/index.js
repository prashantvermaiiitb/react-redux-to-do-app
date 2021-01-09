import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import allReducers from './reducers'

import {Provider} from 'react-redux';

import App from './component';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);