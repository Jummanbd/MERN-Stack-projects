import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import { useState } from "react";

const SingePage = ({title, desc, picturePath}) =>{
   const [show, setShow] = useState(false);
 return( 
    <Box m={'20px'}>
        <Card sx={{ maxWidth: 300, boxShadow:' rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            width={'300px'}
            height={'180px'}
            
            image={`http://localhost:8080/assets/${picturePath}`}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {show ? desc :`${desc.substring(0, 225)}`}
                <Typography color={"#00BDF9"} variant="body2" onClick={() => setShow(!show)}>
                {show ? "show less" : "...show more"}
                </Typography>
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>    
    </Box>
 )
} 

export default SingePage;