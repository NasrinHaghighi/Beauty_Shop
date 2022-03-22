import React from 'react'
import styles from './ModalAddress.module.css'
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import {userAddressHandler} from '../../redux/action/login'



import Image from 'next/image';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const data={
    state:[
    { name: 'تهران', cities: ['تهران', 'ری', 'شهریار']},
    { name: 'البرز', cities: ['نظرآباد', 'طالقان', 'کرج']},
    { name: 'فارس', cities: ['لار', 'مرودشت', 'شیراز']},
    { name: 'خوزستان', cities: ['شوشتر', 'آبادان', 'اهواز']}
]}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalAddress=({onClose})=> {
  const dispatch =useDispatch()
    const formik = useFormik({
        initialValues:
        
        {address: '',
        state:'تهران',
        city: '',
        plak:'',
        num:'',
        code:'',
        byMyself:'',
        name:'',
        lastName:'',
        phone:'',
     },
     onSubmit:(values)=>{
         dispatch(userAddressHandler(values))
         if(values){
           onClose()
         }
        },
     validate: values=>{
         ///values.name values.plak ....
         //errors.name ...
         //errors.name ='message'
     let errors ={}

         if(!values.city){
        errors.city ='وارد کردن نام شهر اجباری است.'
         }
         if(!values.address){
            errors.address ='وارد کردن نشانی پستی اجباری است.'
        }
         if(!values.plak){
          errors.plak ='وارد کردن پلاک اجباری است.'
         }
          if(!values.num){
        errors.num ='وارد کردن واحد اجباری است.'
         }
         if(!values.code){
            errors.code ='وارد کردن کد پستی اجباری است.'
             }else if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.code)){
                errors.code ='کد پستی وارد شده معتبر نمی باشد'
           }
           if(!values.name){
            errors.name ='وارد کردن واحد اجباری است.'
             }
             if(!values.lastName){
                errors.lastName ='وارد کردن واحد اجباری است.'
                 }
                 if(!values.phone){
                    errors.phone ='وارد کردن واحد اجباری است.'
                      }
                  
                  //lse if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone)){
                  //       errors.phone ='شماره وارد شده معتبر نمی باشد '
                  //  }
         
         return errors
     }

    })
    const availableCities= data.state.find((item)=>{
        if(item.name === formik.values.state){
          return item
        }
     })
 
 
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
       <div className={styles.header}>
           
           <span>جزییات آدرس</span>
           <span className={styles.icon} onClick={onClose}>+</span>
      </div>
      <form onSubmit={formik.handleSubmit}>

        {/* ..........STATE AND CITYES ...............*/}
     {/* <StateCity data={data} value={formik.values}/> */}
     <div className={styles.container}>
        <div className={styles.formControl}>
         <label className={styles.label}>استان *</label>
            <select
            name='state'
            className={styles.select}
            onBlur={formik.handleBlur}
           value={formik.values.state}
            onChange={formik.handleChange}
        >
          {data.state.map((item, key) => {
             return (
                <option value={item.name} key={key}>
                  {item.name}
                </option>
              );
          })}
            </select>
         </div>


{/* ------------------------cities */}
         <div className={styles.formControl}>
    <label className={styles.label}>شهر *</label>
         <select 
          name='city'
          className={styles.select}
          placeholder="Cities"
          onBlur={formik.handleBlur}
          value={formik.values.city}
          onChange={formik.handleChange} 
        >
      <option> شهر مورد نظر را انتخاب کنید</option>
       {availableCities ?
         (availableCities.cities.map((item, index)=>{
          return(
            <option value={item} key={index}>
            {item}
          </option>
          )
      }))
      :null
      }  
     
 </select>
 {formik.touched.city && formik.errors.city ? <div className={styles.error}>{formik.errors.city}</div>: null}
 
 </div>
 
    </div>
  
{/*---------- address posti */}
     <div className={styles.fildes}>
     <label for="address" className={styles.label}> نشانی پستی :*</label>
      <input
       type="text"
        id="address"
         name="address"
         onBlur={formik.handleBlur}
         value={formik.values.address}
         onChange={formik.handleChange} placeholder='...'/>
         {formik.touched.address && formik.errors.address ? <div className={styles.error}>{formik.errors.address}</div>: null}
     </div>
{/*---------- PELAK */}
<div className={styles.fildes1}>
      <div className={styles.plakRow}>
          <label for="plak" className={styles.label}> پلاک:* </label>
          <input 
          type="text"
           id="plak"
            name="plak" 
            onBlur={formik.handleBlur}
            value={formik.values.plak}
            onChange={formik.handleChange} 
            />
              {formik.touched.plak && formik.errors.plak ? <div className={styles.error}>{formik.errors.plak}</div>: null}
      </div>
      <div className={styles.plakRow}>
         <label for="num" className={styles.label}> واحد:* </label>
         <input 
         type="text" 
         id="num" 
         name="num" 
         onBlur={formik.handleBlur}
         value={formik.values.num}
         onChange={formik.handleChange}
        />
         {formik.touched.num && formik.errors.num ? <div className={styles.error}>{formik.errors.num}</div>: null}
      </div>
      <div className={styles.plakRow}>
         <label for="code" className={styles.label}> کد پستی:* </label>
         <input
          type="text"
           id="code"
            name="code"
            onBlur={formik.handleBlur}
            value={formik.values.code}
            onChange={formik.handleChange}
           />
             {formik.touched.code && formik.errors.code ? <div className={styles.error}>{formik.errors.code}</div>: null}
         <div className={styles.subTit}>کد پستی باید 10 رقم و بدون خط تیره باشد</div>
      </div>
      <div className={styles.checkBox}>
      <label className={styles.labelCheckbox}>  
          <input 
          type="checkbox"
          name='byMyself'
          onBlur={formik.handleBlur} 
          value={formik.values.byMyself}
            onChange={formik.handleChange}
          />گیرنده سفارش خودم هستم
        </label>
      </div>
     </div>
{/*---------- name and famill */}
<div className={styles.fildes2}>
      <div className={styles.nameRow}>
          <label for="name" className={styles.label}> نام:* </label>
          <input
           type="text"
           onBlur={formik.handleBlur}
            id="name"
             name="name"
             value={formik.values.name}
             onChange={formik.handleChange}
             />
                 {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div>: null}
      </div>
      <div className={styles.lastnameRow}>
         <label for="lastName" className={styles.label}> نام خانوادگی:* </label>
         <input
          type="text" 
          onBlur={formik.handleBlur}
          id="lastName"
           name="lastName"
           value={formik.values.lastName}
           onChange={formik.handleChange}
         />
           {formik.touched.lastName && formik.errors.lastName ? <div className={styles.error}>{formik.errors.lastName}</div>: null}
      </div>

      </div>
      {/*---------- phone */}
      <div className={styles.fildes3}>
          <label for="phone" className={styles.label}> شماره موبایل گیرنده:* </label>
          <input
           type="text" 
           id="phone"
            name="phone" 
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder='lll'/>
              {formik.touched.phone && formik.errors.phone ? <div className={styles.error}>{formik.errors.phone}</div>: null}
    
      </div>
      
     <button type='submit' className={styles.submitBtn} 
   //onClick={formik.values && onClose}
     >تایید و ثبت آدرس</button>
   
      </form>
      </Box>
    </Fade>

  </Modal>
  )
}

export default ModalAddress