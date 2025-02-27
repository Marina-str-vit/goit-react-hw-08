import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67bda74b321b883e790d5e71.mockapi.io';

export const fetchAll = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`/contacts`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async (body, thunkAPI) => {
  try {
    const { data } = await axios.put(`/contacts/${body.id}`, body);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
