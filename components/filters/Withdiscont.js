import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from '@mui/material';
import {discontChangeHandel} from '../../redux/action/products'

import styles from './Withdiscont.module.css'
const Withdiscont=()=> {

  const dispatch =useDispatch()
  const filterOption= useSelector(state=>state.filterOption)
  return <>
  
  <FormGroup className={styles.discont}>
           <FormControlLabel control={<Checkbox onChange={()=>dispatch(discontChangeHandel(filterOption ))}/>} label='فقط کالا های تخفیف دار'/>
          </FormGroup>
  
  </>;
}

export default Withdiscont;
