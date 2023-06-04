
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="auto" image="https://img.freepik.com/free-vector/role-audition-abstract-concept-vector-illustration-actor-audition-acting-skills-demonstration-cinematography-main-cast-talent-search-introduction-interview-leading-role-abstract-metaphor_335657-6300.jpg?w=2000"
      fullWidth/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Club Name <Rating name="half-rating" sx={{position:"relative",top:"1px",left:"38px"}} defaultValue={4}  size="small" readOnly/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, similique.
        </Typography>
        
        <Typography variant="overline" color="text.secondary">
     3243 M | 1343 online  
        </Typography>
      
      </CardContent>
      <CardActions sx={{position:"relative",top:"-10px",mx:"0px"}}>
        <Button size="small"><Typography variant="button">
        Join Now
        </Typography></Button>
        <Button size="small"><Typography variant="button">
        Explore More
        </Typography></Button>
      </CardActions>
    </Card>
  );
}