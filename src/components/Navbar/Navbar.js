import { IMAGE_UPLOADER_LINK } from "../../globals/constants";

import { useImageContext } from "../../contexts/ImagesContext";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Modal from "../Modal/Modal";
import AddImage from "../Forms/AddImage";

import useModal from "../../hooks/useModal";

import "./styles.css";

const Navbar = () => {
  const { toggleModal, modalOpen, closeModal } = useModal();
  const { images, setDisplayImages } = useImageContext();

  const matchFunction = (img, searchText) => {
    let label = img.label.toLowerCase();
    return label.includes(searchText);
  };

  const searchImage = e => {
    let searchText = e.target.value.trim().toLowerCase();
    const resultArray = images.filter(img => matchFunction(img, searchText));
    setDisplayImages([...resultArray]);
  };

  return (
    <div>
      <div className="d-flex justify-space-between">
        <div className="d-flex">
          <img
            className="nav-logo"
            src={process.env.PUBLIC_URL + "/my_unsplash_logo.svg"}
            alt="logo"
          />

          <InputField
            iconPrefix
            placeholder="Search by name"
            onChange={searchImage}
          />
        </div>

        <div>
          <a
            className="link nav-link"
            href={IMAGE_UPLOADER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Try image uploader
          </a>

          <Button color="green" text="Add a photo" onClick={toggleModal} />
        </div>
      </div>

      <Modal modalOpen={modalOpen} closeModal={closeModal}>
        <AddImage closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Navbar;
