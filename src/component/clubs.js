import React from "react";
import Card from "./card";
import Grid from "@mui/material/Grid";
import Large from "./clubslarge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

import RegisterDialog from "./registerDialog";

function Club(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    height: "12.5rem",
    color: theme.palette.text.secondary,
  }));

  const SmallItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "5px",
    textAlign: "center",
    height: "auto",
    width: "auto",

    color: theme.palette.text.secondary,
  }));
 let arr1 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7InlpikScU4ESaYqopLwpMo_fnYw4bIp85Q&usqp=CAU", "https://www.medford.k12.or.us/cms/lib/OR01915738/Centricity/Domain/2128/chessclub.png"];
  let arr2 = ["https://ecellnitb.com/logo.png", "https://media.licdn.com/dms/image/C4E0BAQFhzl-_5LyP4Q/company-logo_200_200/0/1599469088797?e=1679529600&v=beta&t=NVBmyAe0CtMgKIc3YqO3rukZCGAV2AMjtu5WOC-QZlQ", "https://media.licdn.com/dms/image/C560BAQFn1uOQ1uJLCw/company-logo_200_200/0/1529648022715?e=1679529600&v=beta&t=1kCgMCPpJL3M6g7_rrct15KkCHubUOt-WDbf9w9IIuM", "https://media.licdn.com/dms/image/C510BAQH6ngPLUgGNEw/company-logo_200_200/0/1557519949231?e=1679529600&v=beta&t=q0cCLpUybhtwVAUBcJhAtp7nsOoWzSXnDT8XxHgo1sk"]
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
          <Grid
            className="hScroll"
            item
            lg={9}
            sx={{ overflowY: "scroll", maxHeight: "100%" }}
          >
            <Typography variant="overline" gutterBottom>
              Top Clubs to Follow
              <Divider light />
            </Typography>
            <br />
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Large></Large>
                </Grid>
              ))}
            </Grid>
            <br />
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: "none", md: "block" } }}>
            <RegisterDialog />

            <br />
            <Divider light />
            <Typography variant="overline" gutterBottom>
              Your Clubs
            </Typography>
            <Grid container spacing={1} sx={{height:"105px",overflowY:"scroll",pb:"0.5rem",pl:"0.8rem"}} fullWidth>
              {Array.from(Array(2)).map((_, index) => (
                
                  <Grid item>
                    <SmallItem>
                    <Avatar src={arr1[index]}></Avatar>
                    </SmallItem>
                  </Grid>
                
              ))}
            </Grid>
            <Divider light />
            <Typography variant="overline" gutterBottom>
              Clubs Following
            </Typography>
            
            <Grid container spacing={1} sx={{height:"105px",overflowY:"scroll",pb:"0.5rem",pl:"0.8rem"}} fullWidth>
              {Array.from(Array(4)).map((_, index) => (
                
                  <Grid item>
                    <SmallItem>
                   
                      <Avatar src={arr2[index]}></Avatar>
                    </SmallItem>
                  </Grid>
                
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Club;
