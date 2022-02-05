import React,{ useState } from 'react';
import Select from 'react-select';
import { components } from "react-select";

import styles from './Filterby.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {IoChevronUp } from "react-icons/io5";
import {IoChevronDown} from "react-icons/io5";



import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItem, ListItemButton , Box, Slider} from '@mui/material';
import {ListItemText} from '@mui/material';
import { Collapse }  from '@mui/material';
import { textAlign } from '@mui/system';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup} from '@mui/material';
import FilterRang from './FilterRang';




///make checkbox for dropdown//
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  ////end of checkbox///
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
       backgroundColor: '#F1F1F1',
      direction:'ltr',
      color: state.selectProps.menuColor,
      padding: 20,
      fontSize:'14'
      
    }),
    input:(provided, state) => ({
      ...provided,
      fontSize:'16'
       
     
    }),
}


const Filterby=()=> {
  const products =useSelector(state =>state.products)
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSecend, setOpenSecend] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (e)=>{
    console.log(e.target.checked)
  }
  const handleChange1 =(e)=>{
    console.log(e)
  }


 //check for uniqe categorey//
let categories = [...new Set(products.map(item => item.category))];
//console.log(categories)
let brands = [...new Set(products.map(item => item.brand))];
//console.log(brands)
//how to put farsi category name in the options//
//how to make the first option whit the name of category//




  return (
    <>
 
    <List
    sx={{ width: '500%', maxWidth: 470,  bgcolor: 'background.red' }}
     component="nav"
     aria-labelledby="nested-list-subheader"
     style={{zIndex:10, margin:10 , padding:10 ,backgroundColor:'#ffff'}}
     
     subheader={
      <ListSubheader component="div" id="nested-list-subheader">
 <div className={styles.header}>
   <button>فیلتر براساس</button> 
 <div><button>ذخیره</button> <button>پاک کردن همه</button></div>
 </div>
      </ListSubheader>
      
    }
    
     >
       
        <ListItemButton >
        <ListItemText primary="دسته بندی"  style={{textAlign:'right'}}  onClick={handleClick}/>
          {open ? <IoChevronUp /> : <IoChevronDown />}  
        </ListItemButton>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((c)=>{
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

<div className={styles.line}></div>

        <ListItemButton >
        <ListItemText primary="برند"  style={{textAlign:'right'}}  onClick={()=>setOpenSecend(!openSecend)}/>
          {openSecend ? <IoChevronUp /> : <IoChevronDown />}  
        </ListItemButton>
        <Collapse in={openSecend} timeout="auto" unmountOnExit style={{overflowY:'scroll', height:100}}>
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

        {/* line 3..................... */}
        <div className={styles.line}></div>
        <FormGroup>
           <FormControlLabel control={<Checkbox defaultChecked />} label="فقط کالاهای موجود
      " />
       </FormGroup>
       <div className={styles.line}></div>
       <FormGroup>
           <FormControlLabel control={<Checkbox defaultChecked />} label="فقط کالا های تخفیف دار   " />
       </FormGroup>
        {/* line 4 .........................*/}
        <FilterRang />
    
      </List>
   
      


      </>
  )
  
}

export default Filterby;



{/* <select name="categoty"  className='categoty' className={styles.select}> 
{/* first option by disable */}
///{categories.map((c, index)=><option className={styles.options} key={index} >{c}</option>) }

 //</select> */}



  
      {/* <Multiselect
options={categories} // Options to display in the dropdown
isObject={false}
//selectedValues={'bbbbbbbb'} // Preselected value to persist in dropdown
onSelect={(e)=>console.log(e)} // Function will trigger on select event
onRemove={(e)=>console.log(e)} // Function will trigger on remove event
//displayValue="name" // Property name to display in the dropdown options
showCheckbox
/> */}


//// <div className={styles.categoryHeader}> <p>دسته بندی</p><span>2</span> </div>
        
// <form className={styles.CategoryForm}>
// <div className={styles.item}> <input type="checkbox" id="skin" name="skin" className={styles.input}/>
//  <label for="skin">پوست</label>
// </div>
// <div className={styles.item}> <input type="checkbox" id="hair" name="hair" className={styles.input}/>
//  <label for="hair">مو</label>
// </div>
// <div className={styles.item}> <input type="checkbox" id="face" name="face" className={styles.input}/>
//  <label for="face">صورت</label>
// </div>

// </form>

// <div className={styles.categoryHeader}> <p>برند</p><span>2</span> </div>

///  <Select
// styles={customStyles}
// defaultValue={selectedOption}
// onChange={onChange}
// width='460px'
// marginTop='0'
// options={options}
// components={{
//     Option
//   }}
// isMulti
// placeholder={'دسته بندی'}
// />


{/* <div className={styles.categoryContainer}>
<div className={styles.categoryHeader}> <span>دسته بندی</span> <span><IoChevronUp/></span></div>
<ul>
{categories.map((c, index)=>{return()})}
</ul>
</div> */}


{/* <div className={styles.header}>
<p>فیلتر بر اساس</p>
<div className={styles.headerBtn}>
    <button type="submit">ذخیره</button>
    <button type="button">پاک کردن همه</button>
</div>
</div> */}