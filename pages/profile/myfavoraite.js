import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Favorite from '../../components/Favorite/Favorite'
import styles from './myfavorate.module.css'

function myfavoraite() {
  return (
    <>
    <Navbar2 title3='علاقه مندی های من' /> 
    <div className={styles.mainContainer}>
   <Favorite />
    <Aside />
    </div>
  <Sidebar />
    <Footer />
   
 </>
  )
}

export default myfavoraite