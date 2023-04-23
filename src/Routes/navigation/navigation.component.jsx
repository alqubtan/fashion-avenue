import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/logo.svg";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../Components/cart-icon/cart-icon.component";

import { UserContext } from "../../Contexts/user.context";

import { SignOutUser } from "../../Utils/firebase/firebase.utils";

import { CartContext } from "../../Contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/" >
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>

          {!currentUser ? (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          ) : (
            <NavLink as='span' onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
