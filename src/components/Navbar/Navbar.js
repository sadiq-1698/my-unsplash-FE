import "./styles.css";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { IMAGE_UPLOADER_LINK } from "../../globals/constants";
import useModal from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import AddImage from "../Forms/AddImage";

const Navbar = () => {
  const { toggleModal, modalOpen, closeModal } = useModal();

  return (
    <div>
      <div className="d-flex justify-space-between">
        <div className="d-flex">
          <img
            className="nav-logo"
            src={process.env.PUBLIC_URL + "/my_unsplash_logo.svg"}
            alt="logo"
          />

          <InputField iconPrefix placeholder="Search by name" />
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
