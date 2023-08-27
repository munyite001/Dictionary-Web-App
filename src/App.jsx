/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Menu from "./components/Menu";
import SearchResultsDisplay from "./components/SearchResultsDisplay";
import Search from "./components/Search";

export default function App() {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searching, setSearching] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);

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
        <div className="container">
            <Menu />
            <Search 
                searchTerm={searchTerm} 
                onSearch={handleChange}
                search={onSearch}
            />
            {searchResults && <SearchResultsDisplay data={searchResults}/>}
        </div>
    )
}