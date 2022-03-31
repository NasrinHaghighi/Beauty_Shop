import React, { useState } from 'react';
import Select from 'react-select';
import { components } from "react-select";

import styles from './Filterby.module.css'
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Category from './Category';
import Brand from './Brand'
import Withdiscont from './Withdiscont'
import Availble from './Availble'



import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import filterIcon from '../../public/images/Group 115.png'
import Image from 'next/image';
import { ListItem, ListItemButton, Box, Slider } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Collapse } from '@mui/material';
import { textAlign } from '@mui/system';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from '@mui/material';
import FilterRang from './FilterRang';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useSelector, useDispatch } from 'react-redux';

import { fillterProductsHandler} from '../../redux/action/products'
import {clearAllProducts} from '../../redux/action/products'
import {clearFilterOption} from '../../redux/action/products'




const Filterby = () => {
 
  const dispatch=useDispatch()
  const filterOption = useSelector(state=>state.filterOption)
  //console.log(filterOption)ok
  //open and close collapse//
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleClose = () => {
     setAnchorEl(null);
   };


   
  return(
    <div className={styles.filterBtnConatiner}>
    <Button
     className={styles.filterBtn}
     id="basic-button"
     aria-controls={open ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}
     > <Image src={filterIcon}/> <span className={styles.btn}>فیلتر بر اساس </span>
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ horizontal: "right" }}
      >


        {/* ****start of fliter menu***** */}
       <div className={styles.filterMenu}>

         {/* ****start of fliter menu -HEADER***** */}
         <div className={styles.header}> 
         <div className={styles.headerBtn}>
           <button type='button' onClick={()=>{handleClose();dispatch(clearAllProducts()); dispatch(clearFilterOption())}}>پاک کردن همه</button>


           <button  type='button'  onClick={()=>{handleClose();  dispatch(fillterProductsHandler(filterOption))}}>
            
             ذخیره</button>


         </div>
         <p>فیلتر براساس</p>
          </div>
          {/* ****END of fliter menu -HEADER***** */}
        <MenuItem className={styles.filteritems}>
   
   <Category />
        </MenuItem>
       

        <MenuItem className={styles.filteritems}>
   <Brand  />
 
        </MenuItem>



        <MenuItem className={styles.filteritems}>
   <Withdiscont />
  
        </MenuItem>
        <MenuItem className={styles.filteritems}>
  <Availble />
 
        </MenuItem>
        <MenuItem className={styles.filteritems}>
<FilterRang />

        </MenuItem>
       </div>
      </Menu>
 
    
    </div>
  )

}

export default Filterby;


     //make a array from barnd that user selected//
  //  const [selectedBrand, setSelectedBrand] =useState([])
  //  const barndChangeHandel = (e)=>{
  //        setSelectedBrand([...selectedBrand,e.target.value])
  //    }
       //make a array from category that user selected//
  //  const [selectedCategory, setselectedCategory] =useState([])
  //  const categoryChangeHandel = (e)=>{
  //       setselectedCategory([...selectedCategory,e.target.value])
  //   }
  //   //min price and max price/
  //   const [minPrice, selectMinPrice] =useState(100)
  //   const minPriceChangeHandel = (mp)=>{
  //     selectMinPrice(mp)
  //    }
  //    const [maxPrice, selectMaxPrice] =useState(1000)
  //    const maxPriceChangeHandel = (mp)=>{
  //      selectMaxPrice(mp)
  //     }

  //     ///discont///
  //     const [discont, setDiscont] =useState(false)
  //    const discontChangeHandel = ()=>{
  //     setDiscont(!discont)
  //     } 
  //       ///available///
  //       const [availability, setavailable] =useState(true)
  //       const availableChangeHandel = ()=>{
  //         setavailable(!availability)
  //        } 