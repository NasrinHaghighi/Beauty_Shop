import React , {useState}from 'react'
import Image from 'next/image'
import logo from '../../../public/New folder/Group 10.png'
import box from '../../../public/New folder/Group 9.png'
import searchIcon from '../../../public/New folder/Component 1 – 1.png'
import sidebarIcon from '../../../public/New folder/Group 27.png'
import styles from './Navbar.module.css'
import { useGlobalContex } from '../../context/context'

const Navbar=()=> {
    const {handelOpenSidebar} =useGlobalContex()
    const[showInput , setShowInput]=  useState(false)
    const handelShow = ()=>{
        setShowInput(true)
    }
    const handelClose =(e)=>{
        if(!e.target.classList.contains('nav')){
          console.log('nav')
        }
    }
    return (
        <>
        <div className={styles.nav} onMouseOver={handelClose}>
            <Image src={logo} />
            <div className={styles.box}> 
            <Image src={box} /> 
            </div>
            <div className={styles.formContainer} onMouseOver={handelShow}>
                <form className={showInput ? styles.showForm : styles.form} >
                <Image src={searchIcon}/>
                {showInput && <input placeholder='جستجو' className={styles.input}/>}
               </form>
            </div>
        </div>
        <div className={styles.sidebarIcon}><Image src={sidebarIcon} onClick={handelOpenSidebar}/></div>
            
        </>
    )
}

export default Navbar
