import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactLisct';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selector';
import Loading from '../Loading/Loading';
import { fetchAll } from '../../redux/contactsOps';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <SearchBox />
      {error && <ErrorMessage>Error!</ErrorMessage>}
      {loading && !error && <Loading />}
      <ContactList />
    </div>
  );
};

export default App;
