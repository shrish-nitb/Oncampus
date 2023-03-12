import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  alt='SS'/>
        </ListItemAvatar>
        <ListItemText
          primary="Notifcation 1"
          secondary={
            <React.Fragment>
              
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt='PR' />
        </ListItemAvatar>
        <ListItemText
          primary="Notifcation 2"
          secondary={
            <React.Fragment>
              
            Lorem ipsum dolor sit amet consectetur adipisicing.
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="fg" />
        </ListItemAvatar>
        <ListItemText
          primary="Notifcation 3"
          secondary={
            <React.Fragment>
              
             Lorem ipsum, dolor sit amet consectetur adipisicing.
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
