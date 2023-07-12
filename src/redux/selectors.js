export const getContacts = state => state.contacts;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter) ||
      contact.number.trim().includes(normalizedFilter)
  );

  if (normalizedFilter && !filteredContacts.length) {
    alert(`No contacts matching your request`);
  }
  return filteredContacts;
};

export const getFilter = store => store.filter;
