import React from 'react'
import styles from './CartContent.module.css'

import {useSelector, useDispatch} from 'react-redux'

const Cartcontent=()=> {
  const cart = useSelector(state=>state.cart)
  return (
    <div className={styles.cartContent}>
     
    </div>
  )
}

export default Cartcontent