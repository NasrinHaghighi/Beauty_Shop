import React from 'react';
import Link from 'next/link';
import { useGlobalContex } from '../../context/context';

import styles from './Submenu.module.css'
const Submenu =({item}) =>{
    const {handelCloseSidebar, showSubmenu, submenu}= useGlobalContex();

  return <>
  
  <li 
   onClick={item.subNav ? showSubmenu : handelCloseSidebar} 
   className={styles.li}>
      {item.title}   <span className={styles.icon} > {item.icon} </span>    
      
   </li>
 
  {submenu && item.subNav ? item.subNav.map((item, index)=>{
      return(<li key={index} className={styles.innerLi} onClick={ handelCloseSidebar}> 
      {item.title} <span className={styles.icon} > {item.icon} </span>
         </li>)
  } ) : null}
  </>;
}

export default Submenu;
