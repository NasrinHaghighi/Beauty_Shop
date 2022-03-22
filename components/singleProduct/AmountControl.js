import React , {useState} from 'react'
import styles from './AmountControl.module.css'



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