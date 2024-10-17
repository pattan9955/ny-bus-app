import { createContext, useState } from "react";
import { NEW_YORK_COORDS } from "../commons";

export const BusAppContext = createContext({
	selectedMode: null,
	options: [],
	target: "",
	geoJsonData: null,
	mapCenter: null,
	isLoading: false,
	errMsg: null,
	setSelectedMode: () => {},
	setTarget: () => {},
	setOptions: () => {},
	setGeoJsonData: () => {},
	setMapCenter: () => {},
	setIsLoading: () => {},
	setErrMsg: () => {}
});

export default function BusAppContextProvider({ children }) {
	const [selectedMode, setSelectedMode] = useState(null);
	const [target, setTarget] = useState("");
	const [options, setOptions] = useState([]);
	const [geoJsonData, setGeoJsonData] = useState(null);
	const [mapCenter, setMapCenter] = useState(NEW_YORK_COORDS);
	const [errMsg, setErrMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<BusAppContext.Provider
			value={{
				selectedMode: selectedMode,
				target: target,
				options: options,
				geoJsonData: geoJsonData,
				mapCenter: mapCenter,
				isLoading: isLoading,
				errMsg: errMsg,
				setSelectedMode: setSelectedMode,
                setTarget: setTarget,
				setOptions: setOptions,
				setGeoJsonData: setGeoJsonData,
				setMapCenter: setMapCenter,
				setIsLoading: setIsLoading,
				setErrMsg: setErrMsg
			}}
		>
			{children}
		</BusAppContext.Provider>
	);
}
