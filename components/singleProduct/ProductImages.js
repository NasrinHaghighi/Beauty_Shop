import React from 'react'
import Image from 'next/image'
import styles from './ProductImages.module.css'
import Roj from '../../public/images/Roj.png'


const images =[
   
    {id: 'atteiTCuP63WZxqRP', width: 1000, height: 667, url: 'https://dl.airtable.com/.attachments/8cc9305ab199dbab54aef7087ce42dae/dcfbe86d/extra-1.jpeg', filename: 'extra-1.jpeg'},
    {id: 'attW7dd5NXUxwupVE', width: 1000, height: 714, url: 'https://dl.airtable.com/.attachments/6c754064b79fc0d289a716382b78eac6/060c6cc5/extra-2.jpeg', filename: 'extra-2.jpeg'},
    {id: 'atteIvlj6MhoBg1Lk', width: 1000, height: 650, url: 'https://dl.airtable.com/.attachments/06d26ce2c9071424f10661d3b90fb96d/0205cfdf/extra-3.jpeg', filename: 'extra-3.jpeg'},
    {id: 'attj3W9iJpev8ppFa', width: 1000, height: 667, url: 'https://dl.airtable.com/.attachments/da75b8c2273b4c144c6856d8c69a13f4/658bf94a/extra-4.jpeg', filename: 'extra-4.jpeg'}
]

const ProductImages=({...singleProduct}) =>{
    const {imgsrc} =  singleProduct
   
  return (
      <div className={styles.conatiner}>
    <div className={styles.main}><Image src={Roj}  width="100%" height="100%" layout="responsive" objectFit="contain"/>
    <div>pagination</div>
    </div>

    {/* STYLES****???  https://maxmarinich.github.io/react-alice-carousel/#custom-components*/}
    <div className={styles.gallary}>
        {images.map((i)=><div key={i.id} className={styles.img}><Image src={Roj}/></div>)}
    </div>
    </div>
  )
}

export default ProductImages