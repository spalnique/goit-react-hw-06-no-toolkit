import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContactsList } from '../../redux/contacts/selectors';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(getContactsList);

  useEffect(() => {
    localStorage.setItem('contact-list', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.mainContainer}>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
