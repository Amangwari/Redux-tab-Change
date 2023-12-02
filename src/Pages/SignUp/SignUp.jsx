import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";

import 'react-phone-input-2/lib/material.css'

const theme = createTheme();

export default function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    termAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be minimum 6 characters")
      .required("Required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not match")
      .required("Required"),
    termAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handlePhoneChange = (value, country, e, formattedValue) => {
    // Handle the phone number change here
    setPhoneNumber(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        // required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        helperText={<ErrorMessage name="username" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        // required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        helperText={<ErrorMessage name="email" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        // required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        helperText={<ErrorMessage name="password" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        // required
                        fullWidth
                        name="cpassword"
                        label="Confirm Password"
                        type="password"
                        id="cpassword"
                        autoComplete="new-password"
                        helperText={<ErrorMessage name="cpassword" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Field
                            as={Checkbox}
                            name="termAndConditions"
                            value="allowExtraEmails"
                            color="primary"
                          />
                        }
                        label="I accept all Terms and Conditions."
                      />
                      <FormHelperText>
                        <ErrorMessage name="termAndConditions" />
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <PhoneInput
                        country={"us"} // Default country (you can set it to your desired country code)
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        inputStyle={{
                          // Customize the input style if needed
                          width: "100%",
                          height: "36px",
                          fontSize: "16px",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disable={props.isSubmitting ? "true" : undefined}
                  >
                    {props.isSubmitting ? "loading" : "Sign Up"}
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      {" "}
                      Already have an account?
                      <NavLink to="/signin" variant="body2">
                        {" Sign in"}
                      </NavLink>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
