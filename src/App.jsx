import React from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import BusAppContextProvider from "./components/BusAppContextProvider";

function App() {
	return (
		<BusAppContextProvider>
			<div className="flex flex-col w-svh h-svh">
				<Controls />
				<MapView />
			</div>
		</BusAppContextProvider>
	);
}

export default App;
