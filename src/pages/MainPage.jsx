import FilterDropdown from "../components/FilterDropdown";
import ListCountries from "../components/ListCountries";
import SearchInput from "../components/SearchInput";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FilterProvider } from "../contexts/FilterContext";
import { SearchProvider } from "../contexts/SearchContext";

export default function MainPage() {
  const { darkMode } = useDarkMode();
  return (
    <SearchProvider>
      <FilterProvider>
        <main
          className={`${
            darkMode ? "bg-dark-bg" : "bg-light-bg"
          } px-5 md:px-10 pt-8 min-h-screen`}
        >
          <div className="md:flex md:justify-between w-full ">
            <SearchInput />
            <FilterDropdown />
          </div>
          <ListCountries />
        </main>
      </FilterProvider>
    </SearchProvider>
  );
}
