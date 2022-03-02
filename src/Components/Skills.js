export function Skills() {
    return (
            <div className="skills-outer-container" id="skills">
                <h1>Skills</h1>
                <div className="skills-container">
                    <div className="skill-container">
                        <h3>Frontend</h3>
                        <div className="skill-table">
                            <div>
                                <p className="bar">HTML</p>
                                <p>90%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-html"></span></p>
                            <div>
                                <p className="bar">CSS</p>
                                <p>70%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-css"></span></p>
                            <div>
                                <p className="bar">JavaScript</p>
                                <p>75%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-js"></span></p>
                            <div>
                                <p className="bar">React</p>
                                <p>70%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-react"></span></p>
                        </div>
                    </div>
                    <div className="skill-container">
                        <h3>Backend</h3>
                        <div className="skill-table">
                            <div>
                                <p className="bar">NodeJS</p>
                                <p>70%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-css"></span></p>
                            <div>
                                <p className="bar">ExpressJS</p>
                                <p>70%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-css"></span></p>
                        </div>
                    </div>
                    <div className="skill-container">
                        <h3>Database</h3>
                        <div className="skill-table">
                            <div>
                                <p className="bar">MongoDB</p>
                                <p>70%</p>
                            </div>
                            <p className="skill-bar"><span className="skilled-bar-css"></span></p>
                        </div>
                    </div>
                </div>
            </div>
    );
}