import * as yup from "yup";
const passwordRules =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const registerSchema = yup.object().shape({
  firstname:yup.string().min(2).required('Please enter a valid your firstname'),
  lastname:yup.string().min(2).required('Please enter a valid your lastname'),
  email: yup.string().email("Please enter a valid email").required("Please enter a valid email"),
  password:yup.string().min(5).matches(passwordRules, {message:"Please create a stronger password"}).required()
});


export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().required(),
});
export const postSchema = yup.object().shape({
  title: yup.string().required(),
  desc: yup.string().min(50).required(),
});
