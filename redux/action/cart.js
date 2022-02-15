export const addToCartHandel = (product, amount, selectedColor) => {

    //console.log(product)   ok

    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        if (cart.length < 1) {
            cart.push({...product, amount: amount, selectedColor: selectedColor })
        } else {
            cart.forEach((item) => {
                if (item.id === product.id) {
                    item.amount++
                }
            })
        }

        return await dispatch({ type: 'ADD_TO_CART', payload: cart })

    }

}

//localStorage.setItem('cart', JSON.stringify(cart)????

///
// const cart = [...getState().cart]
// //console.log(cart) []
// let alreadyExisted = false
// cart.forEach(element => {
// if (element.id === product.id) {
//     alreadyExisted === true
//     element.count++;
// }
// if (!alreadyExisted) {
//     cart.push({...product, count: 1 })
// }
// });


// export const addToCartHandel = ({  }) => {
//     //console.log(singleProduct)
//     return async(dispatch, getState) => {
//         console.log(getState().cart)
//         const cartItems = getState().cart.cartItems.slice();
//         let alreadyExisted = false
//         cartItems.forEach(element => {
//             if (element.id === id) {
//                 alreadyExisted === true
//                 element.count++;
//             }


//         });
//         // if (!alreadyExisted) {
//         //     cartItems.push({...singleProduct, count: 1 })
//         // }


//         return await dispatch({
//             type: 'ADD_TO_CART',
//             payload: { cartItems }
//         })
//     }
// }