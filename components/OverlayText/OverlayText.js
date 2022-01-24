import React from 'react';
import styles from './OverlayText.module.css'

function OverlayText() {
  return <>
         <div className={styles.overlay}>
        
<h1 className={styles.header}>فروشگاه بیوتی شاپ</h1>

<h3 className={styles.subheader}>بهترین محصولات آرایشی و بهداشتی را از ما بخواهید
</h3>
         
         </div>
         </>;
}

export default OverlayText;
