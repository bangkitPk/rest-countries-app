import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function SearchInput() {
  const { setSearchQuery } = useSearch();
  const [searchInput, setSearchInput] = useState("");
  const [isFocus, setIsFocus] = useState();
  const { darkMode } = useDarkMode();

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    handleChange(e);
    setSearchQuery(searchInput);
  };

  return (
    <form action="">
      <div
        className={`w-full md:w-[30rem] ${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-lg text-light-text"
        } h-14 rounded-lg flex items-center relative focus-within:border-none`}
      >
        <FontAwesomeIcon
          icon={faSearch}
          className={`absolute ml-9 pointer-events-none ${
            isFocus ? "hidden" : ""
          }`}
        />
        <input
          className={`h-full w-full bg-transparent pl-20 ${
            darkMode ? "placeholder-white" : "placeholder-light-input"
          } outline-none duration-100 focus:outline-none focus:pl-9 focus:placeholder-transparent`}
          type="text"
          name="search"
          placeholder="Search for a country..."
          autoComplete="off"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
          value={searchInput}
        />
      </div>
    </form>
  );
}
