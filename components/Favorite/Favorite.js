import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FavoraiteItem from './FavoraiteItem'
import styles from './Favorite.module.css'

const Favorite =()=> {
    const userFavorite =useSelector(state=>state.userFavorite)
    console.log(userFavorite)
  
    return (
        <div className={styles.conatiner}>
            {userFavorite.length >0 ? 
                userFavorite.map((item)=>{
                    return(
                        <FavoraiteItem {...item}/>
                    )
                })
            
            : 
            <p className={styles.empty}>لیست مورد علاقه ها خالی است !  </p>
            }
        
        </div>
    
    )
    
}

export default Favorite


// <div className={styles.container}>
   
//    <img src={imgsrc[0].src} />
//    <div className={styles.infoContainer}>
//        <p>{name}</p>
//        <p>قیمت : {price} تومان</p>

    
//        <div className={styles.link}><Link href={`/products/${id}`}><a> مشاهده محصول</a></Link></div>
//        <div className={styles.rank}>
//            <Stars stars={stars}/>
//            <div className={styles.likeComments}>
//             <span><Image src={likeIcon}/> <span>{likes}</span></span>
//              {/* <span>                
//              <Image src={commentsIcon}/><span>
                    
//              {comments.length}</span></span> */}
//             </div>
//      </div>
//    </div>
  
// </div>;