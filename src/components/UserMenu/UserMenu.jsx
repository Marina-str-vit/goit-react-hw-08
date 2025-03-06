import s from "./UserMenu.module.css";

import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

import { logOut } from "../../redux/auth/operations";



export default function UserMenu() {
  const user = useSelector(selectUser);

	const dispatch = useDispatch();
	
  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name} 🤗</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}