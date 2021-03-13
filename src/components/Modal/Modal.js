import { Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Modal = ({ children, isOpen }) => {
  return (
    <Fragment>
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">{children}</div>
        </div>
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
