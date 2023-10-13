import Landing from "./screens/Landing";
import "./App.css"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import TopNavbar from "./components/Nav/TopNavbar";
import React from "react";
function App() {
  return (
    <BrowserRouter>
        <TopNavbar />

        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            {/*<Route path="/success" element={</>} />*/}
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
