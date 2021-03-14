import PropTypes from "prop-types";
import { SEARCH_ICON } from "../../globals/iconClasses";
import "./styles.css";

const InputField = ({ iconPrefix, icon, ...props }) => {
  if (iconPrefix) {
    return (
      <div className="input-icon">
        <input {...props} className="input" />
        <i className={icon} aria-hidden="true"></i>
      </div>
    );
  }
  return <input {...props} className="input" />;
};

InputField.propTypes = {
  iconPrefix: PropTypes.bool,
  icon: PropTypes.string
};

InputField.defaultProps = {
  iconPrefix: false,
  icon: SEARCH_ICON
};

export default InputField;
