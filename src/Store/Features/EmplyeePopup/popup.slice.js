import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employeePopup: false,
    deletePopup : false,
}

const employeePopupSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        openEmployeePopup: (state, action) => {
            state.employeePopup = action.payload ?? true
        },
        closeEmployeePopup: (state) => {
            state.employeePopup = false
        },
        openDeletePopup: (state, action) => {
            state.deletePopup = action.payload ?? true
        },
        closeDeletePopup: (state) => {
            state.deletePopup = false
        }
    }
})

export const { openEmployeePopup, closeEmployeePopup, openDeletePopup, closeDeletePopup } = employeePopupSlice.actions
export default employeePopupSlice.reducer