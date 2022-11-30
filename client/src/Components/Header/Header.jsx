import React, { useEffect, useState } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/activetechstylelogo.png";
import cartLogo from "../../assets/cartlogo.jpg";
import magnifyglassLogo from "../../assets/magnifyglass.jpg";

export const Header = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState("false");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(localStorage.getItem("token"))
  }, []);

  const handleSignout = () => {
    localStorage.setItem("token", "false");
    setToken(localStorage.getItem("token"))
    navigate("/");
  }

  return (
    <div className="header_container">
      <div className="header_logo">
        <a href="/">
          <img src={logo} height={60} />
        </a>
      </div>
      <div className="header_category">
        <button onClick={() => navigate("/active")}>Active</button>
        <button onClick={() => navigate("/tech")}>Tech</button>
        <button onClick={() => navigate("/style")}>Style</button>
        <input placeholder="Search" />
        <button>
          <img img src={magnifyglassLogo} height={20} />
        </button>
      </div>
      <div className="header_login">
        {token=="true" ? (
          <button onClick={() => handleSignout()}>Signout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login / Signup</button>
        )}

        <img img src={cartLogo} height={40} onClick={() => navigate("/cart")} />
      </div>
    </div>
  );
};
