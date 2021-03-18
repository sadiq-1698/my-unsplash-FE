import { useState, useEffect } from "react";
import { getAllGalleries } from "../../api/gallery";
import { CHEVRON_DOWN } from "../../globals/iconClasses";
import "./styles.css";

const Dropdown = () => {
  const [galleries, showGalleries] = useState(false);
  const [items, setItems] = useState(null);
  const toggleDropdown = () => showGalleries(prev => !prev);

  useEffect(() => {
    const getGalleries = async () => {
      let result = await getAllGalleries();
      console.log(result.data);
      setItems([...result.data]);
    };
    getGalleries();
  }, []);

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
                <div key={val._id} className="dropdown-item">
                  {val.name}
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
