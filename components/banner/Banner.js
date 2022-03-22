import React from 'react';
import Navbar from '../navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import OverlayText from '../OverlayText/OverlayText'
import styles from './Banner.module.css'
import Image from 'next/image';
import bg from '../../public/images/34372d120012963.Y3JvcCwyNTUwLDE5OTQsMCw1MTE.png'
import chatIcon from '../../public/images/Component 11 – 1.png'





import { handelCloseSidebar } from '../../redux/action/banner';
import { useSelector, useDispatch } from 'react-redux';



const Banner =()=> {
const sidebarIsopen =useSelector(state=>state.Banner)
  const dispatch = useDispatch()


  return <>
  <div className={styles.banner}  >
  {/* onClick={sidebarIsopen ? ()=>dispatch(handelCloseSidebar()) :null} */}
    
            <Navbar />
           <OverlayText />
           <Sidebar />
           <div className={styles.chatContainer}>
            
             <div> </div>
             <div></div>
             <div className={styles.chatIcon}><Image src={chatIcon}/></div>
           </div>
           <div className={styles.bgImage}>  <Image src={bg} className={styles.bg}/> </div> 
           {/* data OF OBJECT ??? */}
           <div  className={styles.anim}>   <object data="/images/scroll-anim.svg" type="image/svg+xml"></object> </div>
           </div>
   </>;
}

export default Banner;
