import React from 'react';
import {useRouter} from 'next/router'

function ProfileLinks() {
    const router =useRouter()
const profileId = router.query.profileId
  return <div> profile page / {profileId} </div>;
}

export default ProfileLinks;
