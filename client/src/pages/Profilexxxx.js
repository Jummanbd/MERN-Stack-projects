import {
  Avatar,
  Box,
  Divider,
  Typography
} from "@mui/material";
import { useEffect, useState } from 'react';
import Nav from "./Nav.js";
// initialvalues


const Profile =  () => {

const [item, setItems ]= useState({});


useEffect(() => {
  const token = localStorage.getItem('token');
  const itemed = JSON.parse(atob(token.split('.')[1]))
   setItems(itemed)
}, [setItems]);

var fullName = item.firstname + ' ' + item.lastname;
// var userEmail = item.email;
     return (
      <Box sx={{  height:'100vh', width:'100%', bgcolor: "#F7F7FF"}}>
        <Nav/> 
        <Box  sx={{padding:"20px 100px",}}>
             <Box mt={'20px'} sx={{display:"flex", justifyContent:"space-between"}}>
                <Box  sx={{width:'20%', height:"500px", background:"#fff", borderRadius:"8px", border:1, borderColor:'#91A9C3'}}>
                    <Box >
              
                      <Box sx={{display:"flex",padding:"25px", alignItems:"center", justifyContent:'center', textAlign:"center",     flexDirection:"column"}}>

                        <Avatar sx={{width:'120px', height:'120px', display:'block', border:4, borderColor:"#95D2FB"}} src={`http://localhost:8080/assets/${item.picturePath}`}/>
                        <Typography sx={{fontSize:"20px", fontWeight:"800"}} variant="h5" mt={'20px'} textAlign={'center'}>{fullName}</Typography>
                        <Typography sx={{fontSize:"16px", color:'#6C757D'}} mt={'10px'} textAlign={'center'}>Full Stack Developer</Typography>
                      </Box>
                      <Divider  sx={{ width:"100%", mt:'8px'}}/>
                       <Box sx={{display:"flex", justifyContent:'space-between', textAlign:"center", padding:"8px 25px"}}>
                       <Typography sx={{fontSize:"20px", color:'#000'}} mt={'10px'} textAlign={'center'}>Opportunities appled</  Typography>

                       <Typography sx={{fontSize:"20px", color:'#BF8539'}} mt={'10px'} textAlign={'center'}>35</  Typography>
                       </Box>

                       <Divider  sx={{ width:"100%", mt:'8px'}}/>
                       <Box sx={{display:"flex", justifyContent:'space-between', textAlign:"center", padding:"8px 25px"}}>
                       <Typography sx={{fontSize:"20px", color:'#000'}} mt={'10px'} textAlign={'center'}>Opportunities won</  Typography>

                       <Typography sx={{fontSize:"20px", color:'#1d9c06'}} mt={'10px'} textAlign={'center'}>26</  Typography>
                       </Box>


                       
                       <Divider  sx={{ width:"100%", mt:'8px'}}/>
                       <Box sx={{display:"flex", justifyContent:'space-between', textAlign:"center", padding:"8px 25px"}}>
                       <Typography sx={{fontSize:"20px", color:'#000'}} mt={'10px'} textAlign={'center'}>Cureent opportunities </  Typography>

                       <Typography sx={{fontSize:"20px", color:'#757474'}} mt={'10px'} textAlign={'center'}>6</  Typography>
                       </Box>
                   </Box>
                </Box>

              </Box>
        </Box>
    </Box>
  )
}

export default Profile;