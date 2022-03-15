import React, {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import List from '@mui/material/List';
import { ListItem, ListItemButton, Box, Slider } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Collapse } from '@mui/material';
import { textAlign } from '@mui/system';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import {categotyChangeHandel} from '../../redux/action/products'




const Category =()=> {
  const dispatch=useDispatch()
 ///open and close collapse//
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
      };

//  //check for uniqe categorey//
const products = useSelector(state => state.products)
const filterOption= useSelector(state=>state.filterOption)

let categories = [...new Set(products.map(item => item.category))];
//console.log(categories)
    
  //  const categoryChangeHandel=(e)=>{
  //   filterOption.map((item)=>{
  //     item.selectedCategory.push(e.target.value)
  //   })
  //  }
  return <>
    
         <List
        sx={{ width: '100%', maxWidth: 470}}
             component="nav"      
            aria-labelledby="nested-list-subheader"
            style={{zIndex:10, margin:10 , padding:10 ,backgroundColor:'#F1F1F1',direction:'rtl' }}
            >

            <ListItemButton >
             <ListItemText primary="دسته بندی"  style={{textAlign:'right'}}  onClick={handleClick}/>
               {open ? <IoChevronUp /> : <IoChevronDown />}  
            </ListItemButton>

            <Collapse in={open} timeout="auto" TransitionProps={{ unmountOnExit: true }}>
            <List component="div">
               {categories.map((c, index)=>{
                 return(
                  <ListItem >
                 <FormControlLabel 
                  control={<Checkbox value={c}  onChange={(e)=>dispatch(categotyChangeHandel(e, filterOption))}/>}
                  label={c}
            />
                </ListItem>
                )
              })}
            </List>
            </Collapse>
            </List>
  </>;
}

export default Category;
