import React, { useEffect } from 'react';
import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Filters from '../../components/filters/Filters';
import ProductList from '../../components/productList/ProductList';

import { getAllProducts } from '../../redux/action/products'
import { useDispatch , useSelector } from 'react-redux';
import {productsList} from '../../servises/productsList'



const ProductsPage=()=> {
 
  const dispatch = useDispatch();

//???  empty array    ??//


    useEffect(()=>{
      dispatch(getAllProducts())
    },[])

//console.log(productsList)

  return <>
  <div>
  <Navbar2 />
  <Filters />
  <ProductList />
  <Footer /> 
  </div>
  </>;
}

export default ProductsPage;
