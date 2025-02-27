import s from "./ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return <p className={s.error}>{children}</p>;
}