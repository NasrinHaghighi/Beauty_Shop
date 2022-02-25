import React , {useState}from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import { ListItem, ListItemButton, Box, Slider } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Collapse } from '@mui/material';
import { textAlign } from '@mui/system';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

import styles from './Brand.module.css'

const Brand =({barndChangeHandel})=> {
    const products = useSelector(state => state.products)
    
   
    //open and clsoe collapse of brand//
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
          setOpen(!open);
          };
  
   
     //  //check for uniqe brand//
     let brands = [...new Set(products.map(item => item.brand))];

  return <>
    
         <List
        sx={{ width: '100%', maxWidth: 470}}
             component="nav"      
            aria-labelledby="nested-list-subheader"
            style={{zIndex:10, margin:10 , padding:10 ,backgroundColor:'#F1F1F1',direction:'rtl' }}
            >

            <ListItemButton >
             <ListItemText primary="برند"  style={{textAlign:'right'}}  onClick={handleClick}/>
               {open ? <IoChevronUp /> : <IoChevronDown />}  
            </ListItemButton>

            <Collapse in={open} timeout="auto" TransitionProps={{ unmountOnExit: true }}>
            <List component="div" className={styles.list}>
               {brands.map((c)=>{
                 return(
                  <ListItem>
                 <FormControlLabel 
                  control={<Checkbox value={c} onChange={barndChangeHandel} />}
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

export default Brand;
