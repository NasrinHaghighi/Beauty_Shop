import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import styles from './myorder.module.css'

function myorder() {
  return (
      <>
       <Navbar2 title3='سفارش های من' /> 
      <div className={styles.mainContainer}>
      <div>myorder</div>
      <Aside />
      </div>
    </>
  )
}

export default myorder