import React from "react";
import Landing from "./screens/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SuccessCard from "./screens/SuccessCard";
function App() {

  
  return (
    <>
        <Navbar/>
               <BrowserRouter>
                   <Routes>
                       <Route path={"/"} element={<Landing />}/>
                       <Route path="/success" element={ <SuccessCard/>} />
                   </Routes>
               </BrowserRouter>
          <Footer />
         
      
    </>
  );
}

export default App;
