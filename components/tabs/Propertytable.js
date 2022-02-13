import React , {useState} from 'react'
import styles from './Propertytable.module.css'

 const Propertytable = ({...singleProduct}) => {
    const {name, model} =singleProduct

const length= singleProduct.properties.length
console.log(length)

    const [tableRow , setTableRow] = useState(4)

    const openTable=()=>{
        if(tableRow === 4){
            setTableRow(length)
        }else{
            setTableRow(4)
        }
       
  }
  ////transition for open and close table///
  return (
   <>
<p className={styles.title}>مشخصات کالا</p>
<p className={styles.name}>{name} مدل {model}</p>
<p className={styles.title}>مشخصات</p>
<table className={styles.table}>
	<tbody>
{singleProduct.properties.slice(0,tableRow).map((item)=>{
    return(
     <tr className={styles.tr}>
        <td className={styles.td}>{item.title} </td>
        <td className={styles.td}>{item.value} {item.megid}</td>
     
      </tr>
    )
})}
	</tbody>
</table>
<button type='button' className={styles.showMore} onClick={openTable}>نمایش کامل مشخصات کالا</button>
   </>
  )
}


export default Propertytable
