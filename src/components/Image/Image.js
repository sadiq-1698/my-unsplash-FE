import PropTypes from "prop-types";
import "./styles.css";

const Image = ({ source, label }) => {
  return (
    <div
      className="image-container"
      style={{
        background: `url(${source})`
      }}
    ></div>
  );
};

Image.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Image;
