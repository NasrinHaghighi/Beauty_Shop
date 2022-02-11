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
        const products = getState().products

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
export const increment = () => {
    return async(dispatch, getState) => {
        console.log(getState)
        const amount = getState().amount

        return await dispatch({
            type: 'INCREMENT',
            payload: amount + 1


        })
    }
}

//avoid from negative value???//
export const decrement = () => {
    return async(dispatch, getState) => {
        const amount = getState().amount

        return await dispatch({
            type: 'DECREMENT',
            payload: amount - 1
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