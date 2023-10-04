import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import Header from "../components/Sections/header";
import {BrowserRouter,Router} from "react-router-dom";

export default function Landing() {
  return (
    <BrowserRouter>
      <TopNavbar />
        <Header/>
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}


