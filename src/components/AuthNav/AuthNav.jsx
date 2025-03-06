import clsx from "clsx";
import s from "../AuthNav/AuthNav.module.css";

import { NavLink } from "react-router-dom";



export default function AuthNav() {
	
	function getClassActiveLink({ isActive }) {
		return clsx(s.link, isActive && s.active)
	}

	return (
    <div className={s.container}>
      <NavLink className={getClassActiveLink} to="/register">Register</NavLink>
      <NavLink className={getClassActiveLink} to="/login">Log In</NavLink>
    </div>
  );
}