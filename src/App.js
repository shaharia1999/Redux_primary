import { Route, RouterProvider, Routes } from "react-router-dom";
import Card from "./Card/Card";
import Favorite from "./Favorite/Favorite";
import Home from "./Home/Home";
import Navber from "./Navber/Navber";
import { createContext, useState } from "react";
import Product_provider from "./Contex/Product_provider";




function App() {

  return (
    <div className="">
      <Product_provider>
      <Navber></Navber>
      <Routes>
        <Route path="/Card"element={<Card/>}></Route>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/Favorite"element={<Favorite/>}></Route>
      </Routes>
      </Product_provider>
   
    </div>
  );
}

export default App;
