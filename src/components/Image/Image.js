import { Fragment } from "react";
import PropTypes from "prop-types";

import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";

import "./styles.css";
import DeleteImage from "../Forms/DeleteImage";
import { useImageContext } from "../../contexts/ImagesContext";

const Image = ({ id, source, label }) => {
  const { setCurrentImage } = useImageContext();
  const { toggleModal, modalOpen, closeModal } = useModal();

  return (
    <Fragment>
      <div className="image-container">
        <img
          src={source}
          alt="my-unsplash"
          width="100%"
          className="gallery-image"
        />
        <span className="image-label">{label}</span>
        <button
          className="btn-delete"
          onClick={() => {
            setCurrentImage(id);
            toggleModal();
          }}
        >
          delete
        </button>
      </div>
      <Modal closeModal={closeModal} modalOpen={modalOpen}>
        <DeleteImage closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
};

Image.propTypes = {
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Image;
