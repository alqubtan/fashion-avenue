import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardFooter,
  ProductCardButton
} from "./product-card.styles.jsx";
import { CartContext } from "../../Contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  const { name, price, imageUrl } = product;

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
