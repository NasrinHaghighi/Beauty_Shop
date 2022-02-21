import React, {useStae ,useEffect} from 'react'
import styles from './CartContent.module.css'
import Image from 'next/image'
import Roj from '../../public/images/Roj.png'
import RemoveIcone from '../../public/images/Group 187.png'

import {toggleAmountcart} from '../../redux/action/cart'
import {cartTotal} from '../../redux/action/cart'
import {cartDiscont} from '../../redux/action/cart'
import {removeItemCart} from '../../redux/action/cart'
import CartModal from './CartModal'

import {useSelector, useDispatch} from 'react-redux'

const Cartcontent=()=> {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()

  const [openModalCart, setOpenModalCart] = React.useState(false);
  const handleOpen = () => setOpenModalCart(true);
  const handleClose = () => setOpenModalCart(false);
 


  //envok cartTotal in every cahnge in cart//
useEffect(() => {
  dispatch(cartDiscont())
 dispatch(cartTotal())
}, [cart])

  //console.log(cart) ok
  return (
    <>
   
    <div className={styles.cartContent}>
    {cart.map((item)=>{
      
      return(
        
        <div className={styles.cartItem}>
           {openModalCart ? <CartModal id={item.id} onClose={handleClose}/> : null}
          {/* ()=>dispatch(removeItemCart(item.id)) */}

          {/* first cloumn */}
           <div className={styles.removeIcon}  onClick={handleOpen}><Image src={RemoveIcone}/></div>
        {/* secend cloumn */}
          <div className={styles.info}>
            <h1>{item.name}</h1>
         <div>  گارانتی  <span> {item.garanty} </span>  ماهه</div>
       
            
        <div className={styles.amountContainer}>

        <button onClick={()=>dispatch(toggleAmountcart(item.id,'inc'))}>+</button>
         <span className={styles.amountNumber}>{item.amount} </span> 
        <button onClick={()=>dispatch(toggleAmountcart(item.id,'dec'))}>-</button>
          <span>  : تعداد </span>
         </div>



       <div className={styles.colorContainer}> <div className={styles.colorBtn} style={{background:item.color}}></div> : رنگ </div>  
         <div className={styles.discont}>{item.discont} %: تخفیف </div>
         <div className={styles.price}>{item.price} قیمت : تومان </div> 

          </div>
              {/* third cloumn */}
      <div className={styles.imgContainer}><Image src={Roj}/></div>

        </div>
      )
     
    })}
    </div>
    </>
  )
}

export default Cartcontent