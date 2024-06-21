import {
  Box,
  Button,
  Link,
  TextField,
  Typography
} from "@mui/material";

import { useFormik } from 'formik';
import React from 'react';
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { registerSchema } from '../fromschema/fromSchema.js';
const initialValues ={
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  files:""
}

const Home = () => {
  const navigate = useNavigate();
  const {values, handleBlur, errors, touched, handleChange, handleSubmit, setFieldValue} = useFormik({
    initialValues:initialValues,
    validationSchema:registerSchema,
    onSubmit :async (values, onSubmitProps) => {
     //  Data
     const formData = new FormData();
     for (let value in values) {
       formData.append(value, values[value]);
     }
     formData.append("picturePath",values.picture.name);
// res fetch
      const resFetch = await fetch('http://localhost:8080/api/register',{
        method: 'POST',
        body: formData,  
       });
       console.log(resFetch);

       const savedUser = await resFetch.json();
       onSubmitProps.resetForm();

       if(savedUser) {
        return navigate("/login")
       }
    },

  });




  return (
    <Box sx={{display:"flex", paddingTop:'100px',  justifyContent:"center",  alignItems:"center",textAlign:"center",  flexDirection: 'column'}}>

   <Box sx={{width:"350px",position:"relative",   background:'linear-gradient(to right top, #c0f9e7, #b1f3f4, #afeafd, #b9dfff, #c9d3f9)',  borderRadius:'8px', padding:"35px"}} >

   <Box sx={{  position: 'absolute',top:'-12%', right:'-30%',zIndex:'-1',  borderRadius:'50%', height:'350px', width:'350px', background:'#FF9000', }} ></Box>
   
     <Typography variant="h3" marginBottom="25px">Register</Typography>
     <form  onSubmit={handleSubmit}  >
        <Box sx={{ display: 'block'}}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstname}
              name="firstname"
              sx={{ 
                display:"block",
                borderColor:'#0000',
                marginTop:"15px",
                background:'none !important' }}
            />
            {errors.firstname && touched.firstname && <Typography  variant="body1" sx={{color:'red'}}> {errors.firstname} </Typography>}
            <TextField
              fullWidth
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastname}
              name="lastname"
              sx={{ display:"block", marginTop:"15px" }}
            />
            {errors.lastname && touched.lastname && <Typography  variant="body1" sx={{color:'red'}}> {errors.lastname} </Typography>}
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
            <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        mt= {'15px'}
                        p={'15px'}
                        sx={{ "&:hover": { cursor: "pointer" }, border:1, borderColor:'#91A9C3'}}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                        
                            <Typography>{values.picture.name}</Typography>
                            
                        
                        )}
                      </Box>
                    )}
            </Dropzone>
  
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                marginTop:"15px",
                color:"white",
                background:'linear-gradient(to right top, #933a97, #654699, #384b8e, #0c497a, #004462)',
                fontSize:"18px"
                
              }}>
              Register
            </Button>
        </Box>
     </form>
     
     <Typography  variant="body5" sx={{color:'#000', fontSize:"20px"}}>Already a member? <Link href='/login'  sx={{color:'#501883', fontSize:"20px"}}>Login</Link></Typography>
     
   </Box>
   </Box>
  )
}

export default Home;