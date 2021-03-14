import { Fragment } from "react";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import useModal from "../../hooks/useModal";

import "./styles.css";
import InputField from "../InputField/InputField";
import AddGallery from "../Forms/AddGallery";

const MyUnsplashApp = () => {
  const { toggleModal, closeModal, modalState } = useModal();

  return (
    <Fragment>
      <Button color="green" text="Add image" onClick={toggleModal} />

      <InputField iconPrefix />
      <Modal modalState={modalState}>
        <AddGallery closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
};

export default MyUnsplashApp;
