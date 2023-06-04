import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import Grid from "@mui/material/Grid";
import ContactIcon from '@mui/icons-material/ContactSupport';

import Button from "@mui/material/Button";
import GoingIcon from '@mui/icons-material/EventAvailable';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card fullWidth>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="E-Cell MANIT Bhopal"
        subheader="January 10, 2023"
      />
      <CardMedia
        component="img"
        sx={{height:"auto",width:"100%"}}
        image="https://i.ytimg.com/vi/K6W9Usve6hI/maxresdefault.jpg"
        alt="Event image"
      fullWidth/>
      <CardContent>
      <Typography variant="h6" color="text.secondary">
       Lorem ipsum dolor sit amet
        
            
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium saepe at nostrum, totam odit ratione veritatis dolorem dicta necessitatibus, deserunt placeat expedita? Quam, sunt accusantium ea consequuntur cumque doloribus soluta iure?
        </Typography> <br />
       
        <Typography variant="overline" sx={{lineHeight:0}} color="text.secondary">Civil Auditorium, Maulana Azad National Institute of Technology, Bhopal</Typography>
        <br />
        
        <Typography variant="overline" sx={{lineHeight:0}} color="text.secondary">18 December, 2022 / 09:00 AM - 05:00 PM</Typography>
        <br />
        <Typography variant="overline" sx={{lineHeight:0}} color="text.secondary">Rating :</Typography>
      <Rating name="half-rating" sx={{position:"relative",top:"4px",left:"10px"}} defaultValue={4}  size="small"/>
      <br />
        <Box sx={{display:"flex",justifyContent: "flex-end"}} fullWidth>
        <Button  sx ={{mr:"10px"}}
                  style={{ flexGrow: "0", color:"#444"}}
                  startIcon={ <GoingIcon />}
                  variant="outlined"
                  color="success"
                 size="small">
                  Register
                </Button>
        
                <Button  sx ={{ms:"10px"}}
                  style={{ flexGrow: "0"}}
                  startIcon={ <ContactIcon />}
                  variant="outlined"
                  size="small">
                  Enquire
                </Button>
        </Box>
        
      </CardContent>
      <CardActions disableSpacing>
    
        <Button  sx ={{ms:"10px"}}
                  style={{ flexGrow: "0", color:"red"}}
                  startIcon={ <FavoriteIcon />}
                >
                  3423
                </Button>
        <Button  sx ={{ms:"10px"}}
                  style={{ flexGrow: "0", color:"blue"}}
                  startIcon={ <ShareIcon />}
                >
                  342
                </Button>
      </CardActions>
    </Card>
  );
}