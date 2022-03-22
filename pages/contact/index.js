import React from 'react';

import styles from './contactPage.module.css'
import Navbar2 from '../../components/navbar/Navbar2'
import Aside from '../../components/profile/Aside'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Contact from '../../components/contact/Contact';


function ContactPage() {
  return <>
  
  <div> 
        <Navbar2 title3='ارتباط با ما' />  
         <div className={styles.mainContainer}>  
    <Contact />
         <Aside />
         </div>    
         <Sidebar /> 
         <Footer />
     </div>;
 
  
  </>
  
}

export default ContactPage;
