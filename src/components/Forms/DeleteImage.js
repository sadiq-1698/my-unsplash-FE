import { Fragment } from "react";
import PropTypes from "prop-types";

import ModalButtonSection from "./ModalButtonSection";
import ModalHeader from "./ModalHeader";
import Button from "../Button/Button";

import "./styles.css";

const DeleteImage = ({ closeModal, handleSubmit }) => {
  return (
    <Fragment>
      <ModalHeader header="Are you sure ?" />
      <ModalButtonSection handleCancel={closeModal}>
        <Button color="red" text="Delete" onClick={handleSubmit} />
      </ModalButtonSection>
    </Fragment>
  );
};

DeleteImage.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default DeleteImage;
