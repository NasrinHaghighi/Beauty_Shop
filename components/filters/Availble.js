import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from '@mui/material';
import {availabilityChangeHandel} from '../../redux/action/products'

import styles from './Availble.module.css'

const  Availble=()=>{
  const dispatch =useDispatch()
  const filterOption= useSelector(state=>state.filterOption)
  const checked1=filterOption.availability
  return <>
  
  
  <FormGroup className={styles.availble}>
           <FormControlLabel control={<Checkbox
           checked={checked1}
             onChange={(e)=>dispatch(availabilityChangeHandel(e ))} />} label='فقط کالا های موجود'/>
          </FormGroup>
  
  </>;
}

export default Availble;
