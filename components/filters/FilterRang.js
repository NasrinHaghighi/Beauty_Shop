import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './FilterRang.module.css'

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

 const FilterRange =() =>{
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };



  return (
      <>
      <div className={styles.line}></div>
    <Box className={styles.rang}>
        <p>محدوده قیمت ( تومان)</p>
      <Slider
      className={styles.slider}
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <di className={styles.priceContainer}> <p>{value1[0]}</p> <p>{value1[1]}</p>  </di>
     
    </Box>
    </>
  );
}
export default FilterRange
