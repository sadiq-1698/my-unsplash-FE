import PropTypes from "prop-types";

import "./styles.css";

const FieldWrapper = ({ label, children }) => {
  return (
    <div className="field-margin">
      <FieldLabel label={label} />
      {children}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const FieldLabel = ({ label }) => <p className="field-label">{label}</p>;

FieldLabel.propTypes = {
  label: PropTypes.string.isRequired
};

export default FieldWrapper;
