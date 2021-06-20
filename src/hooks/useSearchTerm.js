import { useState } from "react";

const useSearchTerm = (initialSearchTerm) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  return {
    searchTerm,
    setSearchTerm,
  };
};

export default useSearchTerm;
