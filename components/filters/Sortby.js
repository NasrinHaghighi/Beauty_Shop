import React from 'react';
import styles from './Sortby.module.css'

import {sortProducts} from '../../redux/action/products'

import { useDispatch, useSelector } from 'react-redux';
import sortIcon from '../../public/images/Group 117.png'
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

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
      type: "گران ترین", 
      value:'mostExpensive' 
    }, 
    {  
      id: 6,     
      type: "ارزان ترین", 
      value:'mostCheapest' 
    }, 
     ];  

const  Sortby =()=> {
  const filtered =useSelector(state=>state.filtered)
  const dispatch =useDispatch()



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  

  return <>
  <div className={styles.sortBtnConatiner}>
      
  <Button
   className={styles.sortBtn}
   id="basic-button"
   aria-controls={open ? 'basic-menu' : undefined}
   aria-haspopup="true"
   aria-expanded={open ? 'true' : undefined}
   onClick={handleClick}
     > 
     <Image src={sortIcon}/> <span className={styles.btn}>مرتب سازی بر اساس </span>
     </Button>


     <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
        onClose={handleClose}
        getContentAnchorEl={null}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ horizontal: "center" }}
        className={styles.sortmenu}
      >
        <p className={styles.title}>مرتب سازی براساس</p>
          {data.map((d)=>{
            return(<MenuItem key={d.id} onClick={ () => {handleClose(); dispatch(sortProducts(d.value, filtered))}} className={styles.sortitem}>{d.type}</MenuItem>)
          })}
         

      </Menu>
 
  </div>
  
  {/* <div className={styles.sortContainer}>
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
     
  
  
  
  </div>; */}
  </>
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