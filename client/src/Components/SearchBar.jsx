import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../StyleSheet/SearchBar.css";

export const SearchBar = () => {
    return (
        <div className='SearchBar__container'>
            <div className="searchBar__fields">
                <div className="search__textPhrase">
                <h3>Find Your Ideal Home</h3>
                </div>
            </div>
            <div className="searchInput">
                <input type="text" placeholder='Search' />
                <SearchIcon />
            </div>
            <div className="filter">
                Filter By Province: <select>
                    <option>KPK</option>
                    <option>Sindh</option>
                    <option>Balochistan</option>
                    <option>Punjab</option>
                    <option>AJK</option>
                </select>
            </div>
        </div>
    )
}
