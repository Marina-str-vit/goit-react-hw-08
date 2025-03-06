import s from "../Navigation/Navigation.module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";



export default function Navigation() {
	
  function getClassActiveLink({ isActive }) {
    return clsx(s.link, isActive && s.active);
  }

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul>
        <li className={s.headerLink}>
          <NavLink className={getClassActiveLink} to="/">
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li className={s.headerLink}>
            <NavLink className={getClassActiveLink} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}