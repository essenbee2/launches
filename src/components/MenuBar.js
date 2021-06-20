import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import FilterField from "./FilterField";

const MenuBar = () => {
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <div className="ui menu">
      <div className="ui item">
        <FilterField
          placeholder="Filter..."
          onSearchClick={(value) => setSearchTerm(value)}
          searchText=""
          tooltip="Filter the launches displayed"
        />
      </div>
    </div>
  );
};

export default MenuBar;
