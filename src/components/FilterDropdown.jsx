import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "../contexts/FilterContext";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function FilterDropdown() {
  const { filterRegion, setFilterRegion } = useFilter();
  const { darkMode } = useDarkMode();

  const handleFilter = (region) => {
    setFilterRegion(region);
  };

  const dropdownItemStyle = `
    px-8 py-2 before:top-0 cursor-pointer relative before:content-[''] before:h-full before:absolute before:left-0 before:bg-gray-400 before:bg-opacity-20 before:w-0 before:duration-300 hover:before:w-full
  `;

  return (
    <div className="mt-10 md:mt-0 relative group w-fit h-24">
      <button
        className={`${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
        } px-8 py-5 rounded-lg w-60 md:h-14 flex justify-between items-center`}
      >
        <span>Filter by Region</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-xs group-hover:rotate-180 duration-300"
        />
      </button>
      <ul
        className={`dropdown-menu absolute ${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
        } mt-2 py-5 rounded-lg w-60 flex flex-col scale-y-0 group-hover:scale-y-100 duration-300 origin-top`}
      >
        <li
          className={dropdownItemStyle}
          onClick={() => handleFilter("Africa")}
        >
          Africa
        </li>
        <li
          className={dropdownItemStyle}
          onClick={() => handleFilter("America")}
        >
          America
        </li>
        <li className={dropdownItemStyle} onClick={() => handleFilter("Asia")}>
          Asia
        </li>
        <li
          className={dropdownItemStyle}
          onClick={() => handleFilter("Europe")}
        >
          Europe
        </li>
        <li
          className={dropdownItemStyle}
          onClick={() => handleFilter("Oceania")}
        >
          Oceania
        </li>
      </ul>
    </div>
  );
}
