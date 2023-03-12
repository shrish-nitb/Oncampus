import React from "react";
import Card from "./card";

import EventCard from "./eventCard";
import Post from "./post";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Home(props) {
 
  return (
    <>
    <Box  sx={{height:"calc(100vh - 5rem)",paddingTop:"5rem",paddingRight:"1rem",background:"#f3f2ef",paddingTop: "5rem",paddingLeft: {sm : (props.isOpen) ? "18.5rem" : "1rem"}, width: (props.isOpen) ? "unset" : "calc(100vw - 18.5rem)", marginRight: (props.isOpen) ? "0rem" : "auto",  marginLeft: (props.isOpen) ? "0rem" : "auto"}}>
      <Grid  style={{height:"100%"}} container columnSpacing={2}>
        <Grid className="posts" item lg={8} sx={{overflow:"scroll", maxHeight:"100%"}}>
            <Post/>
            <br />
            <EventCard/>
            <br />
            <EventCard/>
            <br /><br />
          <br />
          </Grid>
        <Grid item lg={4} sx={{display:{xs : "none", md: "block"}}}><Card/></Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Home;
