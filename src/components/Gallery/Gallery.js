import PropTypes from "prop-types";
import "./styles.css";

const Gallery = ({ images }) => {
  return (
    <div>
      <div>
        {images.map(({ _id, url, label }) => {
          return (
            <div key={_id}>
              <img src={url} alt={label} />
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
