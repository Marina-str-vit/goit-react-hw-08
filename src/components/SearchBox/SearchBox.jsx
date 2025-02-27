import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selector';
// import { useId } from 'react';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filteredCont = useSelector(selectFilter);
  // const fieldId = useId();
  const onSearch = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.filter}>
      <p>Find contacts:</p>
      <input
        className={s.input}
        value={filteredCont}
        type="text"
        onChange={onSearch}
        placeholder="Search..."
      />
    </div>
  );
}
