

export function Home() {
    return (
            <div className="home-container" id="home">
                <div className="home-text-container">
                    <div className="home-text">
                        <h1>Hey, I am a <span>Full Stack Developer</span></h1>
                        <p>This is Shankar. I help brands turn their ideas into high quality websites.</p>
                        <div className="home-links-container">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Shankarprince" className="home-links">Github</a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shankarprince" className="home-links">LinkedIn</a>
                            <a target="_blank" rel="noreferrer" href="https://1drv.ms/b/s!Ar__fgdOQHy3aUHZSt3OXRuzSfg" className="home-links">Resume</a>
                        </div>

                    </div>
                </div>
                <div className="home-image-container">
                    <img className="home-image" src={require("../Images/photo1.jpg")} alt="mypic"></img>
                </div>
            </div>
    );
}
