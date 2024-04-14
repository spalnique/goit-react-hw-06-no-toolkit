import { nanoid } from 'nanoid';

export const addContact = ({ username, phone }) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), username, phone },
  };
};

export const deleteContact = (id) => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};
