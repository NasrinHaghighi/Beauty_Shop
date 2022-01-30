import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import sidebarIcon from '../../public/images/Group 27.png'
import logo from '../../public/images/Group 10.png'
import box from '../../public/images/Group 9.png'
import arrowLeft from '../../public/images/Path 68.png'
import styles from './Navbar2.module.css'



import SearchInput from './SearchInput'



const Navbar2 =()=> {


  return <>
  <div  className={styles.navContainer}>
      <div className={styles.nav}>
            <Image src={logo} />
            <div className={styles.box}> 
            <Image src={box} /> 
            </div>
          <SearchInput />

     </div>
     <div className={styles.navRight}>
      <div className={styles.sidebarIcon}> <Image src={sidebarIcon}/></div> 
        {/* { product && <Link to='/products'> / Products </Link> }   /{title} */}
        <h3>   <Link href='/'><a>فروشگاه بیوتی شاپ</a></Link> <span> <Image src={arrowLeft}/> </span> <Link href='/'><a>محصولات</a></Link> <span> <Image src={arrowLeft}/> </span>  <Link href='/'><a>کالا</a></Link></h3>
     </div>


        </div>

  
  </>;
}

export default Navbar2;
