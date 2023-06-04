import React from "react";
import Card from "./card";
import Post from "./post";
import Chatbox from "./chatbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material//Divider";
import TextField from "@mui/material//TextField";
import List from "@mui/material//List";
import ListItem from "@mui/material//ListItem";
import ListItemIcon from "@mui/material//ListItemIcon";
import ListItemText from "@mui/material//ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VolumeOff from "@mui/icons-material/VolumeOff";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "@fontsource/public-sans";
import UploadIcon from "@mui/icons-material/Upload";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
import ImageIcon from "@mui/icons-material/Image";

function messages(props) {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 5rem)",
          paddingTop: "5rem",
          paddingRight: "1rem",
          background: "#f3f2ef",
          paddingTop: "5rem",
          paddingLeft: { sm: props.isOpen ? "18.5rem" : "1rem" },
          width: props.isOpen ? "unset" : "calc(100vw - 18.5rem)",
          marginRight: props.isOpen ? "0rem" : "auto",
          marginLeft: props.isOpen ? "0rem" : "auto",
          
        }}
      >
        <Grid style={{ height: "100%" }} container columnSpacing={2}>
          <Grid item lg={8} sx={{ maxHeight: "100%" }}>
            <Grid container columnSpacing={2}>
              <Grid item style={{ padding: "17px 31px" }}>
                <Grid container columnSpacing={4}>
                  <Grid item>
                    <Avatar src="https://media.licdn.com/dms/image/C4D03AQH5PAUSb4FBvQ/profile-displayphoto-shrink_100_100/0/1656558636993?e=1677110400&v=beta&t=dgc5olQOtq-RiTmpUrlOri8rlQe5QjaiLMPMCyS0S_Y"></Avatar>
                  </Grid>
                  <Grid item sx={{ flexGrow: "1" }}>
                    <Grid container columnSpacing={2}>
                      <Grid lg={12}>
                        <Typography variant="body2">Harsht Namdeo</Typography>
                      </Grid>
                      <Grid lg={12}>
                        <Typography variant="caption">
                          few seconds ago
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  flexGrow: "1",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingRight: "10px",
                  color: "#666",
                }}
              >
                <IconButton
                  style={{ flexGrow: "0" }}
                  sx={{ borderRadius: "8px",mx: "10px",borderRadius:"50%"}}
                >
                  <VolumeOff sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton
                  style={{ flexGrow: "0" }}
                  sx={{ borderRadius: "8px",mx: "10px",borderRadius:"50%"}}
                >
                  <CallIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                <IconButton
                  style={{ flexGrow: "0" }}
                  sx={{ borderRadius: "8px",mx: "10px",borderRadius:"50%"}}
                >
                  <VideoCallIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Grid>
            </Grid>
            <Chatbox />
            <Divider light/>
            <FormControl style={{ fontFamily: "public sans"}} fullWidth>
            <Textarea
               placeholder="Type in here…" 
              style={{
                border: "none",
                background: "white",
                borderLeft: "0px",
                borderRight: "0px",
                borderRadius: "0px",padding:"2rem 2rem 1rem 2rem"
              }}
              minRows={4}
              endDecorator={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "var(--Textarea-paddingBlock)",
                      pt: "var(--Textarea-paddingBlock)",
                      borderTop: "1px solid",
                      borderColor: "divider",
                      flex: "auto",
                      width: "100px"
                      ,boxSizing:"border-box",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box style={{ flexGrow: "1" }}>
                      <IconButton
                        style={{ flexGrow: "0" }}
                        color="primary"
                        sx={{ borderRadius: "8px", fontSize: "1.2rem" }}
                      >
                        😍
                      </IconButton>

                      <IconButton
                        style={{ flexGrow: "0" }}
                        color="primary"
                        sx={{ borderRadius: "8px", fontSize: "1.2rem" }}
                      >
                        🖼️
                      </IconButton>
                      <IconButton
                        style={{ flexGrow: "0" }}
                        color="primary"
                        sx={{ borderRadius: "8px", fontSize: "1.2rem" }}
                      >
                        🎁
                      </IconButton>
                      <IconButton
                        style={{ flexGrow: "0" }}
                        color="primary"
                        sx={{ borderRadius: "8px", fontSize: "1.2rem" }}
                      >
                        📄
                      </IconButton>
                    </Box>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </Box>
                </>
              }
            />
          </FormControl>
          </Grid>

          <Grid item lg={4} sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Divider />
            <List>
              <ListItem button key="Syed Azin Ali">
                <ListItemIcon>
                  <Avatar
                    alt="Syed Azin Ali"
                    src="https://media.licdn.com/dms/image/C5603AQHrBXcHnEGQ_Q/profile-displayphoto-shrink_100_100/0/1628697790719?e=1677110400&v=beta&t=q5zJOLAr4XCiNm0f6LG5Vf8gQF0u_fhG0ZVhdQeoSQs"
                  />
                </ListItemIcon>
                <ListItemText primary="Syed Azin Ali">Syed Azin Ali</ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>
              <ListItem button key="Manushree Singh">
                <ListItemIcon>
                  <Avatar
                    alt="Manushree Singh"
                    src="https://media.licdn.com/dms/image/D4E03AQEzSR09Z_GDoA/profile-displayphoto-shrink_400_400/0/1669745743767?e=1677110400&v=beta&t=wJYDkF0XM9A50L-90uOW0J-wBQ2zUL3BTTUh_qKp7VQ"
                  />
                </ListItemIcon>
                <ListItemText primary="Manushree Singh">Manushree Singh</ListItemText>
              </ListItem>
              <ListItem button key="Dhairya Verma">
                <ListItemIcon>
                  <Avatar
                    alt="Dhairya Verma"
                    src="https://media.licdn.com/dms/image/C5603AQF3c0t-lEG_rA/profile-displayphoto-shrink_100_100/0/1628019964135?e=1677110400&v=beta&t=_Uc9FeCouHHJsCWO0XCCU8YlsHhzPot__OjlnAcglkw"
                  />
                </ListItemIcon>
                <ListItemText primary="Dhairya Verma">Dhairya Verma</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default messages;
