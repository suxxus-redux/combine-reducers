'use strict';

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

module.exports = selectedProducts;
