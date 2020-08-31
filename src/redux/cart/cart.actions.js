import cardActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
    type: cardActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cardActionTypes.ADD_ITEM,
    payload: item
})