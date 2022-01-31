import { configureStore } from "@reduxjs/toolkit";
import loader from "./loader";
import network from "./network";
export default configureStore({
  reducer: {
    loader: loader,
    network: network,
  },
});
