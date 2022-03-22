import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import styles from './myorder.module.css'
import Myorders from '../../components/Myorders/Myorders'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'

function myorder() {
  return (
      <>
       <Navbar2 title3='سفارش های من' /> 
      <div className={styles.mainContainer}>
      <Myorders />
      <Aside />
      </div>
      <Sidebar /> 
         <Footer />
    </>
  )
}

export default myorder