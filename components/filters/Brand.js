import React from 'react';
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


const Brand =()=> {
    const products = useSelector(state => state.products)
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
          setOpen(!open);
          };
          const handleChange = (e)=>{
          console.log(e.target.checked)
         }
     //  //check for uniqe categorey//
     let brands = [...new Set(products.map(item => item.brand))];
    console.log(brands)



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

            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               {brands.map((c)=>{
                 return(
                  <ListItem>
                 <FormControlLabel 
                  control={<Checkbox  onChange={handleChange} />}
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
