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
import { userFavoriteHandle} from '../../redux/action/login'

import redheart from '../../public/images/profileicon/redheart.png'



const SingleProductInfo=({...singleProduct})=> {


  const dispatch =useDispatch()
  console.log(singleProduct.imgsrc)
  const {name, garanty, discont,id ,price ,colors, likes, comments, imgsrc} =singleProduct

  const [isFavoraite, setisFavoraite] =useState(false)

  ///get amount depend of + or - from AmountCntrol component//

  const [mainAmount, setAmount] =useState(1)
  const increment = () => {
    setAmount(mainAmount + 1)
  }
  const decrement = () => {
    setAmount(mainAmount -1)
  }

  ///get selected color depend of user from colorpart component//
  const [mainColor , setMainColor]=useState(colors[0])

  const selectColor = (color) => {
    setMainColor(color)
  }


  return <section className={styles.container}>
      <div className={styles.icons}>
          <div 
          onClick={()=>{setisFavoraite(!isFavoraite); dispatch(userFavoriteHandle(singleProduct, mainColor))}}
          
          >
            {isFavoraite ?  <Image src={redheart}/> : <Image src={heartIcon}/> }
            
            
         </div>
          <div>   <Image src={shareIcon}/></div>
      </div>



      <div className={styles.main}>
        <h1>{name}</h1>
      <p>  گارانتی  <span> {garanty} </span>  ماهه</p>
     <div><AmountControl  increment={increment}  decrement={decrement} mainAmount={mainAmount}/></div>
    <div><ColorPart {...singleProduct} mainColor={mainColor} selectColor={selectColor}/></div>


    <div className={styles.discont}>{discont} : تخفیف </div>
    <div className={styles.price}>{price} قیمت : تومان </div>


    <button className={styles.addToCart} onClick={()=>dispatch(addToCartHandel(singleProduct, mainAmount, mainColor))}> <Link href='/cart'><a>افزودن به سبد خرید</a></Link></button>
  
    {/* onClick={()=>addToCart(id, mainColor, amount, product)} */}
    <div className={styles.comment}>
    <p><Image src={likeIcon}/> <span>{likes}</span></p>
 <p> <Image src={commentsIcon}/><span> {comments.length}</span></p> 
    </div>
    </div>
  </section>;
}

export default SingleProductInfo;


// className={`${mainColor === color ? 'color-btn active' : 'color-btn'}` }
// onClick= {()=>setMainColor(color)}