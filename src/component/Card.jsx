import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

export default function MultiActionAreaCard(props) {
    
  return (
    <Card sx={{ width:"230px",m:".6%",boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",':hover': {
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
      }, }}  >
      <CardActionArea          sx={{p:1}} onClick={()=>props.clicked(props.datax)}>
        <CardMedia
          component="img"
          height="200"
          width="auto"
          image={`https://covers.openlibrary.org/b/olid/${props.datax.cover_edition_key}-M.jpg`}
          alt="green iguana"
 
        />
        <CardContent sx={{padding:.9}}>
          <Typography gutterBottom variant="h6" sx={{margin:.5}} component="div">
            {props.datax.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.datax.author_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(props.datax.id_google===undefined)?<Button size="medium" color="primary" sx={{color:"red"}}>NOT AVAILABLE ON GOOGLE</Button>:<a href={`https://www.google.co.in/books/edition/Slow_reading/${props.datax.id_google[0]}?hl=en .`} style={{textDecoration:"none",position:"absolute",marginBottom:"5px"}}>
           <Button size="medium" color="primary">
           AVAILABLE ON GOOGLE &nbsp; <ShareIcon/>
        </Button></a>
        }
      
      </CardActions>
    </Card>
  );
}
