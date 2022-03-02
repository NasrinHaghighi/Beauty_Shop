import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import styles from './myaddress.module.css'

const myaddress =() =>{
  return (
    <>
    <Navbar2 title3='آدرس های من' /> 
    <div className={styles.mainContainer}>
    <div>my address</div>
    <Aside />
   </div>
 </>
  )
}

export default myaddress