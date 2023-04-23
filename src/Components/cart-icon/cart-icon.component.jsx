import { useContext } from "react";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";
import { CartContext } from "../../Contexts/cart.context";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
