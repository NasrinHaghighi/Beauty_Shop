import React, {useState} from 'react'
import styles from './ColorPart.module.css'

const  ColorPart=({colors=[]})=> {
    const [mainColor , setMainColor]=useState(colors[0])
   
  return (
    <div className={styles.colors}>
    <span> : رنگ      </span>
    
      <div>
        {colors.map((color, index)=>{
          return(
            <button 
            key={index}
             style={{background:color}}
              className={mainColor === color? styles.colorBtnActive : styles.colorBtn}
              onClick= {()=>setMainColor(color)}
              > 
              
            </button>
          )
        })}
      </div>
    
  </div>
  )
}

export default ColorPart