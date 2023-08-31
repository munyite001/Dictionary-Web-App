/* eslint-disable react/prop-types */
export default function Font({ showDropDown, setShowDropDown, font, setFont, fonts}) {

    function toggleDropDown()
    {
        setShowDropDown(!showDropDown)
    }

    function changeFont(event) {
        setFont(event.target.textContent)
    }

    return (
        <div className="font-dropdown">
            <div className="display" onClick={toggleDropDown}>
                <p className="font-name">
                    {font}
                </p>
                <i className={showDropDown ? "fas fa-angle-up":"fas fa-angle-down"}></i>
            </div>
            {showDropDown && 
                <ul className="dropdown">
                    {fonts.map((f) => {
                        return (<li key={f} onClick={changeFont}>{f}</li>)
                    })}
                </ul>}
        </div>
    )
}