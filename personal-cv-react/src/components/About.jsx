function About() {
    return (
        <section className="card">
            <h2>ABOUT ME</h2>

            <img 
                src="src/assets/images/profile.jpg" 
                alt="Profile photo" 
                className="profile-2x2" 
            />

            <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:monsanto.ivy12@gmail.com">
                    monsanto.ivy12@gmail.com
                </a>
                <br />

                <strong>GitHub:</strong>{" "}
                <a 
                    href="https://github.com/monsantoivy12-svg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    github.com/monsantoivy12-svg
                </a>
            </p>

            <p>
                Hello! My name is Ivy, you can call me "Ivy". I am 20 years old 
                and I live in Gango, Libona, Bukidnon. I am currently taking 
                a Bachelor of Science in Information Technology at the 
                University of Science and Technology of Southern Philippines (USTP). 
                My hobbies include watching movies, K-drama, and anime. That's all!
            </p>
        </section>
    );
}

export default About;