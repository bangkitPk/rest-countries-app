import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterRegion, setFilterRegion] = useState("");

  return (
    <FilterContext.Provider value={{ filterRegion, setFilterRegion }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
