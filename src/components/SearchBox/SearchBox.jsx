import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice.js";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selector.js";
import { CgSearch } from "react-icons/cg";
import { IconContext } from "react-icons";



export default function SearchBox() {
	const fieldId = useId();
	
  const dispatch = useDispatch();

  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleFindName = (e) => {
    const value = e.target.value;
    dispatch(
      changeFilter({
        name: value.toLowerCase(),
        number: value,
      })
    );
  };

  return (
    <div className={css.container}>
      <div className={css.formContainer}>
        <label className={css.inputLabel} htmlFor={`${fieldId}-name`}>
        </label>
        <div className={css.iconPosition}>
          <input
            className={css.input}
            id={`${fieldId}-name`}
            type="text"
            value={name || number}
            onChange={handleFindName}
          />
          <IconContext.Provider value={{ size: "1.2em" }}>
            <span className={css.inputIcon}>
            <CgSearch />
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
