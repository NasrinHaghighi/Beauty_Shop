import React from 'react';

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from '@mui/material';

import styles from './Availble.module.css'

const  Availble=()=>{
  return <>
  
  
  <FormGroup className={styles.availble}>
           <FormControlLabel control={<Checkbox defaultChecked />} label='فقط کالا های موجود'/>
          </FormGroup>
  
  </>;
}

export default Availble;
