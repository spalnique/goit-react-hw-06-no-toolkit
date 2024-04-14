import { useDispatch } from 'react-redux';
import * as action from '../../redux/contacts/actions';
import css from './Contact.module.css';

const Contact = ({ contact: { id, username, phone } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li>{username}</li>
        <li>{phone}</li>
      </ul>
      <button
        className={css.contactRemoveButton}
        type="button"
        onClick={() => dispatch(action.deleteContact(id))}>
        delete
      </button>
    </div>
  );
};

export default Contact;
