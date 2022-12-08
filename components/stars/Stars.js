import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import fillStar from '../../public/images/Group 31.png'
import nonFillStar from '../../public/images/Group 34.png'

const Stars=({stars})=> {
    //const products =useSelector(state=>state.products)
    //console.log(stars)
  return <div>
        <span>   {stars>=1 ?   <Image alt="img" src={fillStar} />  :  <Image alt="img" src={nonFillStar} />} </span>
        <span>   {stars>=2 ?   <Image alt="img" src={fillStar} />  :  <Image alt="img" src={nonFillStar} />} </span>
        <span>   {stars>=3 ?   <Image alt="img" src={fillStar} />  :  <Image alt="img" src={nonFillStar} />} </span>
        <span>   {stars>=4 ?   <Image alt="img" src={fillStar} />  :  <Image alt="img" src={nonFillStar} />} </span>
        <span>   {stars>=5 ?   <Image alt="img" src={fillStar} />  :  <Image alt="img" src={nonFillStar} />} </span>
  </div>;
}

export default Stars;
