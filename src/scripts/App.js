'use strict';

var redux = require('redux');
var reducer = require('./reducers/index');
var store = redux.createStore(reducer);

console.log('return default state: ', store.getState());

store.dispatch({
    type: 'SELECTED_PRODUCT',
    product: {
        id: '004',
        desc: 'Apple'
    }
});

console.log('product was added: ', store.getState());

store.dispatch({
    type: 'SELECTED_PRODUCT_ID',
    id: '004'
});

console.log('product id: ', store.getState());
