export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ('ADD_TO_CART'):
            console.log(action)
            return [...action.payload];
        default:
            return state;
    }
}