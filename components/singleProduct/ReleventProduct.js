import React from 'react'
import Product from '../../components/productList/Product'

import styles from './ReleventProduct.module.css'
import { useSelector } from 'react-redux';

const ReleventProduct =({...singleProduct})=> {

    const products =useSelector(state =>state.products)


  return (
    <div className={styles.releventProduct}>
    <p>محصولات مرتبط</p>
    <div className={styles.content}>
    {products.slice(0,5).map((item)=>{
    return(
      <Product key={item.id} {...item} className={styles.productItem}/>
    )
  })}  
  </div>
 
</div>
  )
}

export default ReleventProduct