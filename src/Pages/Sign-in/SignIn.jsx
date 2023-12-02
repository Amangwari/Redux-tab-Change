import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./SignIn.css"
import FormValidChild from "../../Components/FormValidChild";

const theme = createTheme();

export default function SignIn() {
  const onSubmit = (values, props)=>{
    console.log(values);
    console.log(props)
    setTimeout(()=>{
      props.resetForm();
      props.setSubmitting(false)
    }, 2000)
  }
  const initialValues = {
    // email: "",
    // password: "",
    // lastname: "",
    // remember: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please Enter Valid Email').required("Required"),
    password: Yup.string().required("Required"),
    lastname: Yup.string().min(3).required("required")
  })

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
            Sign in
          </Typography>

          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <Box
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Field as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email"/>}
                  />
                  <Field as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password"/>}
                  />
                  <FormValidChild />
                  <Field as={FormControlLabel}
                    name="remember"
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={props.isSubmitting}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {props.isSubmitting?"Signning in":"Sign in"}
                  </Button>
                  {console.log(props)}
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>Don't have an account? 
                      <NavLink to="/signup" variant="body2">
                        {" Sign Up"}
                      </NavLink>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
