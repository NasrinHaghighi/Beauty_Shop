import React , {useState} from 'react'
import styles from './AmountControl.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment,  decrement} from '../../redux/action/products'


const AmountControl =({increment, mainAmount, decrement} )=> {
 
  return (
    <div className={styles.container}> 
       <div className={styles.content}>
            <button onClick={increment}>+</button>
                <span>{mainAmount}</span>
            <button onClick={decrement}>-</button>
          
            </div>
        <span>  : تعداد </span>
    </div>
  )
}

export default AmountControl