import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import ModalHeader from "./ModalHeader";
import InputField from "../InputField/InputField";
import ModalButtonSection from "./ModalButtonSection";
import Button from "../Button/Button";
import FieldWrapper from "./FieldWrapper";
import CustomRadio from "../CustomRadio/CustomRadio";

import "./styles.css";

const AddGallery = ({ closeModal, handleSubmit }) => {
  const [isPrivate, setPrivate] = useState(true);

  return (
    <Fragment>
      <ModalHeader header="Add a new gallery" />
      <FieldWrapper label="Name">
        <InputField placeholder="Add a name for the gallery" />
      </FieldWrapper>

      <div className="field-margin top d-flex">
        <CustomRadio
          selected={isPrivate}
          handleClick={() => setPrivate(true)}
          label="Private"
        />
        <CustomRadio
          selected={!isPrivate}
          handleClick={() => setPrivate(false)}
          label="Public"
        />
      </div>

      {isPrivate ? (
        <FieldWrapper label="Set password">
          <InputField
            placeholder="Set a password for your private gallery"
            type="password"
          />
        </FieldWrapper>
      ) : null}

      <ModalButtonSection handleCancel={closeModal}>
        <Button color="green" text="Submit" onClick={handleSubmit} />
      </ModalButtonSection>
    </Fragment>
  );
};

AddGallery.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddGallery;
