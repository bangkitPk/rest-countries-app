import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "../contexts/FilterContext";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function FilterDropdown() {
  const { filterRegion, setFilterRegion } = useFilter();
  const { darkMode } = useDarkMode();

  const handleFilter = (region) => {
    setFilterRegion(region);
    console.log(filterRegion);
  };

  return (
    <div className="mt-10 md:mt-0 relative group w-fit h-24">
      <button
        className={`${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
        } px-8 py-5 rounded-lg w-60 md:h-14 flex justify-between items-center`}
      >
        <span>Filter by Region</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
      </button>
      <ul
        className={`dropdown-menu absolute ${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
        } mt-2 px-8 py-5 rounded-lg w-60 flex flex-col gap-2 scale-y-0 group-hover:scale-y-100 duration-100 origin-top`}
      >
        <li className="cursor-pointer" onClick={() => handleFilter("Africa")}>
          Africa
        </li>
        <li className="cursor-pointer" onClick={() => handleFilter("America")}>
          America
        </li>
        <li className="cursor-pointer" onClick={() => handleFilter("Asia")}>
          Asia
        </li>
        <li className="cursor-pointer" onClick={() => handleFilter("Europe")}>
          Europe
        </li>
        <li className="cursor-pointer" onClick={() => handleFilter("Oceania")}>
          Oceania
        </li>
      </ul>
    </div>
  );
}
