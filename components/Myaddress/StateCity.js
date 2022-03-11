import React, {useState, useEffect} from 'react'
import styles from './StateCity.module.css'
import { useFormik } from 'formik';

// const data={
//     state:[
//     { name: 'تهران', cities: ['تهران', 'ری', 'شهریار']},
//     { name: 'البرز', cities: ['نظرآباد', 'طالقان', 'کرج']},
//     { name: 'فارس', cities: ['لار', 'مرودشت', 'شیراز']},
//     { name: 'خوزستان', cities: ['شوشتر', 'آبادان', 'اهواز']}
// ]}


const StateCity =({data, value})=> {
    const formik = useFormik({
        initialValues:
    { state: 'تهران',
        city: '' }

    })
 
    const availableCities= data.state.find((item)=>{
       if(item.name === value.state){
         return item
       }
    })
console.log( value)
//console.log(availableCities)

  return (
    <div className={styles.container}>
        <div className={styles.formControl}>
         <label className={styles.label}>استان *</label>
            <select
            name='state'
            className={styles.select}
           value={value.state}
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
          value={value.cities}
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
 </div>
    </div>
  )
}

export default StateCity