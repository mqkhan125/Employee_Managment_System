import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employeePopup: false,
    deletPopup : false,
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
        }
    }
})

export const { openEmployeePopup, closeEmployeePopup } = employeePopupSlice.actions
export default employeePopupSlice.reducer