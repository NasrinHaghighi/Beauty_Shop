import React from 'react'
import styles from './AmountControl.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment,  decrement} from '../../redux/action/products'


const AmountControl =()=> {
    const amount = useSelector(state=> state.amount)
    const dispatch=useDispatch()

  return (
    <div className={styles.container}> 
     
        
        <div className={styles.content}>
            <button onClick={()=>dispatch(increment())}>+</button>
                <span>{amount}</span>
            <button onClick={()=>dispatch(decrement())}>-</button>
            
            </div>
        <span>  : تعداد </span>
    </div>
  )
}

export default AmountControl