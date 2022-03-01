

export function Home() {
    return (
            <div className="home-container" id="home">
                <div className="home-text-container">
                    <div className="home-text">
                        <h1>Hey, I am a <span>Full Stack Developer</span></h1>
                        <p>Hi, I am Shankar, a Web developer from Chennai. I help brands turn their ideas into high quality websites.</p>
                        <div className="home-links-container">
                            <a target="_blank" rel="noreferrer" href="https://github.com/Shankarprince" class="home-links">Github</a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shankarprince" class="home-links">LinkedIn</a>
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1EWK7jHCQpQqsrHkNiL0i6f1CD5jUtZWI/view?usp=sharing" class="home-links">Resume</a>
                        </div>

                    </div>
                </div>
                <div className="home-image-container">
                    <img className="home-image" src={require("../Images/Photo.jpg")} alt="mypic"></img>
                </div>
            </div>
    );
}