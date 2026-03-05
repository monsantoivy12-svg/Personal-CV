function Education({ education }) {
    return (
        <section className="card">
            <h2>EDUCATION</h2>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Program</th>
                        <th>Institution</th>
                    </tr>
                </thead>
                <tbody>
                    {education.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.institution}</td>
                             <td>{item.program}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Education;