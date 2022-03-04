export function Header() {
    return (
        <header className="header">
            <p className="header-name">Shankar</p>
            <a href="/" className="toggle-button">
                <span className="toggle-button-bar"></span>
                <span className="toggle-button-bar"></span>
                <span className="toggle-button-bar"></span>
            </a>
            <nav className="header-nav">
                <ul className="header-nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}