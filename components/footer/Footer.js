import React from 'react';
import styles from './Footer.module.css'
import logo from '../../public/images/Group 10.png'
import Link from 'next/link';
import Image from 'next/image';
import whatsApp from '../../public/images/whatsapp (2).png'
import insta from '../../public/images/instagram (2).png'
import linkedin from '../../public/images/linkedin (1).png'
import email from '../../public/images/email (1).png'

import kanoon from '../../public/images/download (1).png'
import sabt from '../../public/images/samandehi-ir-4_graphic222shop-ir.png'




const  Footer=()=> {
  return <>
  <div className={styles.main}>
      <div className={styles.header}> <h4>فروشگاه بیوتی شاپ</h4> <Image src={logo}/></div>
  <div className={styles.footer}>
     
  <div className={styles.col3}>
     
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
      </div>

      <div className={styles.col2}>
          <ul>
              <li><Link href="/"><a> دسترسی سریع</a></Link></li>
              <li><Link href="/about"><a> درباره ما</a></Link></li>
              <li><Link href="/contact"><a> ارتباط با ما</a></Link></li>
          </ul>
          <ul>
              <li><Link href="/"><a> پشتیبانی</a></Link></li>
              <li><Link href="/about"><a> قوانین و مقرارات</a></Link></li>
              <li><Link href="/contact"><a> پرسش های متداول</a></Link></li>
          </ul>
      </div>
     

      <div className={styles.col1}>
        <p>  تهران، شهرک غرب، بلوار فرحزادی، پلاک 10 ، واحد 3 </p> 
        <p>021-2236698   |   021-2236698  </p>
        <ul>
            <li><Link href="/"><a><Image src={whatsApp}/></a></Link></li>
            <li><Link href="/"><a><Image src={insta}/></a></Link></li>
            <li><Link href="/"><a><Image src={linkedin}/></a></Link></li>
            <li><Link href="/"><a><Image src={email}/></a></Link></li>
        </ul>
      </div>
      
  </div>
  <div className={styles.colabrationContainer}>
  
      <div className={styles.colabrationItems}>
         <div className={styles.colabrationItem}>   <Image src={kanoon}/>         </div>
         <div className={styles.colabrationItem}>               </div>
         <div className={styles.colabrationItem}> <Image src={sabt}/>             </div>
      </div>
      
       <div className={styles.collabrationBg}></div> 
  </div>
  <hr></hr>

<div className={styles.allrights}> <p>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هر گونه کپی برداری شامل پیگرد قانونی می باشد </p></div>

  </div>
  </>;
}

export default Footer;
