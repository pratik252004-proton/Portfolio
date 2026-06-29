import React from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import AwardsCertification from "./sections/AwardsCertification";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import OverlayMenu from "./components/OverlayMenu";
import IntroAnimation from "./components/IntroAnimation";

export default function App(){
  const [introDone , setIntroDone] = React.useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}
    {introDone && (
    <div className="relative gradient text-white/40">
    <CustomCursor/>
    <OverlayMenu/>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <AwardsCertification/>
    <Contact/>
    <Footer/>
    </div>
    )}
    </>
  )
}
