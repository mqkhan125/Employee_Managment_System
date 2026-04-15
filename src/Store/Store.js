import { configureStore } from "@reduxjs/toolkit";
import employeePopupReducer from "./Features/EmplyeePopup/popup.slice";

export const store = configureStore({
    reducer: {
        popup : employeePopupReducer,
    }
})