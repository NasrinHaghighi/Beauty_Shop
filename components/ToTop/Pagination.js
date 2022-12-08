import { AddTwoTone } from '@material-ui/icons'
import React, {useState} from 'react'
import Image from 'next/image'

import styles from './Pagination.module.css'
import arrowBlack from '../../public/images/Path 64.png'
import arrowGray from '../../public/images/Group 109.png'
//temporary solution for call the api//
const pages=[{page:1}, {page:2}, {page:3}, {page:4}, {page:5}]

const Pagination=()=> {
    const [page, setPage] =useState(1)


    const changePageHandle = p =>{
        setPage(p)
      
       }
       const AddOnePage=(pa)=>{
           if(page<10){
            setPage(pa+1)
           }
        }
        const AddtwoPage=(pa)=>{
            if(page<10){
             setPage(pa+2)
            }
         }
       console.log(page)
    
  return (
      <>
      
    <div className={styles.conatiner}>
  
        {pages.map((item)=>{
            return(
                <button key={item} className={item.page === page ? styles.active : styles.btn  } onClick={()=>changePageHandle(item.page)}>{item.page}</button>
            )
            
        })}
         <button className={styles.btn} onClick={()=>AddOnePage(page)} >   <Image alt="img" src={arrowBlack}/> </button>
         <button className={styles.btn} onClick={()=>AddtwoPage(page)}>  <Image alt="img" src={arrowBlack}/><Image alt="img" src={arrowGray}/></button>
       

    </div>s
    </>
  )
}

export default Pagination