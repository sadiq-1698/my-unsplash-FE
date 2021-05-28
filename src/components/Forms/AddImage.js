import { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { addImage } from "../../api/image";

import { useImageContext } from "../../contexts/ImagesContext";

import ModalHeader from "./ModalHeader";
import InputField from "../InputField/InputField";
import FieldWrapper from "./FieldWrapper";
import ModalButtonSection from "./ModalButtonSection";
import Button from "../Button/Button";

import "./styles.css";

const AddImageSchema = Yup.object().shape({
  label: Yup.string().required("Label cannot be empty"),
  url: Yup.string().required("Enter a valid URL")
});

const AddImage = ({ closeModal }) => {
  const { images, setImages } = useImageContext();

  const onSubmitForm = async (values, actions) => {
    actions.setSubmitting(true);
    const response = await addImage(values);
    if (response.data) {
      let addedImage = response.data;
      let newListOfImages = [addedImage, ...images];
      setImages(newListOfImages);
      closeModal();
    }
    actions.setSubmitting(false);
  };

  return (
    <Fragment>
      <ModalHeader header="Add a new photo" />
      <Formik
        initialValues={{
          label: "",
          url: ""
        }}
        validationSchema={AddImageSchema}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched, isSubmitting, validateForm, submitForm }) => (
          <Form>
            <FieldWrapper label="Label">
              <Field name="label" as={InputField} placeholder="Add a label" />
              {errors.label && touched.label ? <div>{errors.label}</div> : null}
            </FieldWrapper>

            <FieldWrapper label="Photo URL">
              <Field
                name="url"
                as={InputField}
                placeholder="Paste the URL of the photo here"
              />
              {errors.url && touched.url ? <div>{errors.url}</div> : null}
            </FieldWrapper>

            <ModalButtonSection handleCancel={closeModal}>
              <Button
                color="green"
                type="submit"
                text="Submit"
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

AddImage.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func
};

AddImage.defaultProps = {
  handleSubmit: null
};

export default AddImage;
