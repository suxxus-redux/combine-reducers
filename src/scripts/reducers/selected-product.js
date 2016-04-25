'use strict';

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

module.exports = selectedProductId;
