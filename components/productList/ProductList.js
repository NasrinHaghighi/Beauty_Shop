import React from 'react';
import Product from '../productList/Product';


import { useSelector } from 'react-redux';


import styles from './ProductList.module.css'
const  ProductList =()=> {
  const filtered= useSelector(state=>state.filtered)
  const filteredLength =filtered.length

    const products = useSelector(state=>state.products)

   
  return <>
 
  <div className={styles.container}>

{filteredLength >0 ? 

filtered.map((item)=>{  return <Product key={item.id} {...item}/>   })
:

products.map((item)=>{  return <Product key={item.id} {...item}/>   })
}

   
  </div>
  </>;
}

export default ProductList;
