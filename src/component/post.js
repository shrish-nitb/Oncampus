import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
// import FormControl from "@mui/joy/FormControl";
import FormControl from "@mui/material/FormControl";
import Textarea from "@mui/joy/Textarea";
import "@fontsource/public-sans";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import UploadIcon from "@mui/icons-material/Upload";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import Divider from "@mui/material//Divider";

export default function Post() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Sem, setSem] = React.useState("");

  const handleSemChange = (event) => {
    console.log(event.target.value);
    setSem(event.target.value);
  };

  const [Branch, setBranch] = React.useState("");

  const handleBranchChange = (event) => {
    console.log(event.target.value);
    setBranch(event.target.value);
  };

  const [Course, setCourse] = React.useState("");

  const handleCourseChange = (event) => {
    console.log(event.target.value);
    setCourse(event.target.value);
  };

  const [Sub, setSub] = React.useState("");

  const handleSubChange = (event) => {
    console.log(event.target.value);
    setSub(event.target.value);
  };

  let cardContent;
  if (value == 0) {
    cardContent = (
      <FormControl style={{ fontFamily: "public sans" }} fullWidth>
        <Textarea
          placeholder="Write product description, personal contact..."
          style={{
            border: "1px solid #d1d1d1",
            borderTopLeftRadius: "0px",
            paddingTop: "1rem",
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
                  width: "100px",
                  justifyContent: "flex-end",
                }}
              >
                <TextField
                  label="Product name"
                  type="text"
                  size="small"
                  sx={{ flexGrow:"1" }}
                />
                <TextField
                  label="Price"
                  type="text"
                  size="small"
                  sx={{ width: "150px" }}
                />
                <Button
                  style={{ flexGrow: "0" }}
                  variant="outlined"
                  startIcon={<UploadIcon />}
                >
                  Upload Image
                </Button>
              </Box>
            </>
          }
        />
      </FormControl>
    );
  } else if (value == 1) {
    cardContent = (
      <>
        <FormControl style={{ fontFamily: "public sans" }} fullWidth>
          <Textarea
            placeholder="Write description of your notes"
            style={{
              border: "1px solid #d1d1d1",
              borderTopLeftRadius: "0px",
              paddingTop: "1rem",
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
                    width: "100px",
                  }}
                >
                  <Box style={{ flexGrow: "1" }}>
                    <FormControl sx={{ mr: "10px" }} size="small">
                      <InputLabel id="LabelForCourse">Course</InputLabel>
                      <Select
                        labelId="LabelForCourse"
                        value={Course}
                        label="Course"
                        onChange={handleCourseChange}
                        style={{ width: "120px" }}
                      >
                        <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
                        <MenuItem value={"B.Arch"}>B.Arch</MenuItem>
                        <MenuItem value={"MCA"}>MCA</MenuItem>
                        <MenuItem value={"M.Tech"}>M.Tech</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl size="small" sx={{ mr: "10px" }}>
                      <InputLabel id="LabelForBranch">Branch</InputLabel>
                      <Select
                        labelId="LabelForBranch"
                        value={Branch}
                        label="Branch"
                        onChange={handleBranchChange}
                        style={{ width: "120px" }}
                      >
                        <MenuItem value={"CSE"}>Computer Science</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ mr: "10px" }} size="small">
                      <InputLabel id="LabelForSem">Semester</InputLabel>
                      <Select
                        labelId="LabelForSem"
                        value={Sem}
                        label="Semester"
                        onChange={handleSemChange}
                        style={{ width: "120px" }}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl size="small">
                      <InputLabel id="LabelForSub">Subject</InputLabel>
                      <Select
                        labelId="LabelForSub"
                        value={Sub}
                        label="Subject"
                        onChange={handleSubChange}
                        style={{ width: "120px" }}
                      >
                        <MenuItem value={"DSA"}>Data Structures</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Button
                    style={{ flexGrow: "0" }}
                    variant="outlined"
                    startIcon={<UploadIcon />}
                  >
                    Upload notes
                  </Button>
                </Box>
              </>
            }
          />
        </FormControl>
      </>
    );
  } else if (value == 2) {
    cardContent = (
      <>
        <FormControl style={{ fontFamily: "public sans" }} fullWidth>
          <Textarea
            placeholder="Write Event description"
            style={{
              border: "1px solid #d1d1d1",
              borderTopLeftRadius: "0px",
              paddingTop: "1rem",
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
                    width: "100px",
                    justifyContent: "flex-end",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid item lg="12">
                    
      <Textarea label="Outlined" placeholder="Event name" variant="soft" fullWidth/>
                    </Grid>
                    <Grid item lg="12">
      <Textarea label="Outlined" placeholder="Venue" variant="soft" fullWidth/>
                    </Grid>
                    
                    <Grid item lg="4">
      <Textarea label="Outlined" placeholder="Date" variant="soft" fullWidth/>
                    </Grid>
                    <Grid item lg="4">
      <Textarea label="Outlined" placeholder="Time" variant="soft" fullWidth/>
      
                    </Grid>
                    
                    <Grid item lg="4" sx={{
                    display: "flex",
                   
                    justifyContent: "flex-end",
                   
                  }}>
                    
                      <Button
                        
                        variant="outlined"
                        startIcon={<UploadIcon />}
                      >
                        Upload Image
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </>
            }
          />
        </FormControl>
      </>
    );
  }
  return (
    <Card sx={{ minWidth: 275, boxShadow: "none", padding: "0rem 1rem" }}>
      <CardContent>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab
            // icon={<PhoneIcon />}
            style={{ fontSize: "10px" }}
            label="SELL"
          />
          <Tab
            // icon={<FavoriteIcon />}
            style={{ fontSize: "10px" }}
            label="NOTES"
          />
          <Tab
            // icon={<PersonPinIcon />}
            style={{ fontSize: "10px" }}
            label="EVENT"
          />
        </Tabs>
        {cardContent}
      </CardContent>
      <Box sx={{display:"flex",justifyContent: "flex-end",mr:"15px"}} fullWidth>
        <Button  sx ={{mr:"10px"}}
                  style={{ flexGrow: "0", color:"#444"}}
                  startIcon={ <SaveAsOutlinedIcon  />}
                  variant="outlined"
                  color="success"
                 >
                  Draft
                </Button>
        
                <Button  sx ={{ms:"10px"}}
                  style={{ flexGrow: "0"}}
                  startIcon={ <SendOutlinedIcon />}
                  variant="contained"
                  >
                  POST
                </Button>
        </Box>
      <br />
    </Card>
  );
}
