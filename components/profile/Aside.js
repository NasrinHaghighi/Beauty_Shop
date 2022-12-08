/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/router'
import styles from './Aside.module.css'
import userPhoto from '../../public/images/userPhoto.png'
import {asideData} from './AsideData'

import FaUser from "react-icons/fa";


const Aside =()=> {
    const router =useRouter()
   const activeRout=router.pathname
   console.log(activeRout)
  return (
    <div className={styles.main}>
        <div className={styles.imgContainer}>
            <Image src={userPhoto}/>
        </div>
        <ul className={styles.asideUl}>
      {asideData.map((item, index)=>{
          return(
              <li key={index}
              className={item.path === router.pathname ? styles.asideLiactive :styles.asideLi}         
              >
             <Link href={item.path}><a>{item.title}</a></Link>
             
             </li>
          )
      })}
        </ul>
    </div>
  )
}

export default Aside


 {/* {asideData.map((item ,index)=>{
             return (
                 <li key={index} className={styles.asideLi}>
               <Link href={item.path}><a>{item.title} <span className={styles.icon} > {item.icon} </span></a></Link>
                 </li>
             )
         })} */}
         
    //      <li className={styles.asideLi}>
    //      <Link href='/profile'><a>پروفایل  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myorder'><a>سفارش های من  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myadress'><a>آدرس های من  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myadress'><a>آدرس های من  <span></span></a></Link>
    //   </li>
      
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myfavoraite'><a>علاقه مندی های من  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myfavoraite'><a>درباره ما  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myfavoraite'><a>ارتباط با ما  <span></span></a></Link>
    //   </li>
    //   <li className={styles.asideLi}>
    //      <Link href='/profile/myfavoraite'><a>خروج<span></span></a></Link>
    //   </li>