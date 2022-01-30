import React, { useEffect } from 'react';
import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import { getAllProducts } from '../../redux/action/products'
import { useDispatch , useSelector } from 'react-redux';
import {productsList} from '../../servises/productsList'



const ProductsPage=()=> {
  const products = useSelector(state=>state.products)
  const dispatch = useDispatch();

//???  empty array    ??//


    useEffect(()=>{
      dispatch(getAllProducts())
    },[])

//console.log(productsList)

  return <>
  <div>
  <Navbar2 />
  <h1>
    {products.map((p)=>{return(<p>{p.name}</p>)})}
  </h1>
  <Footer /> 
  </div>
  </>;
}

export default ProductsPage;
