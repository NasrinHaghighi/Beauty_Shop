import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab';
import { TabPanel } from '@mui/lab';
import styles from './Myorders.module.css'
 import Onprocessing from './Onprocessing'
 import Delivered from './Delivered'

const Myorders =()=> {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
      <Box className={styles.box} sx={{ width: '100%' }}>
    <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: '#FFF' }} >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="در حال پردازش" value="1" className={styles.tab}/>
              <Tab label="تحویل شده" value="2" className={styles.tab}/>
             
            </TabList>
          </Box>
          <TabPanel value="1" className={styles.TabPanel}><Onprocessing /> </TabPanel>
          <TabPanel value="2" className={styles.TabPanel}><Delivered /></TabPanel>
         
        </TabContext>
      </Box>
    )
}

export default Myorders