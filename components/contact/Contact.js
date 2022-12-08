/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import map from '../../public/images/Mask Group 11.png'
import PhoneIcon from '../../public/images/Path 226.png'
import emailIcon from '../../public/images/Group 450.png'
import styles from './Conatct.module.css'

function Contact() {
  return (
    <div className={styles.conatiner}>
        <div className={styles.header}>
        <p>در صورت داشتن هر گونه سوال در ارتباط با فروشگاه وان دسک، می توانید از طریق لینک های ارتباطی زیر با ما در ارتباط باشید</p>
        <div className={styles.contactInfo}>
           
            <span> <Image src={emailIcon}/>  Info@imenaria.org</span>
            <span> <Image src={PhoneIcon}/>  09999901231</span>
        </div>
        </div>
        <div className={styles.body}>
           <p>آدرس: پونک، خیابان همیلا، کوچه12، پلاک 12</p>
<Image src={map}/>
        </div>
    </div>
  )
}

export default Contact