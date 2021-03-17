import { useState } from "react";
import { CHEVRON_DOWN } from "../../globals/iconClasses";
import "./styles.css";

const Dropdown = () => {
  const [galleries, showGalleries] = useState(false);
  const toggleDropdown = () => showGalleries(prev => !prev);

  const items = ["Sadiq", "Umma", "Bapa", "Didi", "Bhaiyya"];

  return (
    <div className="d-flex justify-space-between align-items-center">
      <div>
        <h1 className="current-gallery">Welcome</h1>
      </div>
      <div className="dropdown-container" onClick={toggleDropdown}>
        <p className="link">
          Select a gallery&nbsp;&nbsp;&nbsp;
          <span>
            <i
              className={CHEVRON_DOWN + ` smooth ${galleries ? " rotate" : ""}`}
              aria-hidden="true"
            ></i>
          </span>
        </p>
        {galleries ? (
          <div className="dropdown-list">
            {items.map(val => {
              return (
                <div key={val} className="dropdown-item">
                  {val}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
