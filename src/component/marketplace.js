import React from "react";
import Card from "./card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/SearchSharp";
import TextField from "@mui/material/TextField";

function Club(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    cursor: "pointer",

    color: theme.palette.text.secondary,
    boxShadow: "none",
    borderRadius: "0px",
  }));

  const BigItem = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    border: "solid 1px #999",
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    boxShadow: "none",
    borderRadius: "3px",

  }));

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
          <Grid item lg={9} sx={{ overflowY: "scroll", maxHeight: "100%" }}>
            <Typography variant="overline" gutterBottom>
              Products you may like
              <Divider light />
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ p: "15px" }}
            >
              {Array.from(Array(12)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
                    <Box sx={{ width: "100%", height: "auto" }}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0064/3412/7939/products/md1_2048x.jpg?v=1625290866"
                        style={{ width: "inherit", height: "auto" }}
                        alt=""
                      />
                      <br />
                      <br />
                      <Box>
                        <Typography variant="h6">Product Name here</Typography>
                        <Typography variant="body">
                          3{" "}
                          <Rating
                            name="half-rating"
                            sx={{ position: "relative", top: "4px", mr: "0px" }}
                            defaultValue={3}
                            size="small"
                            readOnly
                          />
                          (1){" "}
                          <Typography variant="body" sx={{ mx: "10px" }}>
                            ₹424.00 INR*
                          </Typography>
                        </Typography>
                        <br />
                        <Box sx={{ mt: "10px" }}>
                          <Typography variant="subtitle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit!
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Item>
                </Grid>
              ))}
            </Grid>
            <br />
            <br />
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="overline" gutterBottom>
              Filter
            </Typography>
            <Grid container>
              <Grid item md={12}>
                <BigItem>
                  <TextField
                    label="What do you want?"
                    type="text"
                    size="small"
                    fullWidth
                  />
                  <Box sx={{display:"flex",   
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start", mt:"10px"}}>
                    <TextField
                      label="Min"
                      type="text"
                      size="small"
                      sx={{ width: "100px", mr:"15px"}}
                    />to
                    <TextField
                      label="Max"
                      type="text"
                      size="small"
                      sx={{ width: "100px", ml:"15px"}}
                    />
                  </Box>
                  <Rating
                            name="half-rating"
                            sx={{ position: "relative", top: "4px", mr: "0px", mt:"10px"}}
                            defaultValue={0}
                            size="large"
                            
                          />
                          <br />
                          <br />
                          <Button
                    style={{ flexGrow: "0" }}
                    variant="contained"
                    startIcon={<SearchIcon />}
                  fullWidth>
                    Search
                  </Button>
                </BigItem>
              </Grid>
            </Grid>
            <br />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Club;
