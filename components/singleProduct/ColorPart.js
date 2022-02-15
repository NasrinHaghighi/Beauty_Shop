import React, {useState} from 'react'
import styles from './ColorPart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {colorSelected} from '../../redux/action/products'

const  ColorPart=({colors=[]})=> {
  const dispatch = useDispatch()
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
              onClick={() => {setMainColor(color);dispatch(colorSelected(color))}}
                           > 
              
            </button>
          )
        })}
      </div>
    
  </div>
  )
}

export default ColorPart