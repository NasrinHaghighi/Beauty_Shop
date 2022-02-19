export const addToCartHandel = (product, mainAmount, mainColor) => {



    return async(dispatch, getState) => {
        const cart = [...getState().cart]
        let tempItem = cart.find((item) => item.id === product.id + mainColor)
        if (tempItem) {
            let tempcart = cart.map((item) => {

                if (item.id === product.id + mainColor) {
                    console.log('same id')
                    return {...item, amount: item.amount + mainAmount }
                } else {
                    console.log('dif id')
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

        // if (cart.length > 0) {

        //     let alreadyExist = false
        //     cart.forEach((item) => {
        //         if (item.id === product.id) {
        //             alreadyExist = true
        //             item.amount = item.amount + mainAmount
        //             item.selectedColor = mainColor
        //         }
        //         if (!alreadyExist) {
        //             cart.push({...product, amount: mainAmount, selectedColor: mainColor })
        //         }

        //     })


        // } else {
        //     cart.push({...product, amount: mainAmount, selectedColor: mainColor })
        // }
        //localStorage.setItem('cart', JSON.stringify(cart))
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