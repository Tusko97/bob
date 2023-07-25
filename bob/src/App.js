import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
const [darkMode, setDarkMode] = useState(false)

// Dark mode toggling 
const handleDarkToggle = () => {
  setDarkMode(!darkMode)
}
  return (
    <div className={darkMode? 'dark': ''}>
      <div className="dark:bg-hero bg-hero2">
        <Navbar handleDarkToggle={handleDarkToggle}/>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
