import React from "react";
// Sections
import Projects from "../components/Sections/projects/Projects";
import Pricing from "../components/Sections/Pricing/Pricing";
import Contact from "../components/Sections/Contact/Contact";
import Header from "../components/Sections/header";
import OurService from "../components/Sections/OurService";
import AboutUs from "../components/AboutUs";

const Landing = () => {
    return(
        <>
            <Header/>
            <OurService/>
            <Pricing />
            <Projects />
            <AboutUs/>
            <Contact />
        </>
    )
}
export default Landing