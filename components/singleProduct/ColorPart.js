import React, {useState} from 'react'
import styles from './ColorPart.module.css'
import {colorSelected} from '../../redux/action/products'

const  ColorPart=({mainColor, selectColor, ...singleProduct})=> {
  const {colors}= singleProduct
    
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
              onClick={() => {selectColor(color)}}
                           > 
              
            </button>
          )
        })}
      </div>
    
  </div>
  )
}

export default ColorPart