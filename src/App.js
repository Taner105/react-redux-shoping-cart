import React from "react";
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Products from "./components/Products";
import Cart from "./components/Cart";



const App = () => {
  
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
      <Routes>
         <Route path="/" element={<Products/>} />
         <Route path="/cart" element={<Cart/>} />
      </Routes>
     
    </div>
  );
}


export default App;