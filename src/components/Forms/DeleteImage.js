import { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

import ModalButtonSection from "./ModalButtonSection";
import ModalHeader from "./ModalHeader";
import Button from "../Button/Button";

import "./styles.css";
import FieldWrapper from "./FieldWrapper";
import InputField from "../InputField/InputField";
import FieldError from "./FieldError";
import { deleteImage } from "../../api/image";
import { useImageContext } from "../../contexts/ImagesContext";

function validatePassword(value) {
  let error;
  if (!value) {
    error = "Password cannot be empty";
  } else if (value !== process.env.REACT_APP_PASSWORD) {
    error = "Incorrect password";
  }
  return error;
}

const DeleteImage = ({ closeModal }) => {
  const {
    currentImage: imageId,
    images,
    setImages,
    setDisplayImages
  } = useImageContext();

  const onSubmitForm = async (_, actions) => {
    actions.setSubmitting(true);
    const response = await deleteImage(imageId);
    if (response.statusText === "OK") {
      let initalList = [...images];
      let updatedImageList = initalList.filter(item => item._id !== imageId);
      setImages([...updatedImageList]);
      setDisplayImages([...updatedImageList]);
      closeModal();
    }
    actions.setSubmitting(false);
  };

  return (
    <Fragment>
      <ModalHeader header="Delete Image" />

      <Formik
        initialValues={{
          password: ""
        }}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched, isSubmitting, validateForm, submitForm }) => (
          <Form>
            <FieldWrapper label="Password">
              <Field
                name="password"
                as={InputField}
                placeholder="Enter your password to confirm"
                type="password"
                validate={validatePassword}
              />
              {errors.password && touched.password ? (
                <FieldError message={errors.password} />
              ) : null}
            </FieldWrapper>

            <ModalButtonSection handleCancel={closeModal}>
              <Button
                color="red"
                type="submit"
                text="Delete"
                onClick={() => validateForm().then(() => submitForm())}
                disabled={isSubmitting}
              />
            </ModalButtonSection>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

DeleteImage.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default DeleteImage;
