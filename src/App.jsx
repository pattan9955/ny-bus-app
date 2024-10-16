import { useContext, useEffect, useState } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import BusAppContextProvider, {
	BusAppContext,
} from "./components/BusAppContextProvider";
import { API_BASE_URL, READY } from "./commons.jsx";

function App() {
	const [isStartingUp, setIsStartingUp] = useState(false);

	useEffect(() => {
		console.log("readying");
		setIsStartingUp(true);

		const checkReadyState = () => {
			fetch(`${API_BASE_URL + READY}`)
				.then(response => {
					if (!response.ok) {
						throw new Error("An error occurred while readying the app.");
					}
					return response.json();
				})
				.then(response => {
					if (response.status === "Ready") {
						setIsStartingUp(false);
					} else {
						setTimeout(checkReadyState, 1000);
					}
				})
				.catch(error => {
					console.log(error);
					setIsStartingUp(false);
				})
		};

		checkReadyState();
	}, []);

	return (
		<BusAppContextProvider>
			{isStartingUp && <h1>Starting up...</h1>}
			{!isStartingUp && (
				<div className="flex flex-col w-svh h-svh">
					<Controls />
					<MapView />
				</div>
			)}
		</BusAppContextProvider>
	);
}

export default App;
