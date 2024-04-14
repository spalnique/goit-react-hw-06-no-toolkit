const init_state = '';

export const filterReducer = (state = init_state, action) => {
  switch (action.type) {
    case 'contacts/filterContacts':
      return action.payload;
    default:
      return state;
  }
};
