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

	// Startup loop to check API readiness, runs once
	useEffect(
		() =>
			async function () {
				console.log("readying");
				try {
					setIsStartingUp(true);
					while (true) {
						const response = await fetch(`${API_BASE_URL + READY}`);
						if (!response.ok) {
							throw new Error(
								"An error occurred while readying the app."
							);
						}
						const respData = await response.json();
						if (respData.status === "Ready") {
							break;
						}
					}
					setIsStartingUp(false);
				} catch (error) {
					// error handling
				}
			},
		[]
	);

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
