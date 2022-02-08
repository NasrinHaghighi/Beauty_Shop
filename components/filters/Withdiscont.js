import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from '@mui/material';
import styles from './Withdiscont.module.css'
const Withdiscont=()=> {
  return <>
  
  <FormGroup className={styles.discont}>
           <FormControlLabel control={<Checkbox defaultChecked />} label='فقط کالا های تخفیف دار'/>
          </FormGroup>
  
  </>;
}

export default Withdiscont;
