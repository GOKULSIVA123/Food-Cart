import React, { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './Component/Navbar'
import Home from "./Pages/Home"
import Cart0 from './Pages/Cart0';
import { createContext } from 'react';
import Favourite from './Pages/Favourite';
export const cartContent=createContext();
function App() {
  const [Cart,setCart]=useState([]);
   const [Cart1,setCart1]=useState([]);
  return (
    <cartContent.Provider value={{Cart,setCart,Cart1,setCart1}}>
          <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/viewcart"element={<Cart0></Cart0>}></Route>
        <Route path="/Favourite" element={<Favourite></Favourite>}></Route>
      </Routes>

    </>
    </cartContent.Provider>
  )
}

export default App
