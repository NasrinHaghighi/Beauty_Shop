import React, { useEffect } from 'react';
import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Filters from '../../components/filters/Filters';
import ProductList from '../../components/productList/ProductList';
import Sidebar from '../../components/Sidebar/Sidebar';

import { getAllProducts } from '../../redux/action/products'
import { useDispatch , useSelector } from 'react-redux';
import {productsList} from '../../servises/productsList'




const ProductsPage=()=> {
 const products =useSelector(state=>state.products)
  const dispatch = useDispatch();
//console.log(products)  //ok
//???  empty array    ??//


    useEffect(()=>{
      dispatch(getAllProducts())
    },[])

//console.log(productsList)

  return <>
  <div>
  <Navbar2 title0='محصولات'/>
  <Filters />
  <ProductList />
  <Sidebar/>
  <Footer /> 
  </div>
  </>;
}

export default ProductsPage;
