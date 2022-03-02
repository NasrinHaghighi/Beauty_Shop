import React from 'react'
import Aside from '../../components/profile/Aside'
import Navbar2 from '../../components/navbar/Navbar2'
import styles from './myfavorate.module.css'

function myfavoraite() {
  return (
    <>
    <Navbar2 title3='علاقه مندی های من' /> 
    <div className={styles.mainContainer}>
    <div>my fffffffavorate</div>
    <Aside />
   </div>
 </>
  )
}

export default myfavoraite