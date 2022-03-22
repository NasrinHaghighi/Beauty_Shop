import React from 'react'
import Image from 'next/image'
import styles from './ProductImages.module.css'
import Roj from '../../public/images/Roj.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 




const ProductImages=({...singleProduct}) =>{
    const {imgsrc} =  singleProduct
    console.log(imgsrc, singleProduct)
   
  return (
    <div className={styles.conatiner}>
    {/* <div className={styles.main}><Image src={Roj}  width="100%" height="100%" layout="responsive" objectFit="contain"/>
    <div>pagination</div>
    </div> */}
       <Carousel showStatus={false} showArrows={false} className={styles.carousel}>
       {
        imgsrc.map( image => {
          return <div>
            <img src={ image.src } />
            
          </div>
        })
      }
            </Carousel>
       {/* <Carousel showArrows={true} >
        {imgsrc.map((i)=>{
          return(<div>{i.id}</div>)
          })}
       </Carousel> */}

    </div>
  )
}

export default ProductImages


{/* <div className={styles.gallary}>
{imgsrc.map((i)=>{
  return(
   <div className={styles.imgItem}>
     <Image width={100}  height={100} src={i.src}/>
    
     </div>
  )
  
})}
   
 </div> */}