import Button from "../button/button.component";
import { CartContext } from "../../Contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))}
      </div>
      <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
