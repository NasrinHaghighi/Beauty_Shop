
import React from 'react'
import useForm from './useForm'
import styles from './InfoForm.module.css'

const InfoForm =()=> {
const {handleChange, values, handleSubmit} =useForm()

  return (
    <div className={styles.infoForm}>
       <p>    مشخصات   </p>
    <form  className={styles.form} onSubmit={handleSubmit} noValidate>
     
      <div  className={styles.input}>
        <label className={styles.label}> نام و نام خانوادگی : *</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='مریم عسکری' 
          value={values.username}
          onChange={handleChange} />      
      </div>
      {/* ---------------------- */}
      <div className={styles.cityState}>
      <div className={styles.input}>
        <label className='form-label' className={styles.label}>استان : *</label>
        <input
          className='form-input'
          type='text'
          name='state'   
          value={values.state}
          onChange={handleChange}/>
       
      </div>
      <div className={styles.input}>
        <label className='form-label' className={styles.label}>شهر : *</label>
        <input
          className='form-input'
          type='text'
          name='city' 
          value={values.city}
          onChange={handleChange}/>
      
      </div>
      </div>
       {/* ---------------------- */}
      <div className={styles.input}>
        <label className='form-label' className={styles.label}>آدرس : *</label>
        <input
          className='form-input'
          type='text'
          name='address'
          value={values.address}
          onChange={handleChange}/>
           
      </div>
           <div className={styles.input}>
        <label className='form-label' className={styles.label}>کد پستی : *</label>
        <input
          className='form-input'
          type='text'
          name='codepost'  
          value={values.codepost}
          onChange={handleChange}/>
      
      </div>
      <div className={styles.input}>
        <label className='form-label' className={styles.label}>شماره همراه : *</label>
        <input
          className='form-input'
          type='text'
          name='phoneNumber'
          value={values.phoneNumber}
          onChange={handleChange}  
           />
      
      </div>

      <div className={styles.input}>
          <label className='form-label' className={styles.label}>ایمیل</label>
          <input
            className='form-input'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
             />
         </div>      
      <button className={styles.submitBtn} type='submit'>
        Sign up
      </button>
     </form>
  </div>
  )
}



export default InfoForm


// // auth | noAuth | delivery
// const [step, setStep ] = useState('')

// useEffect(()=>{
//   if(token){
//     setStep('auth')
//   } else{
//     setStep('noAutn')
//   }
///} , [])