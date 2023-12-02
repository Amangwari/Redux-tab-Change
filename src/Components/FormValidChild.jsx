import { TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";
import * as Yup from 'yup'

const FormValidChild = () => {

    const validationSchema = Yup.object().shape({
        lastname: Yup.string().min(3).required("required")
      })

  return (
    <>
      <Field
        as={TextField}
        margin="normal"
        required
        fullWidth
        name="lastname"
        label="lastname"
        type="text"
        id="lastname"
        helperText={<ErrorMessage name="lastname" />}
      />
    </>
  );
};

export default FormValidChild;
