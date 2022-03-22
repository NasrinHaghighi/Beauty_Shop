export const login = () => {
    return async(dispatch) => {
        return await dispatch({ type: "LOGIN", payload: true })

    }
}
export const signOut = () => {
    return async(dispatch) => {
        return await dispatch({ type: 'SIGNOUT', payload: false })
    }
}

export const userAddressHandler = (value) => {
    return async(dispatch, getState) => {
        const address = [...getState().userAddress, value]
        return await dispatch({ type: 'USER_ADDRESS', payload: address })
    }
}
export const userFavoriteHandle = (product, mainColor) => {
    return async(dispatch, getState) => {
        let userFavorite = [...getState().userFavorite]
        if (userFavorite.length < 1) {
            const newItem = {
                id: product.id + mainColor,
                color: mainColor,
                name: product.name,
                image: product.imgsrc[0],
                price: product.price,
                discont: product.discont,
                garanty: product.garanty,
                stars: product.stars,
                likes: product.likes,
            }
            userFavorite.push(newItem)

        } else {
            let tempItem = userFavorite.find((item) => item.id === product.id + mainColor)
            if (!tempItem) {
                const newItem2 = {
                    id: product.id + mainColor,
                    color: mainColor,
                    name: product.name,
                    image: product.imgsrc[0],
                    price: product.price,
                    discont: product.discont,
                    garanty: product.garanty,
                    stars: product.stars,
                    likes: product.likes,
                }
                userFavorite.push(newItem2)

            }
        }


        return await dispatch({ type: 'USER_FAVORITE', payload: userFavorite })
    }
}
export const userRegisterInfoHandler = (value) => {
    return async(dispatch, getState) => {
        const userRegisterInfo = [...getState().userRegisterInfo, value]
        return await dispatch({ type: 'USER_REGISTER', payload: userRegisterInfo })
    }
}








// if (userFavorite.length == 0) {
//     console.log("First time");
//     const newItem1 = {
//         id: product.id,
//         color: mainColor,
//         name: product.name,
//         //image: product.images[0].url,
//         price: product.price,
//         discont: product.discont,
//         garanty: product.garanty
//     }
//     userFavorite = [...userFavorite, newItem1]

// } else {
//     console.log("another time");
//     // Check if the id is not existed in the array
//     console.log("Product ID is : " + product.id);
//     let num = product.id;
//     let strid = num.toString();

//     const obj = userFavorite.find(x => x.id === strid)
//     console.log(obj);

//     if (obj) {
//         console.log("Founded in the array");
//     } else {
//         console.log("Not founded in the array");
//         const newItem2 = {
//             id: product.id,
//             color: mainColor,
//             name: product.name,
//             //image: product.images[0].url,
//             price: product.price,
//             discont: product.discont,
//             garanty: product.garanty
//         }
//         userFavorite = [...userFavorite, newItem2]
//     }










//let tempItem = userFavorite.find((item) => (item.id === product.id + mainColor))
//console.log(item.id);
//console.log("Here is the tempItem:");
//console.log(tempItem);
// if (tempItem) {
//     let tempcart = userFavorite.map((item) => {
//         if (item.id === product.id + mainColor) {
//             console.log('mojod hast')
//         }
//     })
//     userFavorite = tempcart
// } else {
//     console.log('bar aval ...')
//     const newItem = {
//         id: product.id + mainColor,
//         color: mainColor,
//         name: product.name,
//         //image: product.images[0].url,
//         price: product.price,
//         discont: product.discont,
//         garanty: product.garanty
//     }
//     userFavorite = [...userFavorite, newItem]
// }
// userFavorite.map((item) => {
//             if (item.id != product.id + mainColor) {
//                 const newItem2 = {
//                     id: product.id + mainColor,
//                     color: mainColor,
//                     name: product.name,
//                     //image: product.images[0].url,
//                     price: product.price,
//                     discont: product.discont,
//                     garanty: product.garanty
//                 }
//                 userFavorite.push(newItem2)

//             }