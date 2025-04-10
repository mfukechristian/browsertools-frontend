import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPeople, fetchPersonById } from "../actions/peopleAction";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    person: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchAllPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPersonById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonById.fulfilled, (state, action) => {
        state.loading = false;
        state.person = action.payload;
      })
      .addCase(fetchPersonById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default peopleSlice.reducer;
