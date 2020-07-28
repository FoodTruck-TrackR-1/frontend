import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(1, "You must put in a name")
      .required("Name field is required"),
    username: yup
      .string()
      .min(1, "you must provide a username")
      .required("username is required"),
    password: yup
      .string()
      .min(1, "You must provide a password")
      .required("Password is required"),
    validPassword: yup
      .string()
      .required("Confirm your password"),
    accountType: yup
      .string()
      .oneOf(['diner', 'operator'], "You must choose an account type")
});

export default formSchema;