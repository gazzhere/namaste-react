const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // upper level reducer
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
