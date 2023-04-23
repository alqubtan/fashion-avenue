import CategoriesPreview from "../../Components/categories-preview/categories-preview.component"
import { Route, Routes } from "react-router-dom";
import Category from "../../Components/category/category.component";


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
  );
};

export default Shop;
