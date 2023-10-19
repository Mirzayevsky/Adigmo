import React from "react";
import Landing from "./screens/Landing";
import "./App.css";
import Footer from "./components/Footer";
import TopNavbar from "./components/Nav/TopNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SuccessCard from "./screens/SuccessCard";
function App() {

  
  return (
    <>
        <TopNavbar/>
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
