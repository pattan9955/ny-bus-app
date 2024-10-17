import { createSlice } from "@reduxjs/toolkit";
import { NEW_YORK_COORDS } from "../commons";

export const mapParamSlice = createSlice({
	name: "mapParams",
	initialState: {
		value: {
			geoJsonData: null,
            mapCenter: NEW_YORK_COORDS
		},
	},
	reducers: {
		updateGeoJsonData: (state, action) => {
			state.value.geoJsonData = action.payload;
		},
		updateMapCenter: (state, action) => {
			state.value.mapCenter = action.payload;
		}
	},
});

// Action Creators
export const { updateGeoJsonData, updateMapCenter } =
	mapParamSlice.actions;

// Reducer function
export default mapParamSlice.reducer;
