import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UseEffectDemo from "./UseEffectDemo";
import Greet from "./Greet";
import AllProducts from "./components/AllProducts";
import AllProductsPro from "./components/AllProductsPro";
import AllProductsProMax from "./components/AllProductsProMax";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <AllProductsProMax />
      <Footer />
    </div>
  );
};

export default App;
