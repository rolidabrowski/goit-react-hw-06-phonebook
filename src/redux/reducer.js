import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(deleteContact, (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    });
});

export const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (_, { payload }) => payload);
});
