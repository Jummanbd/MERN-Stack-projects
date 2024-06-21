import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";

  const Updata = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [item, setItems ]= useState({})
    useEffect(() => {
      const token = localStorage.getItem('token');
      const itemed = JSON.parse(atob(token.split('.')[1]))
       setItems(itemed)
    }, [setItems]);
    console.log(item.lastname);

    const {values, handleBlur,  handleChange, handleSubmit} = useFormik({
      initialValues :{
        firstname:"",
        lastname:"",
        email:"",
      },
      onSubmit :async (values, onSubmitProps) => {
  // res fetch
        const resFetch = await fetch(`http://localhost:8080/api/updata/${id}`,{
          method: 'PUT',
          headers:{ 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstname:values.firstname ? values.firstname : item.firstname || '',
            lastname:values.lastname ? values.lastname : item.lastname || '',
            email:values.email ? values.email : item.email || '',
          }) 
      
         });
  
         const savedUser = await resFetch.json();
          console.log(savedUser);
       onSubmitProps.resetForm();
         if(savedUser) {
         return navigate("/login")
        } 
      },
  
    });

      return (
        <Box sx={{  height:'100vh', width:'100%', bgcolor: "#F7F7FF"}}>
            
          <Nav/>
          <Box sx={{padding:"20px 100px",}}>
            <Box sx={{textAlign:'center'}}>
              <Box>
              <Typography variant="h4" mt={'20px'} fontWeight={'700'} textAlign={'center'}>Update</Typography>

                  <Box  sx={{ padding:"25px", mt:'20px', display:'block', borderRadius:"8px", border:1, borderColor:'#91A9C3'}}>
                        <Box>
                        <form onSubmit={handleSubmit}>
                          <Box>
                              <Box sx={{display:"grid" , gap:"10px"}}>
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
                                  <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="Last Name"
                                      name="lastname"
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.lastname}
                                      sx={{ 
                                        display:"block",
                                        borderColor:'#0000',
                                        marginTop:"15px",
                                        background:'none !important' }}
                                  />

                                  <TextField
                                      fullWidth
                                      variant="outlined"
                                      label="Email"
                                      name="email"
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.email}
                                      sx={{ 
                                        display:"block",
                                        borderColor:'#0000',
                                        marginTop:"15px",
                                        background:'none !important' }}
                                  />
                                  
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
                                    Update
                                  </Button>
                              </Box>
                          </Box>
                        </form>
                        </Box>
                  </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )
  }

  export default Updata;