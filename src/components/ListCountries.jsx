import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { useSearch } from "../contexts/SearchContext";
import axios from "axios";
import { useFilter } from "../contexts/FilterContext";

export default function ListCountries() {
  const { searchQuery, setSearchQuery } = useSearch();
  const { filterRegion, setFilterRegion } = useFilter();
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data: " + error.message);
        throw error;
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchCountries = () => {
      let searchedCountries = countries.slice();
      // Apply search filter
      if (searchQuery !== "") {
        searchedCountries = searchedCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // setSearchQuery("");
      }
      setSearchedCountries(searchedCountries);
    };

    searchCountries();
  }, [searchQuery]);

  useEffect(() => {
    const filterCountries = () => {
      let filteredCountries = countries.slice();
      // Apply search filter
      if (filterRegion !== "") {
        filteredCountries = filteredCountries.filter((country) =>
          country.region.includes(filterRegion)
        );
      }
      setSearchedCountries(filteredCountries);
      console.log(searchedCountries);
    };

    filterCountries();
  }, [filterRegion]);

  return (
    <div className="flex flex-col items-center gap-10 pb-10 md:flex-row md:flex-wrap md:justify-center">
      {searchedCountries.length > 0
        ? searchedCountries.map((item) => (
            <CountryCard key={item.cca2} data={item} />
          ))
        : countries.map((item) => <CountryCard key={item.cca2} data={item} />)}
    </div>
  );
}
