import React from 'react';
import Product from '../productList/Product';


import { useSelector } from 'react-redux';


import styles from './ProductList.module.css'
const  ProductList =()=> {
    const products = useSelector(state=>state.products)

   
  return <>
 
  <div className={styles.container}>



   {products.map((item)=>{
      return <Product key={item.id} {...item}/>


      
  })}
  </div>
  </>;
}

export default ProductList;
