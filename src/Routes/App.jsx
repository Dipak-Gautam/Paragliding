import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./../index.css";

function App() {
  return (
    <div className="no-scroll">
      <Navbar />
      <div className="no-scroll">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
