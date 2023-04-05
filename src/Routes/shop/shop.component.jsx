import { useContext } from "react";
import { ProductsCotnext } from "../../Contexts/products.context";
import ProductCard from "../../Components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { Products } = useContext(ProductsCotnext);
  return (
    <div className="products-container">
      {Products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
