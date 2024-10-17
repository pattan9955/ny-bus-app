import { createContext, useState } from "react";
import { NEW_YORK_COORDS } from "../commons";

export const BusAppContext = createContext({
	selectedMode: null,
	options: [],
	target: "",
	geoJsonData: null,
	mapCenter: null,
	setSelectedMode: () => {},
	setTarget: () => {},
	setOptions: () => {},
	setGeoJsonData: () => {},
	setMapCenter: () => {}
});

export default function BusAppContextProvider({ children }) {
	const [selectedMode, setSelectedMode] = useState(null);
	const [target, setTarget] = useState("");
	const [options, setOptions] = useState([]);
	const [geoJsonData, setGeoJsonData] = useState(null);
	const [mapCenter, setMapCenter] = useState(NEW_YORK_COORDS);

	return (
		<BusAppContext.Provider
			value={{
				selectedMode: selectedMode,
				target: target,
				options: options,
				geoJsonData: geoJsonData,
				mapCenter: mapCenter,
				setSelectedMode: setSelectedMode,
                setTarget: setTarget,
				setOptions: setOptions,
				setGeoJsonData: setGeoJsonData,
				setMapCenter: setMapCenter
			}}
		>
			{children}
		</BusAppContext.Provider>
	);
}
