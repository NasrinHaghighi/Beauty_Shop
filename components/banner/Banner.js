import React from 'react';
import Navbar from '../navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import OverlayText from '../OverlayText/OverlayText'
import styles from './Banner.module.css'
import Image from 'next/image';
import bg from '../../public/images/34372d120012963.Y3JvcCwyNTUwLDE5OTQsMCw1MTE.png'
import chatIcon from '../../public/images/Component 11 – 1.png'
import scrollIcon from '../../public/images/Component 28 – 1.png'
const Banner =()=> {
  return <>
  <div className={styles.banner}>
    
    
            <Navbar />
           <OverlayText />
           <Sidebar />
           <div className={styles.chatContainer}>
            
             <div> </div>
             <div></div>
             <div className={styles.chatIcon}><Image src={chatIcon}/></div>
           </div>
           <div className={styles.bgImage}>  <Image src={bg}/></div> 
           </div>
   </>;
}

export default Banner;
