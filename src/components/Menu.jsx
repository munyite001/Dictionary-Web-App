import Font from "./Font.jsx"

export default function Menu() {
    return (
        <header className="menu">
            <nav>
                <div className="logo">
                    <img src="../../Images/dict-icon.png" alt="Dictionary web app" />
                </div>
                <div className="nav-container">
                    <Font />
                    <span className="line"></span>
                    <label htmlFor="toggle-theme"></label>
                    <input 
                        type="range" 
                        min="0"
                        max="1"
                        name="toggle-theme" 
                        id="toggle-theme" />
                        <i className="fas fa-moon theme-icon"></i>
                </div>
            </nav>
        </header>
    )
}