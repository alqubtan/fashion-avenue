import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/logo.svg";
import "./navigation.styles.scss";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import CartIcon from "../../Components/cart-icon/cart-icon.component";

import { UserContext } from "../../Contexts/user.context";

import { SignOutUser } from "../../Utils/firebase.utils";

import { CartContext } from "../../Contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={SignOutUser}>
              SIGN OUT
            </span>
          )}
          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
