import React from 'react';
import Link from 'next/link';

import { handelCloseSidebar } from '../../redux/action/banner';
import { handelcloseSubmenu } from '../../redux/action/banner';
import styles from './Submenu.module.css'

import {handelOpenSubmenu} from '../../redux/action/banner'
import { useSelector, useDispatch } from 'react-redux';



const Submenu =({item}) =>{

  const submenu = useSelector(state=>state.submenu)
  const dispatch = useDispatch()

       return <>
  
  <li 
   onClick={item.subNav ? ()=>dispatch(handelOpenSubmenu()) : ()=>dispatch(handelCloseSidebar())  } 
   className={styles.li}>
       <Link href={item.path}><a>{item.title}<span className={styles.icon} > {item.icon} </span></a></Link>
    </li>
 
  {submenu && item.subNav ? item.subNav.map((item, index)=>{
    {/*can i have two dispatch in a tag????*/}
      return(<li key={index} className={styles.innerLi} onClick={()=>dispatch(handelCloseSidebar())} onClick={()=>dispatch(handelcloseSubmenu())}> 
      <Link href={item.path}><a>{item.title} <span className={styles.icon} > {item.icon} </span></a></Link>
     
         </li>)
  } ) : null}
  </>;
}

export default Submenu;


///onClick={()=>dispatch(handelCloseSidebar())} onClick={()=>dispatch(handelcloseSubmenu())}