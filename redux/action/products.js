import { productsList } from '../../servises/productsList'


export const getAllProducts = () => {
    return async dispatch => {
        // const { data } = await getAllMovies();
        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}







// export const getAllProducts =  => {
//     return async(dispatch, getState) => {
//         const products = [...getState().products]
//         await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productslist.products })
//     }
// }