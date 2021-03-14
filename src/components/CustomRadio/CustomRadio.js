import PropTypes from "prop-types";
import "./styles.css";

const CustomRadio = ({ selected, handleClick, label }) => {
  return (
    <p onClick={handleClick} className={`radio ${selected ? "selected" : ""}`}>
      {label}
    </p>
  );
};

CustomRadio.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default CustomRadio;
