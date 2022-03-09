import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Onprocessing.module.css'
import Nofound from './Nofound'

const Onprocessing =() =>{
    const cart = useSelector(state=> state.cart)
	if(cart.length>0){
  return (
    <div>
<table className={styles.table}>
	<thead>
		<tr>
			<th className={styles.th}>ردیف</th>
			<th className={styles.th}>نام محصول</th>
			<th className={styles.th}>تاریخ ثبت سفارش</th>
			<th className={styles.th}>مبلغ (تومان)</th>
			<th className={styles.th}>وضعیت پرداخت</th>
			<th className={styles.th}>وضعیت سفارش</th>
		</tr>
	</thead>
	<tbody>
    {cart.map((item, index)=>{
       
        return(
        <tr>
			<td  className={styles.td}>{index+1}</td>
			<td  className={styles.td}>{item.name}</td>
			<td  className={styles.td}>1400/01/21</td>
			<td  className={styles.td}>{item.price}</td>
			<td  className={styles.td}>پرداخت شده</td>
			<td  className={styles.td}> آماده ارسال</td>
		</tr> 
        )
    })}
       	
	</tbody>
</table>

    </div>
  )  }else{
	return(
	  <Nofound />
	)
 
}
}

export default Onprocessing