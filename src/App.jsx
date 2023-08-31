/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Menu from "./components/Menu";
import SearchResultsDisplay from "./components/SearchResultsDisplay";
import Search from "./components/Search";

export default function App() {
    const fonts = ["Arial", "Helvetica", "Calibri", "Verdana"];
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searching, setSearching] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [theme, setTheme] = React.useState("light");
    const [showDropDown, setShowDropDown] = React.useState(false)
    const [font, setFont] = React.useState(fonts[0])
    
      
    function handleChange(event)
    {
        setSearchTerm(event.target.value);
    }

    function onSearch()
    {
        setSearching(true)
        setTimeout(() => { 
            setSearching(false)
        }, 1000)
    }

    const themes = {
        light: {
            "background": "#fff",
            "color": "#000",
        },
        dark: {
            "background": "#000",
            "color": "#fff",
        }
    }

    //  Check the prefered color theme by default
    React.useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    },[])

    React.useEffect(() => {
        if (searchTerm)
        {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data);
            })
        }
    }, [searching])

    
    return (
        <div className="container" style={{...themes[theme], fontFamily: font}}>
            <Menu 
                theme={theme} 
                setTheme={setTheme}
                showDropDown={showDropDown}
                setShowDropDown={setShowDropDown}
                font={font}
                setFont={setFont}
                fonts={fonts}
            />
            <Search 
                searchTerm={searchTerm} 
                onSearch={handleChange}
                search={onSearch}
                theme={theme}
                themes={themes}
            />
            {searchResults && <SearchResultsDisplay data={searchResults} theme={theme}/>}
        </div>
    )
}
