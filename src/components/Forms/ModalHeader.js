import PropTypes from "prop-types";
import "./styles.css";

const ModalHeader = ({ header }) => {
  return (
    <HeaderWrapper>
      <h2 className="modal-header">{header}</h2>
    </HeaderWrapper>
  );
};

ModalHeader.propTypes = {
  header: PropTypes.string.isRequired
};

const HeaderWrapper = ({ children }) => {
  return <div style={{ marginBottom: "20px" }}>{children}</div>;
};

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalHeader;
