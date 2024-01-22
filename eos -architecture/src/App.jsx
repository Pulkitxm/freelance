import React, { useEffect, useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Workshops from "./components/Workshops";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  const [highlight, setHighlight] = useState(false);
  const homeRef = React.useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const homeInnerHeight = homeRef.current
        ? homeRef.current.clientHeight
        : 0;
      const scrollPosition = window.scrollY;
      const homeHeight = window.innerHeight;
      if (scrollPosition < homeHeight + homeInnerHeight) {
        setHighlight(false);
      } else {
        setHighlight(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(highlight);
  }, [highlight]);

  return (
    <div className="app">
      <Navbar highlight={highlight} />
      <Home homeref={homeRef} />
      <About />
      <Contact />
      <Workshops />
      <Projects />
      <Community />
      <Products />
    </div>
  );
};

export default App;
