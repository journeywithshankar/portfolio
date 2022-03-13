import {useEffect, useState} from "react";

export function Header() {

    const [ navBarLinks, setNavBarLinks] = useState(true);
    const listItems = { display : navBarLinks ? "block" : "none" };

    const toggleButton = () => {
        // setNavBarLinks(!navBarLinks);
        setNavBarLinks( function(state) {
            return !state;
        })
    }

    useEffect( function() {
        console.log("Current navbar " + navBarLinks);
    },[navBarLinks])
    
    return (
        <header className="header">
            <p className="header-name">Shankar</p>
            <div className="toggle-button" onClick={toggleButton}>
                <span className="toggle-button-bar"></span>
                <span className="toggle-button-bar"></span>
                <span className="toggle-button-bar"></span>
            </div>
            <ul className="header-nav-links" style={listItems}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a onClick={() => console.log("clicked")} href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}