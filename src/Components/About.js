export function About() {
    return (
        <div className="about-outer-container" id="about">
            <img className="about-image" src={require("../Images/giphy.webp")} alt="mypic"></img>
            <div className="about-container">
                <h1>About Me</h1>
                <p>Hello,</p>
                <p>I have been studying web development and I develop primarily with React and Node.js. </p>

                <p>I used to provide responsive Frontend interfaces, Backend development and Single Page Web Applications to meet both technical and consumer needs, and see through a project from conception to the end product. Also I have the ability to work with many frameworks, client and server side languages.
                </p>

                <p>Thank you, Enjoy.</p>
            </div>
        </div>
    );
}