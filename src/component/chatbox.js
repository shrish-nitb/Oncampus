import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Textarea from "@mui/joy/Textarea";
import "@fontsource/public-sans";
import UploadIcon from "@mui/icons-material/Upload";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GifIcon from "@mui/icons-material/Gif";
import ImageIcon from "@mui/icons-material/Image";
import { IconButton } from "@mui/material";

export default function BasicCard() {
  return (
    <Card className="hScroll"
      sx={{
        minWidth: 275,
        height: "50%",
        boxShadow: "none"
      }}
    >
      <CardContent sx={{ paddingLeft: "0px", paddingRight: "0px", borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}>
        <Box fullwidth>
          <Grid container columnSpacing={2}>
            <Grid item lg={12} sx={{ minHeight: "1000px" }}></Grid>
          </Grid>
          
        </Box>
      </CardContent>
    </Card>
  );
}
