import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useSelector , useDispatch } from 'react-redux';
import sidebarIcon from '../../public/images/Group 27.png'
import logo from '../../public/images/Group 10.png'
import box from '../../public/images/Group 9.png'
import arrowLeft from '../../public/images/Path 68.png'
import styles from './Navbar2.module.css'

import { handelOpenSidebar } from '../../redux/action/banner';

import SearchInput from './SearchInput'

import { useRouter } from 'next/router';



const Navbar2 =({title1, title2})=> {
  const router = useRouter();
  console.log(router)
  const sidebarIsOpen = useSelector(state=>state.sidebarIsOpen)
  const dispatch =useDispatch()



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
       {/* ICON BAR */}
          
      <button type='button' className={styles.sidebarIcon} onClick={()=>dispatch(handelOpenSidebar())}> <Image src={sidebarIcon}/></button> 
       <h3>
       <Link href='/'><a>فروشگاه بیوتی شاپ</a></Link>
       <span> <Image src={arrowLeft}/> </span> 
             <Link href='/products'><a>محصولات</a></Link>
             {title1 ?  <span> <Image src={arrowLeft}/> {title1} </span>   :null}
             {title1 && title2 ?  <div><span> <Image src={arrowLeft}/> {title2} </span> </div>  :null}
       </h3>
       
       
        {/* { product && <Link to='/products'> / Products </Link> }   /{title} */}
        {/* <h3> 
            <Link href='/'><a>فروشگاه بیوتی شاپ</a></Link>
             <span> <Image src={arrowLeft}/> </span> 
             <Link href='/products'><a>محصولات</a></Link>

              {router.pathname !='/products' ?  <div><span><Image src={arrowLeft}/> </span><Link href='*'><a>کالا</a></Link> </div>:null} 
              
              {/* {router.pathname ='/cart' ?<div><span><Image src={arrowLeft}/> </span><Link href='*'><a>uuu</a></Link> </div> : null} */}
 
              {/* </h3> */} 
     </div>


        </div>

  
  </>;
}

export default Navbar2;


{/* <span> <Image src={arrowLeft}/> </span>  <Link href='/'><a>کالا</a></Link> */}