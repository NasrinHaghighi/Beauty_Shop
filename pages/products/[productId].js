import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';

function ProductItem() {
    const router =useRouter()
const productId = router.query.productId
  return <>
   
   <div>Product Item / {productId} </div>
    <div>  <Link href='/products'><a>Back home</a></Link>     </div> 
  </>
   
}

export default ProductItem;