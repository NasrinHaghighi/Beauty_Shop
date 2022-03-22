import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import styles from './myaddress.module.css'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Myaddress from '../../components/Myaddress/Myaddress'


const myaddress =() =>{
  return (
    <>
    <Navbar2 title3='آدرس های من' /> 
    <div className={styles.mainContainer}>
    <Myaddress />
    <Aside />
   </div>
   <Sidebar /> 
         <Footer />
 </>
  )
}

export default myaddress