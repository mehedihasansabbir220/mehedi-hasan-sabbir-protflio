import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ScrollToTop } from "./Components/Scroll/Scrolltotop";
import { Preloader } from "./Components/Pre";
// import { Github } from "./Components/About/Github";
// import { Link, Route, Switch, useLocation } from "react-router-dom";
// import { Particle } from "./Components/Home/Particle";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Home2 } from "./Components/Home/Home2";
import { Navbarjsx } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";

export default function App() {
  const [load, setload] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbarjsx />
        <section id="#home">
          <Home />
          <Home2 />
        </section>
        <section id="#about">
          <About />
        </section>
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
        <section id="#resume">
          <Footer />
        </section>
      </div>
    </>
  );
}
