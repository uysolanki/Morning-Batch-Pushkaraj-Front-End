import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect } from "react";


const SingleProduct = () => {
  const { id } = useParams();

  const [product,setProduct]=useState({})

  async function loadProduct()
  {
    const fetchedProduct= await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(fetchedProduct.data)
    console.log(product)
  }

  useEffect(
    ()=>{
      loadProduct()
    },[]
  )

  return (
    <div>
     <ProductCard key={product.id} product={product}/>
      <Link to="/">
        <button>Hompage</button>
      </Link>
    </div>
  );
};

export default SingleProduct;
