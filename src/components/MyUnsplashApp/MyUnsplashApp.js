import Navbar from "../Navbar/Navbar";
import Dropdown from "../Dropdown/Dropdown";

import "./styles.css";

const MyUnsplashApp = () => {
  return (
    <div className="app-wrapper">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="gallery-dropdown">
        <Dropdown />
      </div>
    </div>
  );
};

export default MyUnsplashApp;
