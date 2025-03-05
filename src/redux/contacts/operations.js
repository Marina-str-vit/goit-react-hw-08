import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (items, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", items);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (itemId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${itemId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  "contacts/patchContact",
  async (updatedContact, thunkAPI) => {
    const { id, name, number } = updatedContact;
    try {
      const res = await axios.patch(`/contacts/${id}`, { name, number });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



// це ПОЧАТОК, щоб подивитися відображені дані з серверу, потім розбили запити окремо по кнопкам
// export const fetchData = additional_data => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get('https://67b37562392f4aa94fa74786.mockapi.io/tasks');
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
