import {
  Avatar,
  Box,
  Divider,
  LinearProgress,
  Typography
} from "@mui/material";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Nav from "./Nav.js";

  // initialvalues
  
  
  const Profile =  () => {
    var  {id}  = useParams();
  
  const [item, setItems ]= useState({});
  
  useEffect( () => {
 async function fetchData() {
  const token = localStorage.getItem('token');
  const profiles =await fetch(`http://localhost:8080/api/user/${id}`, {
    method:'GET',
    headers : { "Authorization" : `Bearer ${token}`}
  });

  const savedUsers = await profiles.json();
  console.log(savedUsers);
  setItems(savedUsers)
 }
 fetchData()
 
  }, [id]);
   const fullName = item.firstname + ' ' + item.lastname;
  // var userEmail = item.email;
       return (
        <Box sx={{  height:'100vh', width:'100%', bgcolor: "#F7F7FF"}}>
          <Nav/> 
          <Box  sx={{padding:"20px 100px",}}>
               <Box mt={'20px'} sx={{display:"flex", justifyContent:"space-between"}}>
                  <Box  sx={{width:'20%',  borderRadius:"8px",   border:1, borderColor:'#91A9C3'}}>
                      <Box >
                
                        <Box sx={{display:"flex",padding:"25px", alignItems:"center", justifyContent:'center', textAlign:"center",     flexDirection:"column"}}>
  
                          <Avatar sx={{width:'120px', height:'120px', display:'block', border:4, borderColor:"#95D2FB"}}  src={`http://localhost:8080/assets/${item.picturePath}`} />
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
                  <Box  sx={{width:'78%', height:"461px",marginLeft:'20px',padding:"20px",borderRadius:"8px", border:1, borderColor:'#91A9C3'}}>

                    <Box>
                      <Box>
                        <Typography variant="h5" fontWeight={'bolder'} mt={'20px'}>
                          About Me
                        </Typography>
                        <Box sx={{width:"50px", height:"5px", background:'linear-gradient(to right top, #933a97, #654699, #384b8e, #0c497a, #004462)', borderRadius:'4px'}}/>

                        <Typography variant="body1" color={'#6D6A6A'} mt={'20px'}>
                          I am a passionate web developer and designer with a results driven mindset. Among my priorities when working on any project is to implement effective frameworks that make your website stand out from the competition. Converting visitors into potential clients is my mantra
                        </Typography>
                        <Typography variant="body1" color={'#6D6A6A'} mt={'20px'}>
                            My approach is heavily focused on identifying my client's needs and bringing new ideas to the table. There is a myriad of tools available online that allow me to find outside the box solutions to everyday problems. As part of my process, I will also provide educational value to my client in regards to the resources that I utilize for their website. Delivering a project on time is to be expected when working with me along with consistent communication until all goals are met.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight={'bolder'} mt={'20px'}>
                          Professional Skills
                        </Typography>
                        <Box sx={{width:"50px", height:"5px", background:'linear-gradient(to right top, #933a97, #654699, #384b8e, #0c497a, #004462)', borderRadius:'4px'}}/>
                         <Box>
                          <Box>
                          <Typography color={'#6D6A6A'} fontSize={'20px'} mt={'20px'}>
                            HTML
                          </Typography>
                            <LinearProgress variant="determinate" sx={{width:"40%", padding:'2px',borderRadius:'8px', '& .MuiLinearProgress-bar': { backgroundColor: ' #FF5E0E'}}} value={60} />
                          </Box>

                          <Box>
                          <Typography color={'#6D6A6A'} fontSize={'20px'} mt={'20px'}>
                            CSS
                          </Typography>
                            <LinearProgress variant="determinate" sx={{width:"40%", padding:'2px',borderRadius:'8px', '& .MuiLinearProgress-bar': { backgroundColor: ' #2ABBC7'}}} value={90} />
                          </Box>

                          <Box>
                          <Typography color={'#6D6A6A'} fontSize={'20px'} mt={'20px'}>
                           Javascript 
                          </Typography>
                            <LinearProgress variant="determinate" sx={{width:"40%", padding:'2px',borderRadius:'8px', '& .MuiLinearProgress-bar': { backgroundColor: ' #D9BA09'}}} value={80} />
                          </Box>
                         </Box>
                      </Box>
                    </Box>

                  

                  </Box>
                </Box>
          </Box>
      </Box>
    )
  }
  
  export default Profile;