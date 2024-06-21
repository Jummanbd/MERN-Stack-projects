import {
  Box,
  Button,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from 'formik';
import React from 'react';
import { loginSchema } from "../fromschema/fromSchema";

const Home = () => {
  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const {values, handleBlur, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues:initialValuesLogin,
    validationSchema:loginSchema,
    onSubmit :async (values, onSubmitProps) => {
      
        const loggedInResponse = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
        const loggedIn =  await loggedInResponse.json();
        onSubmitProps.resetForm();

        if (loggedIn.token) {
          localStorage.setItem('token', loggedIn.token)
           window.location.href = '/home'
        } else {
          console.log('Please check your username and password')
        }
    },

  });




  return (
    <Box sx={{display:"flex", marginTop:"100px",  justifyContent:"center",  alignItems:"center",textAlign:"center",  flexDirection: 'column'}}>

  <Box sx={{width:"350px",position:"relative",   background:'linear-gradient(to right top, #c0f9e7, #b1f3f4, #afeafd, #b9dfff, #c9d3f9)',  borderRadius:'8px', padding:"35px"}} >

   <Box sx={{  position: 'absolute',top:'-12%', right:'-30%',zIndex:'-1',  borderRadius:'50%', height:'350px', width:'350px', background:'#FF9000', }} ></Box>
   
     <Typography variant="h2" marginBottom="25px">Login</Typography>
     <form  onSubmit={handleSubmit}  >
        <Box sx={{ display: 'block'}}>

            <TextField
               fullWidth
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              sx={{ marginTop:"15px"}}
            />
            {errors.email && touched.email && <Typography  variant="body1" sx={{color:'red'}}> {errors.email} </Typography>}

            <TextField
              fullWidth
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              sx={{ display:"block", marginTop:"15px" }}
            />
            {errors.password && touched.password && <Typography  variant="body1" sx={{color:'red'}}> {errors.password} </Typography>}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                marginTop:"15px",
                background:'linear-gradient(to right top, #933a97, #654699, #384b8e, #0c497a, #004462)',

                color:"white",
                fontSize:"18px"
                
              }}>
              Login
            </Button>
        </Box>
     </form>

     <Typography  variant="body5" sx={{color:'#000', fontSize:"20px"}}>Don`t have an accout?<Link href='/'  sx={{color:'#000', fontSize:"20px"}}> Register</Link></Typography>
   </Box>
   </Box>
  )
}

export default Home;