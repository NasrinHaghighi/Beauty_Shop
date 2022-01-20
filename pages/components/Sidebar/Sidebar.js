import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image';
import closeIcon from '../../../public/New folder/Group 345.png'
import {useGlobalContex} from './../../context/context';
import {sidebarData} from './SidebarData'

const Sidebar = () =>{
    const {loading , sidebarIsOpen ,handelCloseSidebar}= useGlobalContex();
    console.log(sidebarIsOpen)

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
{sidebarData.map((data,index)=>{
    return(<li key={index} className={styles.li} onClick={handelCloseSidebar}>   {data.title}   <span className={styles.icon}> {data.icon} </span>           </li>)
})}
           </ul>
           <button className={styles.button}>ورود/ ثبت نام</button>
           </div>
         
      
        </>
    )
}

export default Sidebar
