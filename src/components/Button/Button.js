import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ color, text, ...props }) => {
  return (
    <button className={`color-${color} button`} {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: ""
};

export default Button;
