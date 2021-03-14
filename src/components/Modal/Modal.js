import { Fragment } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Modal = ({ children, modalState, barrierDismiss }) => {
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
  barrierDismiss: PropTypes.bool
};

Modal.defaultProps = {
  barrierDismiss: true
};

export default Modal;
