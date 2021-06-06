import React, { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";

const MenuBar = () => {
    const { setSearchTerm } = useContext(SearchContext);

    return (
        <div className="ui inverted menu">
            <div className="item">
                <div className="ui icon input">
                    <input type="text" 
                        placeholder="Filter..."
                        onChange={ 
                            (event) => { setSearchTerm(event.target.value); }
                        } />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;