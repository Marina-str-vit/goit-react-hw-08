import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <div className={s.contacts}>
      <div>
         <p className={s.name}>{item.name}</p>     
          <p className={s.name}>{item.number}</p>
      </div>
      <div>
        <button className={s.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </div>
  );
}