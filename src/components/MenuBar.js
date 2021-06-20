import React, { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import SearchField from "react-search-field";

const MenuBar = () => {
    const { setSearchTerm } = useContext(SearchContext);
    
    return (
        <div className="ui inverted menu">
            <SearchField
            placeholder="Filter..."
            onSearchClick={ (value) => setSearchTerm(value) }
            searchText=""
            />
        </div>
    );
}

export default MenuBar;