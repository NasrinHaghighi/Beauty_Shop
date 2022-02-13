import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab';
import { TabPanel } from '@mui/lab';
import styles from './TabPart.module.css'

import Description from './Description';
import Propertytable from './Propertytable'
import Usercomments from './Usercomments';




const TabPart = ({...singleProduct})=>{
  const {name, garanty, discont ,price ,colors, likes, comments,description, identificationCode} =singleProduct
  console.log(name)
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <Box className={styles.box} sx={{ width: '100%' }}>
<TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="نقد و بررسی" value="1" className={styles.tab}/>
            <Tab label="مشخصات" value="2" className={styles.tab}/>
            <Tab label="دیدگاه کاربران" value="3" className={styles.tab}/>
          </TabList>
        </Box>
        <TabPanel value="1" className={styles.TabPanel}> <Description {...singleProduct}/></TabPanel>
        <TabPanel value="2" className={styles.TabPanel}><Propertytable {...singleProduct}/></TabPanel>
        <TabPanel value="3" className={styles.TabPanel}><Usercomments  {...singleProduct}/></TabPanel>
      </TabContext>
    </Box>
  )
}
export default TabPart

