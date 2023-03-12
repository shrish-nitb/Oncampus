import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/MenuSharp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftSharp";
import ChevronRightIcon from "@mui/icons-material/ChevronRightSharp";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Popper from '@mui/material/Popper';

import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInboxSharp";
import MailIcon from "@mui/icons-material/MailSharp";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/SearchSharp";
import AccountCircle from "@mui/icons-material/AccountCircleSharp";
import NotificationsIcon from "@mui/icons-material/NotificationsSharp";
import MoreIcon from "@mui/icons-material/MoreVertSharp";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Messages from "./messages";
import Club from "./clubs";
import Market from "./marketplace";
import PopperCard from "./popperCard";
import Notes from "./notes";

import HomeIcon from "@mui/icons-material/Home";
import MessagesIcon from "@mui/icons-material/Forum";
import ClubsIcon from "@mui/icons-material/Groups";
import NotesIcon from "@mui/icons-material/LibraryBooks";
import MarketIcon from "@mui/icons-material/LocalGroceryStore";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";


import "./styles.css";

const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PersistentDrawerLeft() {

  const [anchorPopEl, setanchorPopEl] = React.useState(null);

  const handlePopClick = (event) => {
    setanchorPopEl(anchorPopEl ? null : event.currentTarget);
  };

  const openPop = Boolean(anchorPopEl);
  const id = openPop ? 'simple-popper' : undefined;


  const theme = useTheme();
  const [open, setOpen] = React.useState(!(window.location.href.toString().includes("sign")));
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxzjmaAzYM2zcoqPitltJSao3sS9KrD0IhhyuZ_16BA&s" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{ background: "white", color: "#666", boxShadow: "none" }}
        >
          <Toolbar style={{ display: (!(window.location.href.toString().includes("sign"))) ? "flex" : "none", justifyContent: "center" }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              position="static"
              sx={{ mr: 2, opacity: open ? "0" : "1" }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar
                  
                  sx={{ height: "2rem", width: "2rem" ,mx:"10px"}}
                  src="https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png"
                />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Oncampus
              
            </Typography>
            <Search sx={{ flexGrow: 0.5 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Looking for something?"
                inputProps={{ "aria-label": "search" }}
                style={{}}
              />
            </Search>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                style={{ marginLeft: "0.8rem" }}
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                style={{ marginLeft: "0.8rem" }}
                aria-describedby={id} onClick={handlePopClick}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Popper id={id} open={openPop} anchorEl={anchorPopEl}>
               <br />
        <PopperCard></PopperCard>
         
      
      </Popper>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ marginLeft: "0.8rem" }}
              >
                <Avatar
                  
                  sx={{ height: "1.875rem", width: "1.875rem" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxzjmaAzYM2zcoqPitltJSao3sS9KrD0IhhyuZ_16BA&s"
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {["Home", "Messages", "Clubs", "Notes", "Marketplace"].map(
              (text, index) => (
                
                <Link to={["/", "/messages", "/club", "/notes", "/marketplace"][index]}  style={{ textDecoration: 'none', color: "#555" }} fullWidth>
                <ListItem key={text} disablePadding>
                  
                  <ListItemButton>
                    <ListItemIcon>
                      {[<HomeIcon />, <MessagesIcon />, <ClubsIcon />, <NotesIcon />, <MarketIcon />][index]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                  
                </ListItem>
                </Link>
              )
            )}
          </List>
        </Drawer>
        <Routes>
          <Route exact path="/" element={<Home isOpen={open} />}></Route>
          {/* <Route exact path="/signin" element={<SignInSide/>}></Route>
          <Route exact path="/signup" element={<SignUpSide/>}></Route> */}
          <Route
            exact
            path="/messages"
            element={<Messages isOpen={open} />}
          ></Route>
          <Route exact path="/club" element={<Club isOpen={open} />}></Route>
          <Route exact path="/notes" element={<Notes isOpen={open} />}></Route>
          <Route
            exact
            path="/marketplace"
            element={<Market isOpen={open} />}
          ></Route>
        </Routes>
        
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Routes>
          
          <Route exact path="/signin" element={<SignInSide fullWidth/>}></Route>
          <Route exact path="/signup" element={<SignUpSide fullWidth/>}></Route>
         
        </Routes>
    </Router>
  );
}
