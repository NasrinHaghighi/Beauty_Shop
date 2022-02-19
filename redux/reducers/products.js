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
    // export const amountReducer = (state = [], action) => {
    //     switch (action.type) {
    //         case 'INCREMENT':
    //             //console.log(action.payload)// it is increasing well
    //             return [...action.payload];
    //         case 'DECREMENT':
    //             return [...action.payload];
    //         default:
    //             return state;
    //     }
    // }
    // export const SelectedColorReducer = (state = '', action) => {
    //     switch (action.type) {
    //         case 'SETCOLOR':
    //             //console.log(action.payload)// it is increasing well
    //             return action.payload;

//         default:
//             return state;
//     }
// }




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