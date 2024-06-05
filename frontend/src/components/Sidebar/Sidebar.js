

import React, { useState } from "react";

import { Link } from "react-router-dom";


import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ThemeProvider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";

import {

  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  Home,
  People,
  UnfoldMore,
  Settings,
  SwipeRightAlt,
  PersonAddAlt1,
  PersonSearch,
} from "@mui/icons-material";

// import FlexBetween from "./FlexBetween";

const SidebarContent = ({

  isNonMobile,
  // isSidebarContentOpen,
  // setIsSidebarContentOpen,

}) => {
// function Sidebar(drawerWidth) {
  // Define state and click handlers for each dropdown

  const [openDropdown1, setOpenDropdown1] = useState(false);

  const [openDropdown2, setOpenDropdown2] = useState(false);





  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const theme = useTheme();

  // Define click handlers for each dropdown

  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };

  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };



  return (
    <ThemeProvider theme={theme}>
      <Drawer
        open={isSidebarContentOpen}
        onClose={() => setIsSidebarContentOpen(false)}
        anchor="left"
        variant={isNonMobile ? "temporary" : "persistent"}
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],

            backgroundColor: theme.palette.background.alt,

            boxSizing: "border-box",
          },
        }}
      >
        {/*
            <a href="/dashboard">

<img src="/logo.png" alt="Custom Icon" />

</a> */}
        {/* <h1>
          <center>Content</center>
        </h1> */}
        <Box width={isNonMobile ? "100%" : 240}>
          <Box m="1.5rem 2rem 2rem 3rem">
            {/* <FlexBetween color={theme.palette.secondary.main}> */}
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  JALA
                </Typography>
              </Box>
            {/* </FlexBetween> */}
          </Box>
          </Box>

        <List>
          {/* Dropdown 1 */}



          <ListItem button component={Link} to="/Home">
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>



          {/* Dropdown 9 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Employees" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Employee/Create">
                <ListItemIcon>
                  <PersonAddAlt1 />
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItem>
              <ListItem button component={Link} to="/Employee/Search">
                <ListItemIcon>
                  <PersonSearch />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <UnfoldMore />
            </ListItemIcon>


            <ListItemText primary="More" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Home/Tabs">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Multiple Tabs" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Menu">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Menu" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Home/Auto">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Autocomplete" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Collapse">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Collapsible Content" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Home/Image">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Images" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Slider">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Slider" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Home/Tool">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Tooltips" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Popup">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Popups" />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Home/Links">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Links" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Css">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="CSS Properties" />
              </ListItem>
              <ListItem button component={Link} to="/Home/Iframes">
                <ListItemIcon>
                  <SwipeRightAlt />
                </ListItemIcon>
                <ListItemText primary="Iframes" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component={Link} to="/Home">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      {isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarContentOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarContentOpen(!isSidebarContentOpen)}
        sx={{
          position: 'fixed',
          top: '1%',
          left: '1%',
          transform: 'translateY(50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarContentOpen ? <ChevronLeft  sx={{bgcolor:"#bda140",
          color:"black",borderRadius:"3rem", fontSize:"2rem"}}/> : <ChevronRight sx={{bgcolor:"black",
          color:"#bda140", borderRadius:"3rem", fontSize:"2rem"}} />}
      </IconButton>
      )}
    </ThemeProvider>
  );
};

export default SidebarContent;

