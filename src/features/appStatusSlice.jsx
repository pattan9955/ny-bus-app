import { createSlice } from "@reduxjs/toolkit";

export const appStatusSlice = createSlice({
	name: "appStatus",
	initialState: {
		value: {
			isLoading: false,
            isStartingUp: true,
            errMsg: null
		},
	},
	reducers: {
		updateIsLoading: (state, action) => {
            state.value.isLoading = action.payload;
        },
        updateIsStartingUp: (state, action) => {
            state.value.isStartingUp = action.payload;
        },
        updateErrMsg: (state, action) => {
            state.value.errMsg = action.payload;
        }
	},
});

// Action Creators
export const { updateIsLoading, updateIsStartingUp, updateErrMsg } =
	appStatusSlice.actions;

// Reducer function
export default appStatusSlice.reducer;
