import React, {useState} from 'react'
import styles from './Register.module.css'

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName=(e)=>{ 
        setName(e.target.value)
      
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    return (
    <>
    {/* Calling to the methods */}
      {/* <div>
      {errorMessage()}
      {successMessage()}
    </div> */}


    <form className={styles.form}>
        <div className={styles.formContainer}>
        <div className={styles.formControl}>
         <label className={styles.label}> نام و نام خانوادگی *</label>
        <input className={styles.input}  value={name} type="text" placeholder='مریم عسکری' onChange={handleName}/>
        </div>
        <div className={styles.formControl}>
         <label className={styles.label}> شماره تلفن همراه*</label>
        <input className={styles.input}  value={phone} type="text"  />
        </div>
        <div className={styles.formControl}>
         <label className={styles.label}> ایمیل *</label>
        <input className={styles.input}  value={email} type="text"  />
        </div>




        </div>




      <button type='submit'>ذخیره</button>
    </form>
    </>
    )
}

export default Register