import { Fragment } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Modal = ({ children, modalOpen, closeModal, barrierDismiss }) => {
  return (
    <Fragment>
      {modalOpen && (
        <div className="modal-backdrop" onClick={handleBarrierClick}>
          <div className="modal-box" onClick={e => handleModalBox(e)}>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );

  function handleBarrierClick() {
    if (barrierDismiss !== false) {
      closeModal();
    }
  }

  function handleModalBox(e) {
    e.preventDefault();
    e.stopPropagation();
  }
};

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  barrierDismiss: PropTypes.bool
};

Modal.defaultProps = {
  barrierDismiss: true
};

export default Modal;
