import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import PDFIcon from '@mui/icons-material/Description';
import Divider from "@mui/material/Divider";
function generate(element) {
  return [0, 1, 2, 3, 4, 5].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
export default function InteractiveList() {

  return (
    <Box sx={{ flexGrow: 1 }}>
   
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 1 }} variant="h6" component="div">
            Notes in your Course
          </Typography>
          
            <List dense={true}>
              {generate(
                <>
                <ListItem sx={{marginBottom:"4px",mt:"4px"}}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DownloadIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <PDFIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Notes file name"
                    
                  />
                  
                </ListItem>
                <Divider/></>
              )}
            </List>
            
        </Grid>

    </Box>
  );
}