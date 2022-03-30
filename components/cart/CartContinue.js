import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CartContinue.module.css'
import arrow from '../../public/images/Path 142.png'
import Roj from '../../public/images/Roj.png'
import clock from '../../public/images/Group 316.png'
import { useSelector } from 'react-redux';

const CartContinue=()=> {
  const cart= useSelector(state=>state.cart)

  return (
    <div className={styles.cartContinue}>
        <div className={styles.address}>
          <div>
            <p>آدرس تحویل سفارش</p>
            <p>پونک، خیابان فلاح زاده، خیابان همیلا، پلاک 2</p>
          </div>
           
            <div className={styles.cahngeAddress}>
            <Link href='/profile/myaddress' ><a><span><Image src={arrow}/></span>تغییر یا ویرایش آدرس</a></Link>
            </div>
        </div>


        <div className={styles.info}>
            <div className={styles.cartItems}>
             {cart.map((item)=>{
                return(<div className={styles.cartItem}><p>{item.name}</p><div className={styles.cartItemImg}><img src={item.image[0].src} /></div></div>)
                  })}
             </div>
          <div className={styles.table}>
            <div className={styles.header}><span>انتخاب زمان ارسال </span><Image src={clock}/></div>
          
            <table className={styles.mainTable}>
  
               <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
              <tr className={styles.row}>
                  <td className={styles.cell}>شنبه</td>
                 <td className={styles.cell}>25آذر</td>
                 <td className={styles.cell}>از ساعت 9 الی 13</td>
                 <td className={styles.cell}>از ساعت 13 الی 15</td>
                 <td className={styles.cell}>از ساعت 17 الی 22</td>
              </tr>
            </table>
          </div>

        </div>
    </div>
  )
}

export default CartContinue