export const selectIsLoading = (state) => state.appStatus.value.isLoading;
export const selectIsStartingUp = (state) => state.appStatus.value.isStartingUp;
export const selectErrMsg = (state) => state.appStatus.value.errMsg;

export const selectGeoJsonData = (state) =>  state.mapParams.value.geoJsonData;
export const selectMapCenter = (state) => state.mapParams.value.mapCenter;

export const selectSelectedMode = (state) => state.queryParams.value.selectedMode;
export const selectTarget = (state) => state.queryParams.value.target;
export const selectOptions = (state) => state.queryParams.value.options;
