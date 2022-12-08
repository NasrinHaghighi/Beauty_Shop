/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './FavoraiteItem.module.css'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import Stars from '../../components/stars/Stars' 
import likeIcon from '../../public/images/like.png'


const FavoraiteItem =({image, name, price, id, stars, comments, likes})=> {
  console.log(image)

    return <div className={styles.container}>
      <img src={image.src} />
   <div className={styles.infoContainer}>
   
   <p>{name}</p>
   <p>قیمت : {price} تومان</p>

 
   <div className={styles.link}><Link href={`/products/${id}`}><a> مشاهده محصول</a></Link></div>
   <div className={styles.rank}>
       <Stars stars={stars}/>
        <div className={styles.likeComments}>
          <span><Image src={likeIcon}/> <span>{likes}</span></span>
          {/* <span>                
//           <Image src={commentsIcon}/><span>
                 
//           {comments.length}</span></span> */}
         </div>
   </div>
 </div>
  </div>;

}

export default FavoraiteItem


// <img src={item.imgsrc[0].src} />
// <div className={styles.infoContainer}>
//     <p>{item.name}</p>
//     <p>قیمت : {price} تومان</p>

 
//     <div className={styles.link}><Link href={`/products/${id}`}><a> مشاهده محصول</a></Link></div>
//     <div className={styles.rank}>
//         <Stars stars={stars}/>
//         <div className={styles.likeComments}>
//          <span><Image src={likeIcon}/> <span>{item.likes}</span></span>
//           {/* <span>                
//           <Image src={commentsIcon}/><span>
                 
//           {comments.length}</span></span> */}
//          </div>
//   </div>
// </div>