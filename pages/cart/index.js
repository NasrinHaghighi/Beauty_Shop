import React , {useState} from 'react'


import Navbar2 from '../../components/navbar/Navbar2'
import Footer from '../../components/footer/Footer'
import Cartcontent from '../../components/cart/CartContent'
import CartTotal from '../../components/cart/CartTotal'
import CartContinue from '../../components/cart/CartContinue'
import Sidebar from '../../components/Sidebar/Sidebar'


import SeeMoreBtn from '../../components/SeeMoreBtn/SeeMoreBtn'
import ReleventProduct from '../../components/singleProduct/ReleventProduct'
import styles from './CartPage.module.css'
import InfoForm from '../../components/InfoForm/InfoForm'

function CartPage() {
  const [changeContent, setChangeContent]=useState(false)

  const handelChangeContent=()=>{
    setChangeContent(true)
  }
  return (<>
  
        <Navbar2  title2='سبد خرید'/>
        <div className={styles.cartContainerMain}>
        <p>سبد خرید</p>
        <div className={styles.cartContainer}>
        <CartTotal handelChangeContent={handelChangeContent} changeContent={changeContent}/>
     
{/* <InfoForm /> */}
         {changeContent ? <CartContinue />: <Cartcontent />} 
      
        </div>
        <ReleventProduct />
        <SeeMoreBtn/>
        </div>
        <Sidebar />
        <Footer />
        </>
  )
}

export default CartPage