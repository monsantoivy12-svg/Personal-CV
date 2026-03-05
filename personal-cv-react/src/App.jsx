import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Web Development", children: [
        { name: "Frontend", children: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" }
        ]},
        { name: "Backend" }
    ]}
];

    const education = [
    {
        year: "2010",
        program: "Kindergarten",
        institution: "Inobulan Central School"
    },
    {
        year: "2016",
        program: "Elementary (G4-G6)",
        institution: "Bulua Central School"
    },
    {
        year: "2023",
        program: "TVL-ICT (G11-G12)",
        institution: "Bulua National High School (G7-G10), Indahag National High School"
    },
    {
        year: "2023 - Present",
        program: "BS Information Technology",
        institution: "University of Science and Technology of Southern Philippines"
    }
];

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
            <Skills skills={skills} />
            <Education education={education} />
            <Contact />
        </>
    );
}

export default App;