import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utils/firebase/firebase.utils";
export const CategoriesCotnext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesCotnext.Provider value={value}>
      {children}
    </CategoriesCotnext.Provider>
  );
};
