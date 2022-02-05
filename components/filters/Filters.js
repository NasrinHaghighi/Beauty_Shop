import React from 'react';
import styles from './Filters.module.css'
import Image from 'next/image';
import filterIcon from '../../public/images/Group 115.png'
import sortIcon from '../../public/images/Group 117.png'
import Sortby from './Sortby';
import Filterby from './Filterby';


const options = [
  { value: 'صورت', label: 'صورت' },
  { value: 'پوست', label: 'پوست' },
  { value: 'مو', label: 'مو' },   ];


const Filters =() =>{
  function onChangeInput (e){
    console.log(e)
  }


  return <>
  <div className={styles.filterSection}>
  <div className={styles.filterBtnConatiner}>
    <button type='button' className={styles.filterBtn}> <Image src={filterIcon}/> <span className={styles.btn}>فیلتر بر اساس </span></button>
 <Filterby onChange={onChangeInput} options={options}/>
    </div>
    
    <div className={styles.sortBtnConatiner}>
      
    <button type='button' className={styles.sortBtn}> <Image src={sortIcon}/> <span className={styles.btn}>مرتب سازی بر اساس </span></button>
    {/* <Sortby /> */}
    </div>
   
  </div>

  </>;
}

export default Filters;
