import { useSelector } from 'react-redux';
import { getContactsList } from '../../redux/contacts/selectors';
import { getFilterValue } from '../../redux/filter/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilterValue);
  const visibleContacts = contacts.filter(({ username, phone }) => {
    if (
      username.toLowerCase().includes(filter.toLowerCase()) ||
      phone.includes(filter)
    ) {
      return { username, phone };
    } else {
      return;
    }
  });

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
