/* eslint-disable react/prop-types */
import Font from "./Font.jsx"

export default function Menu({theme, setTheme}) {
    function toggleTheme() {
        if (theme === "light")
        {
            setTheme("dark")
        }
        else
        {
            setTheme("light")
        }
    }
    return (
        <header className="menu">
            <nav>
                <div className="logo">
                    <img src={theme == "light" ? "../../Images/dict-icon.png":"../../Images/dict-icon-dark.png"} alt="Dictionary web app" />
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
                        value={theme === "light" ? 0 : 1}
                        id="toggle-theme" 
                        onClick={toggleTheme}
                        />
                        <i className="fas fa-moon theme-icon"
                            style={theme === "light" ? {color: "#aaa"} : {color: "rgba(206, 95, 240, 0.823)"}}
                        ></i>
                </div>
            </nav>
        </header>
    )
}