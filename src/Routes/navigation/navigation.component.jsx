import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link to="/" className="logo-container">
        <CrownLogo className="logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          Signin
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
