/* eslint-disable react/prop-types */
export default function Search({ searchTerm, onSearch, search})
{
    return (
        <div className="search-container">
            <label htmlFor="search"></label>
            <input 
                type="text" 
                id="search" 
                name="search" 
                value={searchTerm}
                onChange={onSearch}
            />
            <i className="fas fa-search" onClick={search}></i>
        </div>
    )
}