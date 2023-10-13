import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Projects from "../components/Sections/projects/Projects";
import Pricing from "../components/Sections/Pricing/Pricing";
import Contact from "../components/Sections/Contact/Contact";
import Header from "../components/Sections/header";
import {BrowserRouter,Router} from "react-router-dom";
import OurService from "../components/Sections/OurService";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Landing = () => {
    return(
        <>
            <Header/>
            <OurService/>
            <AboutUs/>
            <Projects />
            <Pricing />
            <Contact />
        </>
    )
}
export default Landing