import React from 'react';
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Navbar2 from '../../components/navbar/Navbar2';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/footer/Footer';

import SingleProductInfo from '../../components/singleProduct/SingleProductInfo';
import ProductImages from '../../components/singleProduct/ProductImages';


import styles from './productId.module.css'
import ReleventProduct from '../../components/singleProduct/ReleventProduct';
import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn';
import TabPart from '../../components/tabs/TabPart';


const ProductSinglePage=()=> {
    const router =useRouter()
    const productId = router.query.productId

    const products =useSelector(state =>state.products)
    const singleProduct =products.find((p)=>p.id === productId)
    //console.log(singleProduct)
    

   return <>
  <Navbar2 />
  
  <div className={styles.ProductSinglePageContainer}>
    <div className={styles.singlepageBanner}>
     <div><ProductImages {...singleProduct}/></div>
     <div><SingleProductInfo {...singleProduct}/></div> 
 
    </div>
  
     <ReleventProduct {...singleProduct}/>
     <SeeMoreBtn />
     <TabPart {...singleProduct}/> 
   </div>
  
    <Sidebar />
    <Footer />
  </>
   




}

export default ProductSinglePage ;
  