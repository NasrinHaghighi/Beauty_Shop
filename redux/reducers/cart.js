const cart = [

]


export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ('ADD_TO_CART'):
            return [...action.payload];
        case ('TOGGLE-AMOUNT-CART'):
            console.log('to')
            return [...action.payload];
        default:
            return state;
    }
}