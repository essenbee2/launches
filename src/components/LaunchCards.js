import Launches from "./Launches";
import { SearchProvider } from "../contexts/SearchContext";
import MenuBar from "./MenuBar";

const LaunchCards = () => {
  return (
    <SearchProvider initialSearchTerm="">
      <MenuBar />
      <Launches />
    </SearchProvider>
  );
};

export default LaunchCards;
