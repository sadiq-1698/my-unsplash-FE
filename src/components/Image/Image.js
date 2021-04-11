import PropTypes from "prop-types";
import "./styles.css";

const Image = ({ source, label }) => {
  return (
    <div className="image-container">
      <img
        src={source}
        alt="my-unsplash"
        width="100%"
        className="gallery-image"
      />
      <span className="image-label">{label}</span>
      <button className="btn-delete">delete</button>
    </div>
  );
};

Image.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Image;
