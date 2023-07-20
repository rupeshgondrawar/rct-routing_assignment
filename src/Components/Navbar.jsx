import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const links = [
  { path: "/", title: "Home" },
  { path: "/About", title: "About" },
  { path: "/Contact", title: "Contact" },
  { path: "/Users", title: "Users" },
];

function Navbar() {
  // const defaultStyle = {
  //   textDecoration: "none",
  //   color: "none",
  // };

  // const ActiveStyle = {
  //   textDecoration: "none",
  //   color: "red",
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        margin: "auto",
      }}
    >
      {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? ActiveStyle : defaultStyle;
          // }}

          className={({isActive})=>{return isActive ? styles.active : styles.default}}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
      ;
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Users">Users</Link> */}
    </div>
  );
}

export default Navbar;
