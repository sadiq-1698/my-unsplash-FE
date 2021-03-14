import PropTypes from "prop-types";
import "./styles.css";

const ModalButtonSection = ({ handleCancel, children }) => (
  <div className="button-section">
    <p className="cancel-button" onClick={handleCancel}>
      Cancel
    </p>
    {children}
  </div>
);

ModalButtonSection.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ModalButtonSection;
