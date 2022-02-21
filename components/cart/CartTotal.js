import React from 'react'
import { useSelector } from 'react-redux'
import styles from './CartTotal.module.css'


const CartTotal=()=> {
  const total= useSelector(state=> state.total)
  const discont=useSelector(state=> state.discont)
  const cart=useSelector(state=> state.cart)
  //temporary solution for total price//
  const maliat=(cart.length)*50
 const total_price= (total-discont)-maliat

  
  
  return (
    <div className={styles.carttotal}>
      <ul>
        <li><div>قیمت محصولات <span className={styles.cartItem}>({cart.length})</span></div><div className={styles.money}> <span >تومان</span>{total}</div></li>
        <li><div>تخفیف محصولات </div><div className={styles.money}> <span>تومان</span>{discont}</div></li>
        <li><div>مالیات بر ارزش افزوده </div><div className={styles.money}> <span>تومان</span>{maliat}</div></li>
      </ul>
      <div className={styles.btnPart}>
        <div className={styles.firstRow}>
        <button className={styles.apply}>اعمال</button>
          <button className={styles.code}>کد تخفیف</button>
         
        </div>
        <div className={styles.secendRow}>
        <button className={styles.finalprice}>  {total_price} : قیمت نهایی</button>
        <button className={styles.continue}>ادامه فرآیند خرید</button>
        </div>
      </div>

    </div>
  )
}

export default CartTotal