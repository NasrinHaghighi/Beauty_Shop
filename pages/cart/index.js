import React from 'react'


import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Cartcontent from '../../components/cart/CartContent'
import CartTotal from '../../components/cart/CartTotal'
import styles from './CartPage.module.css'

function CartPage() {
  return (<>
  
        <Navbar2 />
        <div className={styles.cartContainer}>
       
        <CartTotal />
        <Cartcontent />
        </div>
        <Footer />
        </>
  )
}

export default CartPage