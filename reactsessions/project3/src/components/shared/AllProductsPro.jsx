import React, { useEffect, useState } from 'react'
import {myAllProducts} from '../data/products.js'
import ProductCard from './ProductCard.jsx';
import NavList from './shared/NavList.jsx';
import Searchbar from './shared/Searchbar.jsx';
const AllProductsPro = () => {

    const [products,setProducts]=useState([])
    const [buproducts,setBuproducts]=useState([])

    
    const allcat=products.map(    //buproducts.map
      (prod)=> prod.category
    )

    const uniqueCat=[...new Set(allcat),'All']
    console.log(uniqueCat)

    function loadProducts()
    {
        setProducts(myAllProducts)
        setBuproducts(myAllProducts)  
    }

    useEffect(
        ()=>{
            loadProducts();
          },[]
    )

    function filterProductByCategory(value)
    {
      if(value!=='All')
      {
      const filteredProducts=buproducts.filter(
            (prod)=>prod.category===value
          )
      setProducts(filteredProducts);
      }
      else
      {
        setProducts(buproducts);
      }

    }
  
    function seacrhProductByName(event){
      const searchedProducts=buproducts.filter((prod) =>prod.title.includes(event.target.value))
      setProducts(searchedProducts);
    }

    return (
        <div className="container my-4">
          <NavList items={uniqueCat} clickHandler={filterProductByCategory}/>
          <Searchbar clickHandler={seacrhProductByName}/>
          <h1 className="text-center mb-4">Our Products</h1>
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id}product={product}/>
            ))}
          </div>
        </div>
      );
    };

export default AllProductsPro