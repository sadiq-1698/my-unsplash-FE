import { Fragment } from "react";
import "./styles.css";
import ModalHeader from "./ModalHeader";
import InputField from "../InputField/InputField";
import FieldWrapper from "./FieldWrapper";
import ModalButtonSection from "./ModalButtonSection";
import Button from "../Button/Button";

const AddImage = ({ closeModal, handleSubmit }) => {
  return (
    <Fragment>
      <ModalHeader header="Add a new photo" />
      <FieldWrapper label="Label">
        <InputField placeholder="Add a label" />
      </FieldWrapper>
      <FieldWrapper label="Photo URL">
        <InputField placeholder="Paste the URL of the photo here" />
      </FieldWrapper>
      <ModalButtonSection handleCancel={closeModal}>
        <Button color="green" text="Submit" onClick={handleSubmit} />
      </ModalButtonSection>
    </Fragment>
  );
};

export default AddImage;
