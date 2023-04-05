import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../Contexts/cart.context";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">9</span>
    </div>
  );
};

export default CardIcon;
