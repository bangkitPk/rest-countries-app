import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DataCountry from "../components/DataCountry";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function DetailCountry() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const { darkMode } = useDarkMode();

  const backToMain = (e) => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        setCountry(response.data);
      } catch (error) {
        console.error("Error fetching data: " + error.message);
        throw error;
      }
    };
    fetchData();
    console.log(country);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-dark-bg" : "bg-light-bg"
      } px-5 md:px-10 pt-8 min-h-screen`}
    >
      <button
        className={`${
          darkMode ? "bg-dark-blue" : "bg-light-bg shadow-md"
        } px-8 py-1 rounded-sm mb-14`}
        onClick={backToMain}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back
      </button>
      {country.length > 0 ? (
        <DataCountry country={country[0]} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
