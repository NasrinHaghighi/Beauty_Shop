import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image';
import closeIcon from '../../../public/images/Group 345.png'
import {useGlobalContex} from './../../context/context';
import {sidebarData} from './SidebarData'
import Submenu from './Submenu';

const Sidebar = () =>{
    const {loading , sidebarIsOpen ,handelCloseSidebar}= useGlobalContex();
   
    return (
        <>
         
           <div className={sidebarIsOpen ? styles.sidebarOpen: styles.sidebar}>
               <div className={styles.header}>
                   <div className={styles.closeIcon} onClick={handelCloseSidebar}>
               <Image src={closeIcon}/>
               </div>
                <span>منو</span>
               </div>
               <ul className={styles.menu}>
{sidebarData.map((item,index)=>{
    return(<Submenu key={index} item={item}/>)
})}
           </ul>
           <button className={styles.button}>ورود/ ثبت نام</button>
           </div>
         
      
        </>
    )
}

export default Sidebar
