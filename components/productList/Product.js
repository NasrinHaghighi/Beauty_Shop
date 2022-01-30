import React from 'react';
import styles from './Product.module.css'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router'
import likeIcon from '../../public/images/like.png'
import commentsIcon from '../../public/images/bubble-chat.png'

//temporart solution for image//
import Roj from '../../public/images/Roj.png'

import Stars from '../stars/Stars';

const Product=({imgsrc, name, price, id, stars, comments, likes}) =>{

    const router =useRouter()
    const productId = router.query.productId

  return <div className={styles.container}>
      <Image src={Roj} />
      <div className={styles.infoContainer}>
          <p>{name}</p>
          <p>قیمت : {price} تومان</p>

          {/* ///how to make path for single product page ????// */}
          <div className={styles.link}><Link href='/products'><a> مشاهده محصول</a></Link></div>
          <div className={styles.rank}>
              <Stars stars={stars}/>
              <div className={styles.likeComments}>
               <span><Image src={likeIcon}/> <span>{likes}</span></span>
               {/* //link for rout to one comment???? */}
               <span><Image src={commentsIcon}/><span>{comments.length}</span></span>
               </div>
        </div>
      </div>
     
  </div>;
}

export default Product;