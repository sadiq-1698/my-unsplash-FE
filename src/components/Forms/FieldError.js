import PropTypes from "prop-types";

import "./styles.css";

const FieldError = ({ message }) => {
  return (
    <div>
      <span className="field-error">{message}</span>
    </div>
  );
};

FieldError.propTypes = {
  message: PropTypes.string.isRequired
};

export default FieldError;
