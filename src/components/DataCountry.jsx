import axios from "axios";
import { useEffect, useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function DataCountry({ country }) {
  const [borderCountries, setBorderCountries] = useState([]);
  const { darkMode } = useDarkMode();

  function convertPopulationFormat(number) {
    return new Intl.NumberFormat("en-US").format(number);
  }

  const nativeName =
    country.name.nativeName[Object.keys(country.name.nativeName)[0]];

  const currencies = country.currencies[Object.keys(country.currencies)[0]];

  let borderLink = "";
  if (country.borders) {
    borderLink = `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
      ","
    )}`;
  }

  useEffect(() => {
    const fetchBorderCountries = async () => {
      try {
        const res = await axios.get(borderLink);
        setBorderCountries(res.data);
      } catch (error) {
        console.error("Error fetching data: " + error.message);
        throw error;
      }
    };
    if (country.borders) {
      fetchBorderCountries();
    }
  }, []);

  return (
    <div className="md:flex md:gap-20 md:items-center">
      {console.log(borderCountries)}
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full md:w-[35rem] md:h-[25rem] mb-12"
      />
      <div>
        <h2 className="text-2xl font-bold">{country.name.common}</h2>
        <div className="md:flex md:mt-10 md:gap-20">
          {/* 1st data section */}
          <ul
            className={`${
              darkMode ? "text-slate-300" : "text-light-text"
            } mt-10 md:mt-0 mb-16`}
          >
            <li className="mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Native Name:{" "}
              </span>
              {nativeName.common}
            </li>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Population:{" "}
              </span>
              {convertPopulationFormat(country.population)}
            </li>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Region:{" "}
              </span>
              {country.region}
            </li>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Sub Region:{" "}
              </span>
              {country.subregion}
            </li>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Capital:{" "}
              </span>
              {country.capital}
            </li>
          </ul>
          {/* 2nd data section */}
          <ul className={`${darkMode ? "text-slate-300" : "text-light-text"}`}>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Top Level Domain:{" "}
              </span>
              {country.tld[0]}
            </li>
            <li className=" mb-2">
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Currencies:{" "}
              </span>
              {currencies.name}
            </li>
            <li className={`${country.borders ? "mb-2" : "pb-10"}  `}>
              <span
                className={`font-semibold ${
                  darkMode ? "text-slate-200" : "text-light-text"
                }`}
              >
                Languages:{" "}
              </span>
              {Object.entries(country.languages).map(
                ([code, language], index, array) => (
                  <span key={code}>
                    {language}
                    {index < array.length - 1 && ", "}
                  </span>
                )
              )}
            </li>
          </ul>
        </div>

        {/* border countries section */}
        {country.borders && (
          <>
            <h3 className="text-lg font-semibold mt-12 md:mt-0 mb-3">
              Border Countries:
            </h3>
            <div className="flex w-full flex-wrap gap-3 pb-10">
              {borderCountries.map((border) => (
                <span
                  key={border.cca3}
                  className={`${
                    darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
                  } py-1 w-fit px-5`}
                >
                  {border.name.common}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
