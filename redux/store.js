// store.js
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleReducer";
import peopleCategoryReducer from "./reducers/peopleCategoryReducer";

const store = configureStore({
  reducer: {
    people: peopleReducer,
    categories: peopleCategoryReducer,
  },
});

export default store;
