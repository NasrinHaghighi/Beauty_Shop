import { productsList } from '../../servises/productsList'


export const getAllProducts = () => {
    return async(dispatch, getState) => {
        //let products = [...getState().products]
        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}

export const clearAllProducts = () => {
    return async(dispatch, getState) => {
        let tempProducts = [...getState().products]
        let filterOption = {...getState().filterOption }

        tempProducts = productsList.products
        return await dispatch({ type: 'CLEAR_ALL_PRODUCTS', payload: tempProducts })
    }
}
export const clearFilterOption = () => {
        return async(dispatch, getState) => {

            let filterOption = {...getState().filterOption }

            filterOption.selectedBrand = []
            filterOption.selectedCategory = []
            filterOption.minPrice = 100
            filterOption.maxPrice = 1000
            filterOption.availability = true
            filterOption.discont = false
            return await dispatch({ type: 'CLEAR_FILLTER_OPTION', payload: filterOption })
        }
    }
    //BRAND OPTION///
export const barndChangeHandel = (e) => {
        return async(dispatch, getState) => {
            let filterOption = {...getState().filterOption }
            let selectedBrand = filterOption.selectedBrand
                //console.log(selectedBrand)
            if (e.target.checked) {
                //console.log('fisrt click:' + e.target.value)
                if (!selectedBrand.find((i) => i === e.target.value)) {
                    selectedBrand = selectedBrand.push(e.target.value)
                }
            } else {
                //console.log('fisrt un click:' + e.target.value)
                const index = selectedBrand.indexOf(e.target.value)
                if (index > -1) {
                    selectedBrand = (selectedBrand.splice(index, 1))
                }
            }


            return await dispatch({ type: 'BRAND_OPTION', payload: filterOption })
        }
    }
    //CATEGORAY OPTION///
export const categotyChangeHandel = (e) => {
        return async(dispatch, getState) => {
            const filterOption = {...getState().filterOption }
            let selectedCategory = filterOption.selectedCategory

            if (e.target.checked) {
                if (!selectedCategory.find((i) => i === e.target.value)) {
                    selectedCategory = selectedCategory.push(e.target.value)
                }
            } else {
                const index = selectedCategory.indexOf(e.target.value)
                if (index > -1) {
                    selectedCategory = selectedCategory.splice(index, 1)
                }
            }


            return await dispatch({ type: 'CATEGORY_OPTION', payload: filterOption })
        }
    }
    ///MIN PRICE OPTION ///
export const minpriceChangeHandel = (value, filterOption) => {
        return async(dispatch) => {
            filterOption.minPrice = value
            return await dispatch({ type: 'MINPRICE_OPTION', payload: filterOption })
        }
    }
    //MAX PRICE//
export const maxpriceChangeHandel = (value, filterOption) => {
    return async(dispatch) => {
        filterOption.maxPrice = value

        return await dispatch({ type: 'MAXPRICE_OPTION', payload: filterOption })
    }
}
export const availabilityChangeHandel = (e) => {
    return async(dispatch, getState) => {
        let filterOption = {...getState().filterOption }
        if (!e.target.checked) {
            filterOption.availability = false
        } else {
            filterOption.availability = true
        }

        return await dispatch({ type: 'AVAILIBILITY_OPTION', payload: filterOption })
    }
}
export const discontChangeHandel = (e) => {
    return async(dispatch, getState) => {
        let filterOption = {...getState().filterOption }
        if (e.target.checked) {
            filterOption.discont = true
        } else {
            filterOption.discont = false
        }
        return await dispatch({ type: 'DISCOT_OPTION', payload: filterOption })
    }
}

//USE FILTER OPTIN TAHT USE SET TO FILTER PRODUCT ARRAY, BY CLICK ON 'ذخیره'
export const fillterProductsHandler = () => {
    return async(dispatch, getState) => {
        let products = [...getState().products]
        let filterOption = {...getState().filterOption }
        let minPrice = filterOption.minPrice
        let maxPrice = filterOption.maxPrice
        let tempProducts = [...products]
        if (minPrice > 100 || maxPrice < 1000) {
            tempProducts = tempProducts.filter((item) => {
                return (item.price >= minPrice && item.price <= maxPrice)
            })
            products = tempProducts
        }
        if (filterOption.selectedBrand.length > 0) {

            tempProducts = tempProducts.filter((p) => {
                return filterOption.selectedBrand.indexOf(p.brand) !== -1
            })
            products = tempProducts

        }
        if (filterOption.selectedCategory.length > 0) {
            //console.log('vaghti some brande selected' + filterOption.selectedBrand)
            tempProducts = tempProducts.filter((p) => {
                return filterOption.selectedCategory.indexOf(p.category) !== -1
            })
            products = tempProducts
                //console.log(products)
        }
        if (filterOption.discont = true) {
            tempProducts = tempProducts.filter((p) => {
                return p.discont > 0
            })
            products = tempProducts
        } else {
            products = tempProducts
        }
        if (filterOption.availability = true) {
            tempProducts = tempProducts.filter((p) => {
                return p.Available = true
            })
            products = tempProducts
        } else {
            products = tempProducts
        }


        return await dispatch({ type: 'FILLTER_PRODUCTS', payload: products })
    }
}

export const sortProductsHandle = (value) => {
    return async(dispatch, getState) => {
        let products = [...getState().products]


        //console.log(value)
        if (value === 'mostVisitedr') {
            products = products.filter((p) => {
                return p.mostVisited === true
            })
        }
        if (value === 'bestSeller') {
            products = products.filter((p) => {
                return p.bestSeller === true
            })
        }
        if (value === 'mostPopular') {
            products = products.filter((p) => {
                return p.mostPopular === true
            })
        }
        if (value === 'mostExpensive') {
            products = products.sort((a, b) => b.price - a.price)
        }
        if (value === 'mostCheapest') {
            products = products.sort((a, b) => a.price - b.price)
        }
        return await dispatch({ type: 'SORT_PRODUCTS', payload: products })
    }
}





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