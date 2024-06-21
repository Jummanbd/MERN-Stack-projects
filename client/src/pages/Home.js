import {
  Box,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import SingePage from '../pages/SingleCard.js';
import Nav from './Nav.js';

const Home =  () => {
  const [posts, setPosts] = useState([]);


   useEffect(() =>{
    fetch('http://localhost:8080/api/getposts').then(response => {
      response.json().then(posts => {
        console.log(posts.length);
       setPosts(posts)
      });
    });
   },[])


     return (
      <Box>
      <Nav/>
      <Box sx={{padding:"20px 100px",}}>
      <Box>
          <Typography variant="h3" sx={{marginTop:'30px', textAlign:'center'}}>Home Page</Typography>
          <Box  flexWrap={'wrap'} sx={{display:"flex",mt:"50px"}}>
          {posts.length === 0 ? (
            <Typography  sx={{textAlign:'center', position:"absolute", top:'50%', left:"50%" , transform:'translate(-50%, -50%)', color:'#CBD6DA' }} variant="h1">
              Hello,
              <br/>
                Your create post.
            </Typography>
          ) :( 
            posts.length > 0 && posts.map(post => (
              <SingePage {...post} />
            ))
          ) }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home;