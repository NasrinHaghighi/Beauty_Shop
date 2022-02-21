import React from 'react'
import styles from './CartModal.module.css'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {removeItemCart} from '../../redux/action/cart'
import {useDispatch} from 'react-redux'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:1500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CartModal =({onClose , id}) =>{
  const dispatch=useDispatch()
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style} className={styles.modal}>
      
        <Typography id="transition-modal-description" sx={{ mt: 2 }} className={styles.text} >
        ? آیا نسبت به حذف این محصول اطمینان دارید 
         </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }} className={styles.btn}>
       
           <button className={styles.yes} onClick={()=>{dispatch(removeItemCart(id)); onClose}}>بله</button> 
           <button onClick={onClose} className={styles.no}>خیر</button>
        </Typography>
        
      </Box>
    </Fade>

  </Modal>
  )
}

export default CartModal