import React, { useEffect, useState } from 'react'
import {myAllProducts} from '../data/products.js'
import ProductCard from './ProductCard.jsx';
const AllProductsPro = () => {

    const [products,setProducts]=useState([])

    function loadProducts()
    {
        setProducts(myAllProducts);
    }

    useEffect(
        ()=>{
            loadProducts();
          },[]
    )

    return (
        <div className="container my-4">
          <h1 className="text-center mb-4">Our Products</h1>
          <div className="row">
            {myAllProducts.map((product) => (
              <ProductCard key={product.id}product={product}/>
            ))}
          </div>
        </div>
      );
    };

export default AllProductsPro