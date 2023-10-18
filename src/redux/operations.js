import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://652ecd060b8d8ddac0b1e94f.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "tasks/fetchAll",
    async (_, thunkAPI) => {
        try {
        const response = await axios.get("/contacts");
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async (contact, thunkAPI) => {
        try {
        const response = await axios.post("/contacts", {
            createdAt: Date.now(),
            name: contact.name,
            phone: contact.number,
        });
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (contactId, thunkAPI) => {
        try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data.id;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);