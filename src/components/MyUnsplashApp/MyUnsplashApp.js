import Navbar from "../Navbar/Navbar";
import Dropdown from "../Dropdown/Dropdown";
import Gallery from "../Gallery/Gallery";

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
      <div className="gallery-container">
        <Gallery />
      </div>
    </div>
  );
};

export default MyUnsplashApp;
