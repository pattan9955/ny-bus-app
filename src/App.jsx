import { useContext, useEffect, useState } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import BusAppContextProvider, {
	BusAppContext,
} from "./components/BusAppContextProvider";


function App() {
	const { target, selectedMode } = useContext(BusAppContext);
  // const [] = useState();

  useEffect(() => async function() {

  }, [])

	const options = [
		{ label: "xdd1", value: "xdd1" },
		{ label: "xdd2", value: "xdd2" },
		{ label: "xdd3", value: "xdd3" },
		{ label: "xdd4", value: "xdd4" },
		{ label: "xdd5", value: "xdd5" },
		{ label: "xdd6", value: "xdd6" },
	];

	return (
		<BusAppContextProvider>
			<div className="flex flex-col w-svh h-svh">
				<Controls options={options} />
				<MapView />
			</div>
		</BusAppContextProvider>
	);
}

export default App;
