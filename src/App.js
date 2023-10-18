import React, { useState } from "react";
import Landing from "./screens/Landing";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import TopNavbar from "./components/Nav/TopNavbar";
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  },1000)
  
  return (
    <>
     
        <TopNavbar/>
          <Routes>
            <Route path={"/"} element={<Landing />} />
            {/*<Route path="/success" element={</>} />*/}
          </Routes>
          <Footer />
      
    </>
  );
}

export default App;
