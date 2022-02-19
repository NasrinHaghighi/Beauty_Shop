import { productsList } from '../../servises/productsList'
import { cartReducer } from '../reducers/cart'



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
export const increment = (product, amount) => {
    console.log(product, amount)

    return async(dispatch, getState) => {
        const cart = [...getState().cart]

        if (cart) {
            cart.map((item) => {
                if (item.id === product.id) {
                    let newAmount = item.amount + amount
                    return {...item, amount: newAmount }
                } else {
                    return {...item, amount: amount }
                }
            })
        } else {
            cart.push({...product, amount: 2 })
        }

        return await dispatch({
            type: 'INCREMENT',
            payload: cart
        })
    }
}

//avoid from negative value???//
export const decrement = (id) => {

    return async(dispatch, getState) => {

        const cart = [...getState().cart]
        let tempCart = cart.map((item) => {
            if (item.id === id) {
                let newAmount = item.amount - 1
                return {...item, amount: newAmount }
            } else {
                return {...item }
            }
        })
        return await dispatch({
            type: 'DECREMENT',
            payload: tempCart
        })
    }

}
export const colorSelected = (color) => {
    return async(dispatch, getState) => {

        return await dispatch({
            type: 'SETCOLOR',
            payload: color
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
// if (cart) {
//     cart.forEach((item) => {
//         if (item.id === id) {
//             item.amount++
//         } 
//     })
// }else{
//     amount++
// }