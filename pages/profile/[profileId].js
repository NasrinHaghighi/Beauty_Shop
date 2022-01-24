import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';

function ProfileLinks() {
    const router =useRouter()
const profileId = router.query.profileId
  return <>
   
   <div> profile page / {profileId} </div>
    <div>  <Link href='/'><a>Back home</a></Link>     </div> 
  </>
   
}

export default ProfileLinks;
