import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as MoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as MoonRegular } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`sticky w-full ${
        darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
      } h-24 flex items-center justify-between px-5 md:px-10`}
    >
      <h1 className="font-bold md:text-lg">Where in the world?</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <FontAwesomeIcon icon={MoonSolid} className="mr-3" />
        ) : (
          <FontAwesomeIcon icon={MoonRegular} className="mr-3" />
        )}
        Dark Mode
      </button>
    </div>
  );
}
