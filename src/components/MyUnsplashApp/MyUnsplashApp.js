import { Fragment } from "react";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import AddGallery from "../Forms/AddGallery";
import Navbar from "../Navbar/Navbar";

import useModal from "../../hooks/useModal";

import "./styles.css";

const MyUnsplashApp = () => {
  const { toggleModal, closeModal, modalState } = useModal();

  return (
    <Fragment>
      <Navbar />
      <Button color="green" text="Add image" onClick={toggleModal} />

      <InputField iconPrefix />
      <Modal modalState={modalState}>
        <AddGallery closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
};

export default MyUnsplashApp;
