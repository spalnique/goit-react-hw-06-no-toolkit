const getSavedContacts = () => {
  return JSON.parse(localStorage.getItem('contact-list'))
    ? JSON.parse(localStorage.getItem('contact-list'))
    : [];
};

const init_state = getSavedContacts();

export const contactsReducer = (state = init_state, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};
