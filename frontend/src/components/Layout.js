import React, { useState,useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = () => {
  const navigate = useNavigate();
  let loginData = localStorage.getItem('token');
  // console.log(loginData,typeof(loginData));
  useEffect(() => {
    if(loginData===null){
      // console.log("Inside UseEffect")
      navigate("/");
    }
  });
  const isNonMobile = useMediaQuery("(min-width:600px)");
  //returns boolean depending on the min width
  //desktop=true mobile=false
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">

      <Box flexGrow={1}>
        {/* <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
        {/* <Content
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
             <Navbar/>
                   <Sidebar      />

          <Footer/>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;

