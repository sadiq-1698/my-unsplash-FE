import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import "./styles.css";

const MyUnsplashApp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <Button color="green" text="Add image" onClick={openModal} />
      <Modal isOpen={modalOpen}>
        <div>
          <Button text="Close modal" onClick={closeModal} />
        </div>
      </Modal>
    </Fragment>
  );
};

export default MyUnsplashApp;
