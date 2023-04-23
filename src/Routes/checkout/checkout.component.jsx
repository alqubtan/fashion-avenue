import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import {CheckoutContainer, CheckoutHeader, CheckoutTotal, HeaderBlock} from "./checkout.styles";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems,cartTotal } =
    useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>TOTAL:{cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
