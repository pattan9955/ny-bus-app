import { createSlice } from "@reduxjs/toolkit";

export const queryParamSlice = createSlice({
	name: "queryParams",
	initialState: {
		value: {
			selectedMode: null,
			options: [],
			target: "",
		},
	},
	reducers: {
		updateOptions: (state, action) => {
			state.value.options = action.payload;
		},
		updateTarget: (state, action) => {
			state.value.target = action.payload;
		},
		updateSelectedMode: (state, action) => {
			state.value.selectedMode = action.payload;
		},
	},
});

// Action Creators
export const { updateOptions, updateTarget, updateSelectedMode } =
	queryParamSlice.actions;

// Reducer function
export default queryParamSlice.reducer;
