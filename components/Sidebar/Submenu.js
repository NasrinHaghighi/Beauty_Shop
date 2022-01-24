import React from 'react';
import Link from 'next/link';
import { useGlobalContex } from '../../pages/context/context';

import styles from './Submenu.module.css'
const Submenu =({item}) =>{
    const {handelCloseSidebar, showSubmenu, submenu}= useGlobalContex();

  return <>
  
  <li 
   onClick={item.subNav ? showSubmenu : handelCloseSidebar} 
   className={styles.li}>
       <Link href={item.path}><a>{item.title}<span className={styles.icon} > {item.icon} </span></a></Link>
    </li>
 
  {submenu && item.subNav ? item.subNav.map((item, index)=>{
      return(<li key={index} className={styles.innerLi} onClick={ handelCloseSidebar}> 
      <Link href={item.path}><a>{item.title} <span className={styles.icon} > {item.icon} </span></a></Link>
     
         </li>)
  } ) : null}
  </>;
}

export default Submenu;
