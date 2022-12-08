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
        path: '',
        icon: < Image alt="img" src = { profile }
        />,
        subNav: [{
                title: 'پروفایل من',
                path: '/profile',
                icon: < Image alt="img" src = { profile }
                />
            },
            {
                title: 'سفارش های من',
                path: '/profile/myorder',
                icon: < Image alt="img" src = { myorder }
                />,
            },
            {
                title: 'آدرس های من',
                path: '/profile/myaddress',
                icon: < Image alt="img" src = { myadress }
                />,
            },
            {
                title: 'علاقه مندی ها ',
                path: '/profile/myfavoraite',
                icon: < Image alt="img" src = { myfavoraite }
                />,
            },

        ]
    },



    {
        title: 'درباره ما',
        path: '/about',
        icon: < Image alt="img" src = { aboutIcon }
        />
    },
    {
        title: 'ارتباط با ما',
        path: '/contact',

        icon: < Image alt="img" src = { contactIcon }
        />
    },
    {
        title: 'خروج',
        path: '/',
        //back to home//
        icon: < Image alt="img" src = { exitIcon }
        />

    },


]