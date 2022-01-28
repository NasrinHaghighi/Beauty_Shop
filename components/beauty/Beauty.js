import React from 'react';
import img4 from '../../public/images/4.png'
import img2 from '../../public/images/2.png'
import img1 from '../../public/images/26.png'
import img3 from '../../public/images/KLJN.png'
import styles from './Beauty.module.css'
import Image from 'next/image';
import Lines from './Lines';


const Beauty =()=> {
  return <>
  <div className={styles.beauty}>
      <h1>تنوع در رنگ های نود</h1>
    <div className={styles.container}>

    {/* APPLY BOXSHADOW??? */}
      <div className={styles.mainImage}><Image src={img2}/></div>
      <div  className={styles.img3}><Image src={img3}/></div> 
      <div  className={styles.img4}><Image src={img4}/></div> 
      <div  className={styles.img1}><Image src={img1}/></div> 
   </div>
  </div>
  <Lines />
  
  
  </>;
}

export default Beauty;
