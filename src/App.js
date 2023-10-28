import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";


function App() {

  
  return (
    <>
        <Navbar/>
               <BrowserRouter>
                   <Routes>
                       <Route path={"/"} element={<Home/>}/>
                       <Route path="/success" element={ <Success/>} />
                   </Routes>
               </BrowserRouter>
          <Footer />
         
      
    </>
  );
}

export default App;
