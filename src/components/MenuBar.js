import React, { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import SearchField from "react-search-field";

const MenuBar = () => {
    const { setSearchTerm } = useContext(SearchContext);
    
    return (
        <div className="ui menu">
            <div className="ui item">
                <SearchField
                placeholder="Filter..."
                onSearchClick={ (value) => setSearchTerm(value) }
                searchText=""
                classNames="ui input focus"
                />
            </div>
        </div>
    );
}

export default MenuBar;