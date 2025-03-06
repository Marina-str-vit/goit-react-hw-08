import s from "../NotFoundPage/NotFoundPage.module.css";

import { Link } from "react-router-dom";



export default function NotFoundPage() {
	
  return (
    <p className={s.text}>
      Sorry, page not found! Please go to <Link to="/" className={s.link}> 
        Home Page!
      </Link>      
    </p>
  );
}