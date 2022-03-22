import React from 'react'
import Image from 'next/image';
import trash from '../../public/images/Group 187.png'
import ModalAddress from './ModalAddress'
import styles from './Myaddress.module.css'

import {useDispatch,useSelector } from 'react-redux'
const Myaddress =()=> {
  const userAddress = useSelector(state=> state.userAddress)

console.log(userAddress)
    ///close and open modal///
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  return (
    <div className={styles.conatiner}>

        {openModal ? <ModalAddress onClose={handleClose}/>: null}
        <h6>آدرس ها * <span><Image src={trash}/> </span></h6>
        <select className={styles.select}>
           {userAddress.length>0 ?
           userAddress.map((item, index)=>{
             return(
               <option key={index} >
                 
                  {item.address}, {item.plak}, {item.num} 
                 
                </option>
             )
           })
              
           : <option>آدرسی ثبت نشده است.</option>
          }
        </select>
        <button className={styles.add} onClick={handleOpen}> + اضافه کردن آدرس جدید </button>
    </div>
  )
}

export default Myaddress