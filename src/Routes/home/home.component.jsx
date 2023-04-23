import Directory from "../../Components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
function Home() {
 
  return (
    <Fragment>
      <Directory/>
      <Outlet />
    </Fragment>
  );
}

export default Home;
