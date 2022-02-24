import { productsList } from '../../servises/productsList'


export const getAllProducts = () => {
    return async dispatch => {

        return await dispatch({ type: 'GET_ALL_PRODUCTS', payload: productsList.products })
    }
}
export const fillterProducts = (selectedBrand, selectedCategory, minPrice, maxPrice, discont, availability) => {

    return async dispatch => {
        let tempProducts = [...productsList.products]
       
        tempProducts = tempProducts.filter((p) => {
            if (p.price >= minPrice && p.price<=maxPrice) {
          
                return tempProducts
            }
        })
        if (selectedBrand.length > 0) {
            tempProducts = tempProducts.filter((p) => {
                return selectedBrand.indexOf(p.brand) !== -1
            })

        }
        if (selectedCategory.length > 0) {
            tempProducts = tempProducts.filter((p) => {
                return selectedCategory.indexOf(p.category) !== -1
            })

        }
        if (discont === true) {
            tempProducts = tempProducts.filter((p) => {
              if(p.discont > 0){
                  return tempProducts
              }
            })

        }
        if (availability) {
            tempProducts =tempProducts.filter((p)=>{
             if(p.Available === true){
                 return tempProducts
             }
            })
        }else{
            return tempProducts=[...productsList.products]
        }
        
        
console.log(tempProducts)

        return await dispatch({ type: 'FILLTER_PRODUCTS', payload: tempProducts })
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