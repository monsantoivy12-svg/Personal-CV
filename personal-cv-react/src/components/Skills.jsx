import { useState } from "react";

function SkillList({ skills }) {
    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>
                    {skill.name}
                    {skill.children && <SkillList skills={skill.children} />}
                </li>
            ))}
        </ul>
    );
}

function Skills({ skills }) {
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div>
            <button onClick={() => setShowSkills(!showSkills)}>
                {showSkills ? "Hide Skills" : "Show Skills"}
            </button>

            {showSkills && (
                <section className="card">
                    <h2>Skills</h2>
                    <SkillList skills={skills} />
                </section>
            )}
        </div>
    );
}

export default Skills;