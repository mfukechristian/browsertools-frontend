import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PEOPLE_URL } from "../constants";

export const fetchAllPeople = createAsyncThunk("people/fetchAll", async () => {
  const response = await axios.get(`${BASE_URL}${PEOPLE_URL}`);
  return response.data;
});

export const fetchPersonById = createAsyncThunk(
  "people/fetchById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}${PEOPLE_URL}/${id}`);
    return response.data;
  }
);
