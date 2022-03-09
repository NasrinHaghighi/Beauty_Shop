import { productsList } from '../../servises/productsList'


export const getAllProducts = () => {
    return async dispatch => {

        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}


export const barndChangeHandel = (e, filterOption) => {
    return async(dispatch) => {
        filterOption.map((item) => {
            if (e.target.checked) {
                if (!item.selectedBrand.find((i) => i === e.target.value)) {
                    return item.selectedBrand.push(e.target.value)
                }
            } else {
                const index = item.selectedBrand.indexOf(e.target.value)
                if (index > -1) {
                    return (item.selectedBrand.splice(index, 1))
                }
            }

        })

        return await dispatch({ type: 'BRAND_OPTION', payload: filterOption })
    }

}




// export const categotyChangeHandel = (e, filterOption) => {
//     return async(dispatch) => {
//         filterOption.map((item) => {
//             if (!item.selectedCategory.find((i) => i === e.target.value)) {
//                 return item.selectedCategory.push(e.target.value)
//             }
//         })

//         return await dispatch({ type: 'CATEGORY_OPTION', payload: filterOption })
//     }
// }
// export const minpriceChangeHandel = (value, filterOption) => {
//     return async(dispatch) => {
//         filterOption.map((item) => {
//             return (item.minPrice = value)
//         })

//         return await dispatch({ type: 'MINPRICE_OPTION', payload: filterOption })
//     }
// }
// export const maxpriceChangeHandel = (value, filterOption) => {
//     return async(dispatch) => {
//         filterOption.map((item) => {
//             return (item.maxPrice = value)
//         })

//         return await dispatch({ type: 'MAXPRICE_OPTION', payload: filterOption })
//     }
// }
// export const availabilityChangeHandel = (filterOption) => {
//     return async(dispatch) => {
//         filterOption.map((item) => {
//             return (item.availability = !item.availability)
//         })

//         return await dispatch({ type: 'AVAILIBILITY_OPTION', payload: filterOption })
//     }
// }
// export const discontChangeHandel = (filterOption) => {
//     return async(dispatch) => {
//         filterOption.map((item) => {
//             return (item.discont = !item.discont)
//         })

//         return await dispatch({ type: 'DISCOT_OPTION', payload: filterOption })
//     }
// }






// return async(dispatch) => {
//     const selectedBrand = filterOption.map((item) => {
//         return item.selectedBrand
//     })


//     if (e.target.checked) {
//         console.log(selectedBrand)
//         console.log(e.target.value)
//             // if (!selectedBrand.find((i) => i === e.target.value)) {
//         return selectedBrand.push(e.target.value)

//         // }
//     } else {
//         console.log('remove')
//             // const index = selectedBrand.indexOf(e.target.value);
//             // if (index > -1) {
//             //     return (selectedBrand.splice(index, 1))
//             // }

//     }



//     return await dispatch({ type: 'BRAND_OPTION', payload: selectedBrand })
// }



















// export const fillterProducts = (selectedBrand, selectedCategory, minPrice, maxPrice, discont, availability) => {

//     return async dispatch => {

//         let tempProducts = [...productsList.products]

//         tempProducts = tempProducts.filter((p) => {
//             if (p.price >= minPrice && p.price <= maxPrice) {
//                 return tempProducts
//             }
//         })
//         if (selectedBrand.length > 0) {
//             tempProducts = tempProducts.filter((p) => {
//                 return selectedBrand.indexOf(p.brand) !== -1
//             })
//         }
//         if (selectedCategory.length > 0) {
//             tempProducts = tempProducts.filter((p) => {
//                 return selectedCategory.indexOf(p.category) !== -1
//             })
//         }
//         if (discont === true) {
//             tempProducts = tempProducts.filter((p) => {
//                 if (p.discont > 0) {
//                     return tempProducts
//                 }
//             })
//         }
//         if (availability === true) {
//             tempProducts = tempProducts.filter((p) => {
//                 if (p.Available === true) {
//                     return tempProducts
//                 }
//             })
//         } else {
//             return tempProducts
//         }
//         return await dispatch({ type: 'FILLTER_PRODUCTS', payload: tempProducts })
//     }
// }
// export const sortProducts = (value, filtered) => {
//     return async dispatch => {
//         let tempProducts = [...productsList.products]
//         if (value === 'bestSeller') {
//             if (filtered.length > 0) {
//                 tempProducts = filtered.filter((p) => {
//                     return p.bestSeller === true
//                 })
//             } else {
//                 tempProducts = tempProducts.filter((p) => {
//                     return p.bestSeller === true
//                 })
//             }

//         }
//         if (value === 'mostExpensive') {
//             if (filtered.length > 0) {
//                 tempProducts = filtered.sort((a, b) => b.price - a.price)
//             } else {
//                 tempProducts = tempProducts.sort((a, b) => b.price - a.price)
//             }
//         }
//         if (value === 'mostCheapest') {
//             if (filtered.length > 0) {
//                 tempProducts = filtered.sort((a, b) => a.price - b.price)
//             } else {
//                 tempProducts = tempProducts.sort((a, b) => a.price - b.price)
//             }
//         }

//         return await dispatch({ type: 'SORT_PRODUCTS', payload: tempProducts })
//     }
// }


// export const clearAllProducts = () => {
//     return async dispatch => {
//         let tempProducts = [...productsList.products]
//         return await dispatch({ type: 'CLEAR_ALL_PRODUCTS', payload: tempProducts })
//     }
// }




















// //sortvalue is parameter to this func //
// export const sortProductsBy = (sortValue) => {
//     return async(dispatch, getState) => {
//         const products = getState().products

//         return await dispatch({
//             type: 'SORT_PRODUCTS_BY',
//             payload: {
//                 sortValue,
//                 //filter array 
//                 sortedProducts: products.filter((p) => p.mostPopular === false)
//                     //now render sortProductBy instead of all products//
//             }
//         })
//     }
// }