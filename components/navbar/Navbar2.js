import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/router'
import { useSelector , useDispatch } from 'react-redux';
import sidebarIcon from '../../public/images/Group 27.png'
import logo from '../../public/images/Group 10.png'
import box from '../../public/images/Group 9.png'
import arrowLeft from '../../public/images/Path 68.png'
import styles from './Navbar2.module.css'

import { handelOpenSidebar } from '../../redux/action/banner';

import SearchInput from './SearchInput'



const Navbar2 =({productId, title1,title2,title3,title0, ...products})=> {
  const dispatch =useDispatch()
const activeRout =useRouter()


 
    
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
      
      
       <h3><Link href='/'><a>فروشگاه بیوتی شاپ</a></Link></h3>
       <h3>
       {title0 ? <span> <Image src={arrowLeft}/> <Link href='/products'><a>{title0}</a></Link></span>  : null}
       {title1 ?  <span>  <Image src={arrowLeft}/> <Link href='/products/*'><a>{title1}</a></Link>  </span>  :null}  
       {title2 ?  <span>  <Image src={arrowLeft}/> <Link href='/products/*'><a>{title2}</a></Link>  </span>  :null} 
       </h3>
       <h3>
       {title3 ?  <span>  <Image src={arrowLeft}/> <Link href='/products/*'><a>{title3}</a></Link>  </span>  :null} 
       </h3>
   
    

       
    </div>


        </div>

  
  </>;
}

export default Navbar2;


{/* <span> <Image src={arrowLeft}/> </span>  <Link href='/'><a>کالا</a></Link> 
 <span> <Image src={arrowLeft}/> <Link href='/products'><a>محصولات</a></Link></span> 
        {title2 ?         <span>  <Image src={arrowLeft}/> <Link href='/*'><a>{title2}</a></Link>  </span>    :null}  
           {title3 ?  <span> <Image src={arrowLeft}/> <Link href='/products'><a>{title3}</a></Link></span>   :null}


*/}