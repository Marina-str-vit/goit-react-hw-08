import { useSelector } from "react-redux";
import Contact  from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selector";

 const ContactList = () => {

  const items = useSelector(selectFilteredContacts);
  
  return (
    <ul className={s.menuList}>
       {items.map((item) => (
        <li className={s.item} key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;