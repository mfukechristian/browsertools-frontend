import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, PEOPLE_CATEGORIES_URL } from "../constants";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAll",
  async () => {
    const response = await axios.get(`${BASE_URL}${PEOPLE_CATEGORIES_URL}`);
    return response.data;
  }
);

export const fetchCategoryById = createAsyncThunk(
  "categories/fetchById",
  async (id) => {
    const response = await axios.get(
      `${BASE_URL}${PEOPLE_CATEGORIES_URL}/${id}`
    );
    return response.data;
  }
);
