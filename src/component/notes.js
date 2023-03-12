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
import SearchIcon from "@mui/icons-material/SearchSharp";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from "@mui/material/InputBase";
import NotesBar from "./notesRows.js";


function Notes(props) {
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
      
        marginRight: theme.spacing(2),
        marginLeft: 0,
        
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(3),
          width: "auto",
        },
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
          padding: theme.spacing(1, 1, 1, 0),

          transition: theme.transitions.create("width"),
          width: "100%",
          [theme.breakpoints.up("md")]: {
            width: "20ch",
          },
        },
      }));
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


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '300px',
        color: theme.palette.text.secondary,
        boxShadow:"none",
        borderRadius:"0px"
      }));

      const BigItem = styled(Paper)(({ theme }) => ({
        backgroundColor: "transparent",
        border:"solid 1px #999",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',height: '500px',
        color: theme.palette.text.secondary,
        boxShadow:"none",
        borderRadius:"3px"
      }));

     
  return (
    <>
    <Box  sx={{height:"calc(100vh - 5rem)",paddingTop:"5rem",paddingRight:"1rem",background:"#f3f2ef",paddingTop: "5rem",paddingLeft: {sm : (props.isOpen) ? "18.5rem" : "1rem"}, width: (props.isOpen) ? "unset" : "calc(100vw - 18.5rem)", marginRight: (props.isOpen) ? "0rem" : "auto",  marginLeft: (props.isOpen) ? "0rem" : "auto"}}>
    
        <FormControl style={{ fontFamily: "public sans" }} fullWidth>
          
                <Box
                  sx={{
                    display: "flex",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    flex: "auto",
                    width: "100%",
                    padding: "10px 10px 10px 0px ",
                    border:"solid 1px #999",
                    borderRadius: "5px",
                    background:"white"
                  }}
                fullWidth>
                      <Search >
            <StyledInputBase
              placeholder="Enter keywords"
              inputProps={{ "aria-label": "search" }}
              style={{    
            }}
            />
          </Search>
          
          <Button
                    style={{ flexGrow: "0" }}
                    variant="outlined"
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                  <Box  sx={{flexGrow:"1",display:"Flex",justifyContent:"flex-end"}}>
                    
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
                </Box>
              
            
          
        </FormControl>
      <NotesBar></NotesBar>
    </Box>
    </>
  );
}

export default Notes;
