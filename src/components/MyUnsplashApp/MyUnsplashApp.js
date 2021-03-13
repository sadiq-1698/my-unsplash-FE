import { Fragment } from "react";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import useModal from "../../hooks/useModal";

import "./styles.css";

const MyUnsplashApp = () => {
  const { toggleModal, modalState } = useModal();

  return (
    <Fragment>
      <Button color="green" text="Add image" onClick={toggleModal} />
      <Modal modalState={modalState}>
        <div>
          <Button text="Close modal" onClick={toggleModal} />
        </div>
      </Modal>
    </Fragment>
  );
};

export default MyUnsplashApp;
