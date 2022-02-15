import React , {useState} from 'react';
import styles from './SingleProductInfo.module.css'
import Link from 'next/link';
import Image from 'next/image';
import  heartIcon from '../../public/images/247204021554126447.png'
import shareIcon from '../../public/images/Component 30 – 1.png'
import likeIcon from '../../public/images/like.png'
import commentsIcon from '../../public/images/bubble-chat.png'

import { useDispatch, useSelector } from 'react-redux';

import AmountControl from './AmountControl';
import ColorPart from './ColorPart';

import {addToCartHandel} from '../../redux/action/cart'



const SingleProductInfo=({...singleProduct})=> {
  const amount = useSelector(state => state.amount)
  const selectedColor = useSelector(state => state.color)
  const dispatch =useDispatch()

   
    const {name, garanty, discont,id ,price ,colors, likes, comments} =singleProduct

   

    
  return <section className={styles.container}>
      <div className={styles.icons}>
          <div><Image src={heartIcon}/></div>
          <div>   <Image src={shareIcon}/></div>
      </div>



      <div className={styles.main}>
        <h1>{name}</h1>
      <p>  گارانتی  <span> {garanty} </span>  ماهه</p>
     <div><AmountControl /></div>
    <div><ColorPart colors={colors}/></div>

    <div className={styles.discont}>{discont} : تخفیف </div>
    <div className={styles.price}>{price} قیمت : تومان </div>


    <button className={styles.addToCart} onClick={()=>dispatch(addToCartHandel(singleProduct, amount, selectedColor))}> افزودن به سبد خرید </button>
  
    {/* onClick={()=>addToCart(id, mainColor, amount, product)} */}
    <div className={styles.comment}>
    <p><Image src={likeIcon}/> <span>{likes}</span></p>
   {/* <p>            <Image src={commentsIcon}/><span>      
       {comments.length}</span></p> */}
    </div>
    </div>
  </section>;
}

export default SingleProductInfo;


// className={`${mainColor === color ? 'color-btn active' : 'color-btn'}` }
// onClick= {()=>setMainColor(color)}