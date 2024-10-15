import { createContext, useState } from "react";

export const BusAppContext = createContext({
	selectedMode: null,
	target: "",
	setSelectedMode: () => {},
	setTarget: () => {},
});

export default function BusAppContextProvider({ children }) {
	const [selectedMode, setSelectedMode] = useState(null);
	const [target, setTarget] = useState("");

	return (
		<BusAppContext.Provider
			value={{
				selectedMode: selectedMode,
				target: target,
				setSelectedMode: setSelectedMode,
                setTarget: setTarget
			}}
		>
			{children}
		</BusAppContext.Provider>
	);
}
