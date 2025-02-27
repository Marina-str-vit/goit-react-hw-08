import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchAll } from './contactsOps';
const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, handlePending)
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAll.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex !== -1) {
          state.items[itemIndex] = action.payload;
        }
      });
  },
});

export const contactReducer = slice.reducer;