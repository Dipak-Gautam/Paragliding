import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./../index.css";

function App() {
  return (
    <div className="noscroll">
      <Navbar />
      <div className="noscroll">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
