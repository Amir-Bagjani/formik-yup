import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Textfield from "./Textfield";
import * as Yup from "yup";

function Signup() {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .required(`First name is required`)
      .max(15, `Must be 15 characters or less`),
    lastName: Yup.string()
      .required(`Last name is required`)
      .max(50, `Must be 50 characters or less`),
    email: Yup.string().required(`Email is required`).email(`Email is invalid`),
    password: Yup.string()
      .required(`Password is required`)
      .matches(/(?=.*[A-Z])/, `At least one uppercase letter`)
      .matches(/(?=.*[0-9])/, `At least one number`)
      .matches(/(?=.*[a-z])/, `At least one lowercase letter`)
      .min(6, `Must be atleast 6 characters`),
    confirmPassword: Yup.string()
      .required(`Confirm password is required`)
      .oneOf([Yup.ref(`password`), null], `Passwords must match`),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formik) => (
        <Box sx={{ width: `500px`, margin: `30px auto` }}>
          <Typography variant="h6" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <Form>
            <Textfield label="First name" name="firstName" type="text" />
            <Textfield label="Last name" name="lastName" type="text" />
            <Textfield label="Email" name="email" type="email" />
            <Textfield label="Password" name="password" type="password" />
            <Textfield
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />
            <Box sx={{ marginTop: 3 }}>
              <Button type="submit" variant="contained" sx={{ marginRight: 1 }}>
                Register
              </Button>
              <Button type="reset" variant="contained" color="error">
                Reset
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}

export default Signup;
