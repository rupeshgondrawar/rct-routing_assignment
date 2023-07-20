import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Users from "./Users";
import SinglePageUser from "./SinglePageUser";
import PageNotFound from "./PageNotFound";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="/Users/:id" element={<SinglePageUser/>}></Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
