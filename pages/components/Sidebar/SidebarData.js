import React from 'react';
import Image from 'next/image';

import profile from '../../../public/New folder/Group 332.png'
import aboutIcon from '../../../public/New folder/Group 336.png'
import contactIcon from '../../../public/New folder/Path 162.png'
import exitIcon from '../../../public/New folder/Group 337.png'

export const sidebarData = [{
        title: 'پروفایل',
        path: '/',
       
        icon: < Image src = { profile }
        />
    },
    {
        title: 'درباره ما',
        path: '/about',
       
        icon: < Image src = { aboutIcon } />
    },
    {
        title: 'ارتباط با ما',
        path: '/contact',
       
        icon: < Image src = { contactIcon } />
    },
    {
        title: 'خروج',
        path: '/exite',
       
        icon:< Image src = { exitIcon } />

    },


]