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
		toggleIsLoading: (state) => {
            state.value.isLoading = !(state.value.isLoading);
        },
        toggleIsStartingUp: (state) => {
            state.value.isStartingUp = !(state.value.isStartingUp);
        },
        setErrMsg: (state, action) => {
            state.value.errMsg = action.payload;
        }
	},
});

// Action Creators
export const { toggleIsLoading, toggleIsStartingUp, setErrMsg } =
	appStatusSlice.actions;

// Reducer function
export default appStatusSlice.reducer;
