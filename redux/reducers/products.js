import { Category } from "@material-ui/icons";

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case ('GET_ALL_PRODUCTS'):
            return [...action.payload];
        case ('FILLTER_PRODUCTS'):
            return [...action.payload];
        case ('SORT_PRODUCTS'):
            return [...action.payload];
        case ('CLEAR_ALL_PRODUCTS'):
            return action.payload;
        default:
            return state;
    }
}
const filterOption = {
    selectedBrand: [],
    selectedCategory: [],
    availability: false,
    discont: false,
    minPrice: 100,
    maxPrice: 1000,
}
export const filterOptionReducer = (state = filterOption, action) => {
    switch (action.type) {
        case ('BRAND_OPTION'):
            return action.payload;
        case ('CATEGORY_OPTION'):
            return action.payload;
        case ('MINPRICE_OPTION'):
            return action.payload;
        case ('MAXPRICE_OPTION'):
            return action.payload;
            // case ('AVAILIBILITY_OPTION'):
            //     return action.payload;
            // case ('DISCOT_OPTION'):
            //     return action.payload;
        case ('CLEAR_FILLTER_OPTION'):
            return action.payload;
        default:
            return state;
    }
}







// export const sortReducer = (state = '', action) => {
//         switch (action.type) {
//             case ('SORT_PRODUCTS_BY'):
//                 return action.payload;
//             default:
//                 return state;
//         }
//     }
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