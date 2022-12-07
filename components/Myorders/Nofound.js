import React from 'react'
import Image from 'next/image';
import styles from './Nofound.module.css'
import itemNotFound from '../../public/images/Group 423.png'

const Nofound=() =>{
  return (
    <div className={styles.conatiner}>
      <div>  <Image alt='img' src={itemNotFound}/></div>
        </div>
  )
}

export default Nofound