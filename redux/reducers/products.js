export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case ('GET_ALL_PRODUCTS'):
            return [...action.payload];

        default:
            return state;
    }
}
export const sortReducer = (state = '', action) => {
    switch (action.type) {
        case ('SORT_PRODUCTS_BY'):
            return action.payload;
        default:
            return state;
    }
}
export const amountReducer = (state = 1, action) => {
    switch (action.type) {
        case ('INCREMENT'):
            return action.payload;
        case ('DECREMENT'):
            return action.payload;
        default:
            return state;
    }
}




// case ('SORT_PRODUCTS_BY'):
//     return {...state, sortedItem: action.payload.sortedItems, sortValue: action.payload.sortValue };


// export const productsReducer = (state = [], action) => {
//     switch (action.type) {
//         case ('GET_ALL_PRODUCTS'):
//             return [...action.payload];
//         default:
//             return state;
//     }
// }