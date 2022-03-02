import React from 'react'
import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Aside from '../../components/profile/Aside'
import styles from './profileIndex.module.css'


import Register from '../../components/Register/Register'

const profileIndex =() =>{
  
  return (
      
    <div>
      <Navbar2 title3='پروفایل' />  
         <div className={styles.mainContainer}>
          <Register />
         <Aside />
         </div> 
         <Sidebar /> 
         <Footer />
    </div>
  )
}

export default profileIndex