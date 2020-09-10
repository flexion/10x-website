import { configureStore } from "@reduxjs/toolkit";
import content from "./ContentModule";
import swapi from "./SwapiModule";

export default configureStore({
  reducer: {
    content,
    swapi,
  },
});
