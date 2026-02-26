import { useState } from "react";

function Skills() {
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div>
            <button onClick={() => setShowSkills(!showSkills)}>
                {showSkills ? "Hide Skills" : "Show Skills"}
            </button>

            {showSkills && (
                <section className="card">
                    <h2>SKILLS</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>
                            Web Development
                            <ul>
                                <li>
                                    Frontend
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </li>
                                <li>Backend</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Skills;