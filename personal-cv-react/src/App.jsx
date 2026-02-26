import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // This runs whenever darkMode changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
      
        <>
            {/* Toggle Button */}
            <button
                id="themeToggle"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            <Header />
            <About />
            <Skills />
            <Education />
            <Contact />
        </>
    );
}

export default App;