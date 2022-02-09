import { productsList } from '../../servises/productsList'



export const getAllProducts = () => {
    return async dispatch => {
        // const { data } = await getAllMovies();
        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}


//sortvalue is parameter to this func //
export const sortProductsBy = (sortValue) => {
    return async(dispatch, getState) => {
        const products = [...getState().products]

        return await dispatch({
            type: 'SORT_PRODUCTS_BY',
            payload: {
                sortValue,
                //filter array 
                sortedProducts: products.filter((p) => p.mostPopular === false)
                    //now render sortProductBy instead of all products//
            }
        })
    }
}


//  export const sortProductsBy = (e) => {
//      return async dispatch => {
//          return await dispatch({
//             type: 'SORT_PRODUCTS_BY',
//            payload: {
//                sortValue: e.target.value,
// sortedItems: products.filter((a) => a.sortValue === true)
//         }

//        })
//     }
// }






// export const getAllProducts =  => {
//     return async(dispatch, getState) => {
//         const products = [...getState().products]
//         await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productslist.products })
//     }
// }