import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import FilterDropdown from "./components/FilterDropdown";
import ListCountries from "./components/ListCountries";
import { SearchProvider } from "./contexts/SearchContext";
import { FilterProvider } from "./contexts/FilterContext";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailCountry from "./pages/DetailCountry";
import { useDarkMode } from "./contexts/DarkModeContext";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`font-nunito-sans ${
        darkMode ? "text-white" : "text-light-text"
      } relative`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail/:name" element={<DetailCountry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
