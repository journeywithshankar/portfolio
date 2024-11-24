

export function Home() {
    return (
            <div className="home-container" id="home">
                <div className="home-text-container">
                    <div className="home-text">
                        <h1>Hey, I am a <span>Full Stack Developer</span></h1>
                        <p>This is Shankar. I help brands turn their ideas into high quality websites.</p>
                        <div className="home-links-container">
                            <a target="_blank" rel="noreferrer" href="https://github.com/journeywithshankar" className="home-links">Github</a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/journeywithshankar" className="home-links">LinkedIn</a>
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/19ioaDS8TfyPDfdO57VcUDDlIj_kRvL0v/view?usp=sharing" className="home-links">Resume</a>
                        </div>

                    </div>
                </div>
                <div className="home-image-container">
                    <img className="home-image" src={require("../Images/photo1.jpg")} alt="mypic"></img>
                </div>
            </div>
    );
}
