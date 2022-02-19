const cart = [

]


export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ('ADD_TO_CART'):
            return [...action.payload];
        case ('INCREMENT'):
            console.log('inc')
            return [...action.payload];
        case ('DECREMENT'):
            console.log('dec')
            return [...action.payload];
        default:
            return state;
    }
}