import { Route, Routes } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/sign-in/sing-in.component";
const App = () => {
  const Shop = () => <h1>shop component</h1>;

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
