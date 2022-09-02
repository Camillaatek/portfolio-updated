import About from "./components/about/About";
import Example from "./components/Example";
import Navbar from "./components/navbar/Navbar";
import "./sass/main.scss";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Example />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
