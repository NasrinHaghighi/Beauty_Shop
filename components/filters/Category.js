import React, {useState} from 'react';
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




const Category =()=> {
    const products = useSelector(state => state.products)
    const [open, setOpen] = React.useState(false);

//  //check for uniqe categorey//
let categories = [...new Set(products.map(item => item.category))];
//console.log(categories)

    const [checkedState, setCheckedState] = useState(
      new Array(categories.length).fill(false)
  );
  console.log(checkedState)


    const handleClick = () => {
          setOpen(!open);
          };

    //make a array of the barnd that clicked//      
 const handleChange = (position) => {
     const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
            );
     setCheckedState(updatedCheckedState);
     //console.log(updatedCheckedState)
    const selectedBrand =updatedCheckedState.map((item, i)=>{
     if (item === true){
       return categories[i]
     }
    })
 console.log(selectedBrand)
      }
   
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

            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               {categories.map((c, index)=>{
                 return(
                  <ListItem>
                 <FormControlLabel 
                  control={<Checkbox id={c} checked={checkedState[index]} name={c} onChange={()=>handleChange(index)} />}
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
