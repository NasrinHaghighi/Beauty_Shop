import React from 'react';
import styles from './Filters.module.css'
import Image from 'next/image';

import sortIcon from '../../public/images/Group 117.png'
import Sortby from './Sortby';
import Filterby from './Filterby';






const Filters =() =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
 
 

  return <>
  <div className={styles.filterSection}>
  <Filterby />
    


<Sortby />



    {/* <div className={styles.sortBtnConatiner}>
      
    <button type='button' className={styles.sortBtn}> <Image src={sortIcon}/> <span className={styles.btn}>مرتب سازی بر اساس </span></button>
   <Sortby />
    </div> */}
   
  </div>

  </>;
}

export default Filters;
