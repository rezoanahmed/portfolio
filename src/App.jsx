import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;