import s from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

import Contact from "../Contact/Contact.jsx";



export default function ContactList() {
  const items = useSelector(selectFilteredContacts);

  return (
    <div className={s.wrap}>
      <ul className={s.menuList}>
        {items.map((item) => (
          <li className={s.item} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}