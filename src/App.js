import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOme } from "./Home/home";

function Portfolio(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HOme/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Portfolio}