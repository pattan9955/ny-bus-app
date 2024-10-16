import { createContext, useState } from "react";
import { LINE_NAME_MODE, VEH_REF_MODE } from "../commons";

export const BusAppContext = createContext({
	selectedMode: null,
	options: [],
	target: "",
	geoJsonData: null,
	setSelectedMode: () => {},
	setTarget: () => {},
	setOptions: () => {},
	setGeoJsonData: () => {}
});

export default function BusAppContextProvider({ children }) {
	const [selectedMode, setSelectedMode] = useState(null);
	const [target, setTarget] = useState("");
	const [options, setOptions] = useState([]);
	const [geoJsonData, setGeoJsonData] = useState(null);

	return (
		<BusAppContext.Provider
			value={{
				selectedMode: selectedMode,
				target: target,
				options: options,
				geoJsonData: geoJsonData,
				setSelectedMode: setSelectedMode,
                setTarget: setTarget,
				setOptions: setOptions,
				setGeoJsonData: setGeoJsonData
			}}
		>
			{children}
		</BusAppContext.Provider>
	);
}
