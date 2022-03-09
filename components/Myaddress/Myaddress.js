import React from 'react'
import Image from 'next/image';
import trash from '../../public/images/Group 187.png'
import styles from './Myaddress.module.css'
const Myaddress =()=> {
  return (
    <div className={styles.conatiner}>
        <h6>آدرس ها * <span><Image src={trash}/></span></h6>
        <select className={styles.select}>
            <option  className={styles.option} value="">پونک ، خیابان فلاح زاده، کوچه 12، پلاک 12</option>
            <option className={styles.option} value="">پونک ، خیابان فلاح زاده،12</option>
            <option className={styles.option} value="">پونک ، خیابان فلاح12</option>
        </select>
        <p className={styles.add}> + اضافه کردن آدرس جدید </p>
    </div>
  )
}

export default Myaddress