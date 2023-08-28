/* eslint-disable react/prop-types */
export default function Search({ searchTerm, onSearch, search, theme, themes})
{
    return (
        <div className="search-container" style={themes[theme]}>
            <label htmlFor="search"></label>
            <input
                type="text" 
                id="search" 
                name="search" 
                value={searchTerm}
                onChange={onSearch}
                style={themes[theme]}
            />
            <i className="fas fa-search" onClick={search}></i>
        </div>
    )
}