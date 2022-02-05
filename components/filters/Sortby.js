import React from 'react';
import styles from './Sortby.module.css'
import {sortProductsBy} from '../../redux/action/products'
import { useDispatch, useSelector } from 'react-redux';


const data = [  
    {  
      id: 1,  
       type: "پر بازدیدترین ها",  
       value:'mostVisited'
    },  
    {  
      id: 2,     
      type: "پرفروش ترین ها ", 
      value:'bestSeller'

    },  
    {  
      id: 3,  
       type: "محبوب ترین ها",  
       value:'mostPopular'
    },  
    {  
      id: 4,     
      type: "جدید ترین", 
      value:'newest' 
    },  
    {  
      id: 5, 
      type: "گران ترین ها",  
      value:'mostexpensive'
    },  
    {  
        id:6,  
        type: "ارزان ترین ها", 
        value:'cheapest' 
      }, 
  ];  

const  Sortby =()=> {
  const dispatch =useDispatch()
 
  
  

  return <div className={styles.sortContainer}>
    <p>مرتب سازی بر اساس</p>
    <form >
    <div className={styles.sortlist}>
        {data.map((item)=>{
            return (<button type='button' value={item.value} className={styles.itemBtn} key={item.id} onClick={(e)=>console.log(e.target.value)}>
                {item.type}
                </button>)
        })}

    </div>
    </form>
     
  
  
  
  </div>;
}

export default Sortby;


////   {/* <label htmlFor='sortby'>مرتب سازی براساس</label> */}
{/* <select name="sortby" is='sortby' className={styles.sortInput} onChange={(e)=>dispatch(handelSortby(e.target.value))}>
  <option value='mostVisited'>   پربازدیدترین</option>            
<option value='mostVisited'>   پربازدیدترین</option>
<option value='bestSeller'> پرفروش ترین</option>
<option value='mostPopular'>  محبوبترین</option>
<option value='newest'> جدیدترین</option>
<option value='mostٍxpensive'> گران ترین</option>
<option value='cheapest'>  ارزان ترین</option>
</select> */}