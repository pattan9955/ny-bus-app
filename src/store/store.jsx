import { configureStore } from "@reduxjs/toolkit";
import queryParamReducer from "../features/queryParamSlice.jsx";
import mapParamReducer from "../features/mapParamSlice.jsx";
import appStatusReducer from "../features/appStatusSlice.jsx";

export const store = configureStore({
    reducer: {
        queryParams: queryParamReducer,
        mapParams: mapParamReducer,
        appStatus: appStatusReducer
    }
});