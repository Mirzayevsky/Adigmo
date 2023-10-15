import React, { useState } from "react";
import Landing from "./screens/Landing";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TopNavbar from "./components/Nav/TopNavbar";
import Loader from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  },1000)
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopNavbar />
          <Routes>
            <Route path={"/"} element={<Landing />} />
            {/*<Route path="/success" element={</>} />*/}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
