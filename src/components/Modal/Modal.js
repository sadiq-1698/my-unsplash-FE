import { Fragment } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Modal = ({ children, modalState, barrierDismiss, shouldCloseOnEsc }) => {
  return (
    <Fragment>
      {modalState.modalOpen && (
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
      modalState.setModalOpen(false);
    }
  }

  function handleModalBox(e) {
    e.preventDefault();
    e.stopPropagation();
  }
};

Modal.propTypes = {
  modalState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  barrierDismiss: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool
};

Modal.defaultProps = {
  barrierDismiss: true,
  shouldCloseOnEsc: true
};

export default Modal;
