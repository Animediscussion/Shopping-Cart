import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;
