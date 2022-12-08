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

import Image from 'next/image';
import pic207 from '../../public/images/Group 207.png'
import pic208 from '../../public/images/Group 208.png'
import pic206 from '../../public/images/Group 206.png'


const ProductSinglePage=()=> {
    const router =useRouter()
    const productId = router.query.productId

    const products =useSelector(state =>state.products)
    const singleProduct =products.find((p)=>p.id === productId)
 
   return <>
  <Navbar2 title1='کالا' title0='محصولات' productId={productId}/>
  
  <div className={styles.ProductSinglePageContainer}>
    <div className={styles.singlepageBanner}>
     <div><ProductImages {...singleProduct}/></div>
     <div><SingleProductInfo {...singleProduct}/></div> 
 
    </div>
  
     <ReleventProduct />
     <SeeMoreBtn />
     <TabPart {...singleProduct}/> 
     <div className={styles.icons}>

      
       <div className={styles.icon}><Image alt="img" src={pic208}/> <p>تضمین اصلی بودن کالا</p></div>
       <div className={styles.icon}><Image alt="img" src={pic207}/> <p>تضمین گارانتی کالا</p></div>
       <div className={styles.icon}><Image alt="img" src={pic206}/> <p>امکان تحویل کالا</p></div>
     </div>
   </div>
  
    <Sidebar />
    <Footer />
  </>
   




}

export default ProductSinglePage ;
  