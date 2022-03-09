import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import styles from './Register.module.css'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({mode:'onChange'});

const [sucsses, setSucces]= useState(false)
const onSubmit = (data) => console.log(data);

  //  useEffect(() => {
  //   let timeout
  //   if (sucsses) {
  //     timeout = setTimeout(() => setSucces(false), 2000);
  //   }
  
  //   return () => clearTimeout(timeout);
  // }, [sucsses]);
 

    return (
    <>
    {sucsses ? <p className={styles.sucsses}>اطلاعات و مشخصات شما با موفقیت ذخیره شد</p> : null}
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
        <div className={styles.formControl}>
         <label className={styles.label}> نام و نام خانوادگی *</label>
        <input className={styles.input}
          type="text" placeholder='مریم عسکری'
           {...register("firstName", { required:true,  minLength:3, pattern: /^[A-Za-z]+$/i })}/>
        </div>
       {errors.firstName && errors.firstName.type === "required" && <span className={styles.error}>وارد کردن فیلد ستاره دار اجباری است</span>} 
       
        <div className={styles.formControl}>
         <label className={styles.label}> شماره تلفن همراه*</label>
        <input className={styles.input}   type="text" {...register("phone",
        {required: true, minLength: 9 , maxLength: 12, pattern:  /^\d{10}$/ })}/>
        </div>
         {errors.phone && errors.phone.type === "required" && <span className={styles.error}>وارد کردن فیلد ستاره دار اجباری است</span>}
        {errors.phone && errors.phone.type === "maxLength" && <span className={styles.error}>شماره تلفن وارد شده معتبر نیست</span> }
        {errors.phone && errors.phone.type === "minLength" && <span className={styles.error}>شماره تلفن وارد شده معتبر نیست</span> } 
        <div className={styles.formControl}>
         <label className={styles.label}> ایمیل *</label>
        <input className={styles.input}     type="email"  {...register("email",
          { required: true,   pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}/>
        </div>
   {errors.email && errors.email.type === "required" && <span className={styles.error}>وارد کردن فیلد ستاره دار اجباری است</span>}
        {errors.email && errors.email.type === "pattern" && <span className={styles.error}>ایمیل وارد شده معتبر نیست</span> } 
          </div>
        <input type="submit" value='ذخیره' className={styles.submitBtn}/>
    </form>
   
    </>
    )
}

export default Register


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