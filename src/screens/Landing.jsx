import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Projects from "../components/Sections/projects/Projects";
import Pricing from "../components/Sections/Pricing/Pricing";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer"
import Header from "../components/Sections/header";
import {BrowserRouter,Router} from "react-router-dom";
import OurService from "../components/Sections/OurService";

const Landing = () => {
    return(
        <>
            <TopNavbar />
            <Header/>
            <OurService/>
            <Projects />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}
export default Landing