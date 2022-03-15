import React from 'react'
import Link from 'next/link'
import styles from './aboutPage.module.css'
import Navbar2 from '../../components/navbar/Navbar2'
import Aside from '../../components/profile/Aside'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import About from '../../components/about/About'

function AboutPage() {
    return (
        <div>
         <Navbar2 title3='درباره ما' />  
         <div className={styles.mainContainer}>  
         <About />
         <Aside />
         </div>    
         <Sidebar /> 
         <Footer />
        </div>
    )
}

export default AboutPage
