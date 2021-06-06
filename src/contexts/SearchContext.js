import React, { createContext } from "react";
import useSearchTerm from "../hooks/useSearchTerm";

const SearchContext = createContext();

function SearchProvider( { children, initialSearchTerm = "" }) {
  const {
    searchTerm,
    setSearchTerm,
  } = useSearchTerm(initialSearchTerm);

  return (
    <SearchContext.Provider
      value={ { searchTerm, setSearchTerm } }>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };