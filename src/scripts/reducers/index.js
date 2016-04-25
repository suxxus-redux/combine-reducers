'use strict';
var redux = require('redux');
var selectedProducts = require('./selected-products');
var selectedProduct = require('./selected-product');

module.exports = redux.combineReducers({
    selected: selectedProducts,
    productId: selectedProduct
});
