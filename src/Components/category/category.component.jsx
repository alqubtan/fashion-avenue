import { useParams } from "react-router-dom";
import { useContext, Fragment } from "react";
import { CategoriesCotnext } from "../../Contexts/categories.context";
import ProductCard from "../product-card/product-card.component";
import { useEffect, useState } from "react";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesCotnext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap?.[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle> {category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
