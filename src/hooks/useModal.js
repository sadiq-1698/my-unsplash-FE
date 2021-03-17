import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(prev => !prev);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const modalState = {
    modalOpen,
    setModalOpen
  };

  return {
    toggleModal,
    openModal,
    closeModal,
    modalOpen,
    ...modalState
  };
};

export default useModal;
