import React from 'react';
import styles from './Lines.module.css'
import Image from 'next/image';
import face from '../../public/images/Component 20 – 1.png'
import hair from '../../public/images/Component 22 – 1.png'
import skin from '../../public/images/Component 21 – 1.png'
import img1 from '../../public/images/Group 66.png'
import img2 from '../../public/images/Group 68.png'
import img3 from '../../public/images/Group 70.png'
const Lines =() =>{
  return <>
  <div className={styles.lines}>
     <h6>دارای سه لاین مجزای تخصصی</h6>
     <div className={styles.linesBg}>
         
         <div className={styles.linesitem}><h4>مو</h4> <Image alt="img" src={hair}/></div>
         <div className={styles.linesitem}><h4>صورت</h4> <Image alt="img" src={skin}/></div>
         <div className={styles.linesitem}><h4>پوست</h4> <Image alt="img" src={face}/></div>
        
     </div>

 <div className={styles.icons}>
 <div className={styles.box}><Image alt="img" src={img2}/> <span>ارسال رایگان</span></div>
   <div className={styles.box}><Image alt="img" src={img1}/> <span>هدایای ویژه</span></div>
  
   <div className={styles.box}><Image alt="img" src={img3}/> <span>بسته بندی ایمن</span></div>

 </div>
  </div>
  </>;
}

export default Lines;
