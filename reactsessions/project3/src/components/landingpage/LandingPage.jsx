import React, { useEffect, useState } from 'react'
import {myAllProducts} from '../../data/products.js'
const LandingPage = () => {
  const [products,setProducts]=useState();

  function loadProducts()
  {
    setProducts(myAllProducts)
  }

  useEffect(
    ()=>{
      loadProducts();
    },[]
  );

  console.log(products)
  return (
    <div>
      {/* <img src="/images/amazonhomepage.jpg" width="1200" height="600"/> */}
    </div>
  )
}

export default LandingPage