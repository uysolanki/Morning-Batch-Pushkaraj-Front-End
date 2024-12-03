import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UseEffectDemo from "./UseEffectDemo";
import Greet from "./Greet";
import AllProducts from "./components/AllProducts";
import AllProductsPro from "./components/AllProductsPro";
import AllProductsProMax from "./components/AllProductsProMax";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import AllProductsProMaxSuper from "./components/AllProductsProMaxSuper";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route
            path='/'
            element={
              <>
              <AllProductsProMaxSuper/>
              </>
            }
            />

            <Route
            path='/singlepro/:id'
            element={
              <>
              <SingleProduct/>
              </>
            }
            />

        </Routes>
      
        <Footer />
      </Router>
    </div>
  );
};

export default App;
