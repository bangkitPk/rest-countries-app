import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function convertPopulationFormat(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

export default function CountryCard({ data }) {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const navigateToDetailCountry = () => {
    navigate(`/detail/${data.name.common}`);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-dark-blue" : "bg-light-bg shadow-lg"
      } rounded-lg cursor-pointer duration-100 hover:-translate-y-2 md:w-64`}
      onClick={navigateToDetailCountry}
    >
      <div id="flag">
        <img
          src={data.flags.png}
          alt={data.flags.alt}
          className="rounded-t-lg"
        />
      </div>
      <div id="detail" className="px-7 py-9">
        <h3 className="text-lg font-bold mb-3">{data.name.common}</h3>
        <p>
          <span className="font-semibold">Population: </span>{" "}
          {convertPopulationFormat(data.population)}
        </p>
        <p>
          <span className="font-semibold">Region: </span> {data.region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span> {data.capital}
        </p>
      </div>
    </div>
  );
}
