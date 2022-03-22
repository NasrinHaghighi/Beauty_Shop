import React , {useState} from 'react'
import styles from './Description.module.css'

const Description =({...singleProduct}) =>{
  const {name, description, identificationCode} =singleProduct

  const [showFull , setShowFull] = useState(false)

  const changeToFull=()=>{
    setShowFull(!showFull)
}
  
  return (
    <div className={styles.container}>
      <h6>نقد و بررسی اجمالی</h6>
      <p>{identificationCode} مدل <span>{name}</span></p>
     <div className={styles.description}> {showFull ?  description : `${description.substring(0,500)}...`}</div>



<button type='button' className={styles.showMore} onClick={changeToFull}>نمایش کامل نقد و بررسی</button>
    </div>
  )
}

export default Description