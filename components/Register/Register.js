import React, {useState, useEffect} from 'react'
import styles from './Register.module.css'
import { useFormik } from 'formik';
import {useDispatch , useSelector} from 'react-redux'
import {userRegisterInfoHandler} from '../../redux/action/login'

const Register = () => {
  const dispatch = useDispatch()
  
 
const [sucsses, setSucces]= useState(false)


    useEffect(() => {
     let timeout
     if (sucsses) {
       timeout = setTimeout(() => setSucces(false), 2000);
    }
  
     return () => clearTimeout(timeout);
 }, [sucsses]);

const formik = useFormik({
  initialValues:
    {fullName: '',
   phone:'',
   email:'',},
   onSubmit:(values)=>{
    setSucces(true)
    dispatch(userRegisterInfoHandler(values))
  console.log(values)
   },
   validate: values=>{
    ///values.name values.plak ....
    //errors.name ...
    //errors.name ='message'
let errors ={}

  
    if(!values.fullName){
       errors.fullName ='وارد کردن نام کامل اجباری است.'
   }
   if(!values.phone){
               errors.phone ='وارد کردن واحد اجباری است.'
                 }       
             else if(!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone)){
                    errors.phone ='شماره وارد شده معتبر نمی باشد '
               }
 if(!values.email){
                errors.email ='وارد کردن ایمیل اجباری است.'
                  }       
               else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
                     errors.email ='ایمیل وارد شده معتبر نمی باشد '
                }
    
    return errors
}
})


    return (
    <>
    {sucsses ? <p className={styles.sucsses}>اطلاعات و مشخصات شما با موفقیت ذخیره شد</p> : null} 
    <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.formContainer}>
        <div className={styles.formControl}>
         <label className={styles.label}> نام و نام خانوادگی *</label>
        <input className={styles.input}
          type="text" placeholder='مریم عسکری'
          name="fullName"
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          />
           {formik.touched.fullName && formik.errors.fullName ? <div className={styles.error}>{formik.errors.fullName}</div>: null}
        </div>
        


        <div className={styles.formControl}>
         <label className={styles.label}> شماره تلفن همراه*</label>
        <input className={styles.input}   type="text" 
        name="phone"
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone ? <div className={styles.error}>{formik.errors.phone}</div>: null}
        </div>
        


        <div className={styles.formControl}>
         <label className={styles.label}> ایمیل *</label>
        <input className={styles.input}     type="email"
         name="email"
         onBlur={formik.handleBlur}
         value={formik.values.email}
         onChange={formik.handleChange}
        />
         {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div>: null}
        </div>
        </div>
        <input type="submit" value='ذخیره' className={styles.submitBtn}/>
    </form>
   
    </>
    )
}

export default Register

  //  useEffect(() => {
  //   let timeout
  //   if (sucsses) {
  //     timeout = setTimeout(() => setSucces(false), 2000);
  //   }
  
  //   return () => clearTimeout(timeout);
  // }, [sucsses]);
 

// const [name, setName] = useState('');
// const [phone, setPhone] = useState('');
// const [email, setEmail] = useState('');

// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState({show:false, msg:''} );

// const handleName=(e)=>{
//   if((e.target.value).length <6){
//     setError({show:true, msg:'نام وارد شده باید بیشتر از 6 حرف باشذ'})
//   }else{
//     setName(e.target.value)
//     setError({show:false, msg:''})
//   }
//    }
// const handleEmail=(e)=>{
//     setEmail(e.target.value)
// }
// const handlePhone=(e)=>{
//   setPhone(e.target.value)
// }
// const handelSubmit=(e)=>{
// e.preventDefault();
// }