import React from 'react';
import Image from 'next/image';

import profile from '../../public/images/Group 332.png'
import aboutIcon from '../../public/images/Group 336.png'
import contactIcon from '../../public/images/Path 162.png'
import exitIcon from '../../public/images/Group 337.png'
import myorder from '../../public/images/Group 333.png'
import myadress from '../../public/images/Group 334.png'
import myfavoraite from '../../public/images/Group 335.png'

export const sidebarData = [{
        title: 'پروفایل',
        path: '/',
        icon: < Image src = { profile }
        />,
        subNav: [{
                title: 'سفارش های من',
                path: '/profile/myorder',
                icon: < Image src = { myorder }
                />,
            },
            {
                title: 'آدرس های من',
                path: '/profile/myadress',
                icon: < Image src = { myadress }
                />,
            },
            {
                title: 'علاقه مندی ها ',
                path: '/profile/myfavoraite',
                icon: < Image src = { myfavoraite }
                />,
            },

        ]
    },



    {
        title: 'درباره ما',
        path: '/about',
        icon: < Image src = { aboutIcon }
        />
    },
    {
        title: 'ارتباط با ما',
        path: '/contact',

        icon: < Image src = { contactIcon }
        />
    },
    {
        title: 'خروج',
        path: '/',
        //back to home//
        icon: < Image src = { exitIcon }
        />

    },


]