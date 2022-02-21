export const addToCartHandel = (product, mainAmount, mainColor) => {
    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        let tempItem = cart.find((item) => item.id === product.id + mainColor)
        if (tempItem) {
            let tempcart = cart.map((item) => {
                if (item.id === product.id + mainColor) {
                    return {...item, amount: item.amount + mainAmount }
                } else {
                    return {...item }
                }
            })
            cart = tempcart
        } else {
            const newItem = {
                id: product.id + mainColor,
                amount: mainAmount,
                color: mainColor,
                name: product.name,
                //image: product.images[0].url,
                price: product.price,
                discont: product.discont,
                garanty: product.garanty
            }
            cart.push(newItem)
        }
        return await dispatch({ type: 'ADD_TO_CART', payload: cart })

    }

}
export const removeItemCart = (id) => {
    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        const tempcart = cart.filter((item) => {
            return item.id !== id
        })


        return await dispatch({ type: 'REMOVE_ITEM_CART', payload: tempcart })

    }

}
export const toggleAmountcart = (id, value) => {

    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        let tempcart = cart.map((item) => {

            if (item.id === id) {
                console.log('same')
                if (value === 'inc') {
                    let newAmount = item.amount + 1
                    if (newAmount > 10) {
                        newAmount = 10
                    }
                    return {...item, amount: newAmount }
                }
                if (value === 'dec') {
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return {...item, amount: newAmount }
                }
            } else {
                return item
            }
        })
        return await dispatch({ type: 'TOGGLE-AMOUNT-CART', payload: tempcart })
    }
}
export const cartTotal = () => {
    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        const { total_price } = cart.reduce((total, cartItem) => {
            const { price, amount } = cartItem

            total.total_price += price * amount

            return total
        }, {
            total_price: 0
        })
        return await dispatch({ type: 'CART_TOTAL', payload: total_price })
    }
}
export const cartDiscont = () => {
    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        const { total_discont } = cart.reduce((total, cartItem) => {
            const { price, amount, discont } = cartItem

            total.total_discont += (price * discont * amount) / 100

            return total
        }, {
            total_discont: 0
        })


        return await dispatch({ type: 'CART_DISCONT', payload: total_discont })
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