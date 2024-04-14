export const filterContacts = (text) => {
  return {
    type: 'contacts/filterContacts',
    payload: text,
  };
};
