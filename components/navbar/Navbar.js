import React , {useState}from 'react'
import Image from 'next/image'
import logo from '../../public/images/Group 10.png'
import box from '../../public/images/Group 9.png'
import styles from './Navbar.module.css'
import { handelOpenSidebar } from '../../redux/action/banner'
import { useSelector , useDispatch } from 'react-redux'
import SearchInput from './SearchInput'


const Navbar=()=> {
   

    return (
        <>
        <div className={styles.nav} >
            <Image src={logo} />
            <div className={styles.box}> 
            <Image src={box} /> 
            </div>
          <SearchInput />
        </div>
      
       
        </>
    )
}

export default Navbar
