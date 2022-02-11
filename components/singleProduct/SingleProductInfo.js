import React , {useState} from 'react';
import styles from './SingleProductInfo.module.css'
import Link from 'next/link';
import Image from 'next/image';
import  heartIcon from '../../public/images/247204021554126447.png'
import shareIcon from '../../public/images/Component 30 – 1.png'
import likeIcon from '../../public/images/like.png'
import commentsIcon from '../../public/images/bubble-chat.png'



import AmountControl from './AmountControl';
import ColorPart from './ColorPart';

const SingleProductInfo=({...singleProduct})=> {

   
    const {name, garanty, discont ,price ,colors, likes, comments} =singleProduct
    
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
    <div className={styles.addToCart}><Link href='/'><a>افزودن به سبد خرید </a></Link></div>
  
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