import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import Navbar2 from '../../components/navbar/Navbar2';

function ProfileLinks() {
    const router =useRouter()
const profileId = router.query.profileId
  return <>
   <Navbar2 title3='پروفایل' />
   <div> profile page / {profileId} </div>
    <div>  <Link href='/'><a>Back home</a></Link>     </div> 
  </>
   
}

export default ProfileLinks;
