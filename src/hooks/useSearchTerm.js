import { useState } from "react";

function useSearchTerm(initialSearchTerm) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  return {
    searchTerm,
    setSearchTerm,
  };
}

export default useSearchTerm;