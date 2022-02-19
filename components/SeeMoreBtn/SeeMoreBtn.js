import React from 'react'
import Link from 'next/link'

import styles from './SeeMoreBtn.module.css'

const SeeMoreBtn =()=> {
  return (
    <div className={styles.container}>
     <div className={styles.line}></div>
      <button type='button' ><Link href={'/products'}><a>مشاهده بیشتر</a></Link></button>
    </div>
  )
}

export default SeeMoreBtn