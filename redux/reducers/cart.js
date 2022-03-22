const cart = [

]


export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ('ADD_TO_CART'):
            return [...action.payload];
        case ('TOGGLE-AMOUNT-CART'):
            return [...action.payload];
        case ('REMOVE_ITEM_CART'):
            return [...action.payload];
        default:
            return state;
    }
}
export const totalReducer = (state = '', action) => {
    switch (action.type) {
        case ('CART_TOTAL'):
            return action.payload;
        default:
            return state;
    }
}
export const discontReducer = (state = '', action) => {
    switch (action.type) {
        case ('CART_DISCONT'):
            return action.payload;
        default:
            return state;
    }
}