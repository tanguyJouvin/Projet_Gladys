import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation"> 
      <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
      <NavLink exact to="/category" activeClassName="nav-active">Menu des catégories</NavLink>
    </div>
  );
};

export default Navigation;
