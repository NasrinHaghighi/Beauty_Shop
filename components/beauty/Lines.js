import React from 'react';
import styles from './Lines.module.css'
import Image from 'next/image';
import face from '../../public/images/Component 20 – 1.png'
import hair from '../../public/images/Component 22 – 1.png'
import skin from '../../public/images/Component 21 – 1.png'
const Lines =() =>{
  return <>
  <div className={styles.lines}>
     <h6>دارای سه لاین مجزای تخصصی</h6>
     <div className={styles.linesBg}>
         
         <div className={styles.linesitem}><h4>مو</h4> <Image src={hair}/></div>
         <div className={styles.linesitem}><h4>صورت</h4> <Image src={skin}/></div>
         <div className={styles.linesitem}><h4>پوست</h4> <Image src={face}/></div>
        
     </div>

  
  </div>
  </>;
}

export default Lines;
