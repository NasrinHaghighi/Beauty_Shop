import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import Navbar2 from '../../components/navbar/Navbar2';
import Aside from '../../components/profile/Aside';

function ProfileLinks() {
    const router =useRouter()
const profileId = router.query.profileId


  return <>
   {/* <Navbar2 title3='پروفایل' />
    
   <div>fffffffffffff</div>
   <Aside />
         
  
   */}
  </>
   
}

export default ProfileLinks;
