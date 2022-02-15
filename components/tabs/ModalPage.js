import React from 'react'
import styles from './ModalPage.module.css'
import commentIcon from '../../public/images/11431577981582962169.png'

import Image from 'next/image';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


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

const ModalPage=({onClose})=> {
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
            <Typography id="transition-modal-title" variant="h6" component="h2" className={styles.modalHeader}>
            <Image src={commentIcon}/> افزودن دیدگاه
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} >
            عنوان نظر شما
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <TextField  className={styles.textfield}/>
               
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} >
            متن نظر شما (اجباری)           
             </Typography>
             <TextField 
               multiline
               rows={6}
             variant="outlined"
             className={styles.textfield}/>
             <Button >ثبت نظر</Button>
          </Box>
        </Fade>

     
      </Modal>
  )
}

export default ModalPage