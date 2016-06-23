'use strict';

var redux = require('redux');

// -- reducer
var selectedProducts = function(state, action) {

    state = state || [];

    var actions = {
            SELECTED_PRODUCT: function() {
                return state.concat(action.product);
            },
            DEFAULT: function() {
                return state;
            }
        },

        actionType = actions[action.type] || actions.DEFAULT;

    return actionType();
};


var selectedProductId = function(state, action) {

    state = state || '';

    var actions = {
            SELECTED_PRODUCT_ID: function() {
                return action.id;
            },
            DEFAULT: function() {
                return state;
            }
        },

        actionType = actions[action.type] || actions.DEFAULT;

    return actionType();
};


var rootReducer = redux.combineReducers({
    selected: selectedProducts,
    productId: selectedProductId
});

// -- store
var store = redux.createStore(rootReducer);
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
