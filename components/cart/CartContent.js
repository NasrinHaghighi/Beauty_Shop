import React from 'react'
import styles from './CartContent.module.css'
import Image from 'next/image'
import Roj from '../../public/images/Roj.png'
import RemoveIcone from '../../public/images/Group 187.png'



import {toggleAmountcart} from '../../redux/action/cart'


import {useSelector, useDispatch} from 'react-redux'

const Cartcontent=()=> {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()



  //console.log(cart) ok
  return (
    <div className={styles.cartContent}>
    {cart.map((item)=>{
      return(
        <div className={styles.cartItem}>
           <div><Image src={RemoveIcone}/></div>

          <div>
          <h1>{item.name}</h1>
         <p>  گارانتی  <span> {item.garanty} </span>  ماهه</p>
         {/* increment={increment}  decrement={decrement} mainAmount={mainAmount} */}
            
<div>
  <button onClick={()=>dispatch(toggleAmountcart(item.id,'inc'))}>+</button>
  {item.amount}
  <button onClick={()=>dispatch(toggleAmountcart(item.id,'dec'))}>-</button>
</div>

            <div > <button className={styles.colorBtn} style={{background:item.color}}></button> : رنگ </div>
         <div className={styles.discont}>{item.discont} : تخفیف </div>
         <div className={styles.price}>{item.price} قیمت : تومان </div>

          </div>
          <div><Image src={Roj}/></div>

        </div>
      )
      
    })}
    </div>
  )
}

export default Cartcontent