import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from 'formik';
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { postSchema } from '../fromschema/fromSchema.js';
import Nav from "./Nav";

const initialValues ={
  files:"",
  title:"",
  desc:"",
}
    const Create = () => {
      const navigate = useNavigate();
      const {values, handleBlur, errors, touched, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues:initialValues,
        validationSchema:postSchema,
        onSubmit :async (values, onSubmitProps) => {
         //  Data
         const formData = new FormData();
         for (let value in values) {
           formData.append(value, values[value]);
         }
         formData.append("picturePath",values.picture.name);
    // res fetch
          const resFetch = await fetch('http://localhost:8080/api/post',{
            method: 'POST',
            body: formData,  
           });
           console.log(resFetch);
    
           const savedUser = await resFetch.json();
           onSubmitProps.resetForm();
    
           if(savedUser) {
            return navigate("/home")
           }
        },
    
      });
  
        return (
          <Box sx={{  height:'100vh', width:'100%', bgcolor: "#F7F7FF"}}>
              
            <Nav/>
            <Box sx={{padding:"20px 100px",}}>
              <Box sx={{textAlign:'center'}}>
                <Box>
                <Typography mb={'25px'} variant="h4" mt={'20px'} fontWeight={'700'} textAlign={'center'}>Create Post </Typography>
  
                    <Box  sx={{ padding:"25px", display:'block', borderRadius:"8px", border:1, borderColor:'#91A9C3'}}>
                          <Box>
                          <form onSubmit={handleSubmit}>
                            <Box>
                                <Box sx={{display:"grid" , gap:"10px"}}>
                                    <Dropzone
                                        acceptedFiles=".jpg,.jpeg,.png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) =>
                                          setFieldValue("picture", acceptedFiles[0])}>
                                      {({ getRootProps, getInputProps }) => (
                                        <Box
                                          {...getRootProps()}
                                          mt= {'15px'}
                                          
                                          sx={{ "&:hover": { cursor: "pointer" }, border:1, borderColor:'#91A9C3'}}
                                        >
                                          <input {...getInputProps()} />
                                          {!values.picture ? (
                                            <p>Add Picture Here</p>
                                          ) : (
                                          
                                              <Typography p={'15px'}>{values.picture.name}</Typography>
                                              
                                          
                                          )}
                                        </Box>
                                      )}
                                    </Dropzone>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Title"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.title}
                                        name="title"
                                        sx={{ 
                                          display:"block",
                                          borderColor:'#0000',
                                          marginTop:"15px",
                                          background:'none !important' }}
                                    />
                                    {errors.title && touched.title && <Typography  variant="body1" sx={{color:'red'}}> {errors.title} </Typography>}


                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                        label="Description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.desc}
                                        name="desc"
                                        sx={{ 
                                          display:"block",
                                          borderColor:'#0000',
                                          marginTop:"15px",
                                        
                                          background:'none !important' }}
                                    />

                                      {errors.desc && touched.desc && <Typography  variant="body1" sx={{color:'red'}}> {errors.desc} </Typography>}
                                    
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
  
    export default Create;