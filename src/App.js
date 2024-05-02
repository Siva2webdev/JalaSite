import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import MultipleTabs from './components/More/Multipletabs';
import Menu from './components/More/Menu';
import Auto from './components/More/Auto';
import Layout from "./components/Layout";
import DashboardLayout from './components/Layout';
import Collapse from './components/More/Collapse';
import Images from './components/More/Image';
import Slider from './components/More/Slider';
import Tooltip from './components/More/Tooltip';
import Popup from './components/More/Popup';
import Links from './components/More/Links';
import Cssprop from './components/More/Cssprop';
import IFrames from './components/More/IFrames';
import Create from './components/Employee/Create';
import Search from './components/Employee/Search';
import Update from './components/Employee/Update';
// import Logout from './Logout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout/>}>
        <Route path="/Home/*" element={<Dashboard />} />
        <Route path="/Home/Tabs" element={<MultipleTabs />} />
        <Route path="/Home/Menu" element={<Menu />} />
        <Route path="/Home/Auto" element={<Auto />} />
        <Route path="/Home/Collapse" element={<Collapse />} />
        <Route path="/Home/Image" element={<Images />} />
        <Route path="/Home/Slider" element={<Slider />} />
        <Route path="/Home/Tool" element={<Tooltip />} />
        <Route path="/Home/Popup" element={<Popup />} />
        <Route path="/Home/Links" element={<Links />} />
        <Route path="/Home/Css" element={<Cssprop />} />
        <Route path="/Home/Iframes" element={<IFrames />} />
        <Route path="/Employee/Create" element={<Create />} />
        <Route path="/Employee/Search" element={<Search />} />
        <Route path="/Employee/Update" element={<Update />} />
        </Route>
        <Route path="/dashboard/users" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
