import { useContext, useEffect, useRef, useState } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import ErrorModal from "./components/ErrorModal.jsx";
import BusAppContextProvider, {
	BusAppContext,
} from "./components/BusAppContextProvider";
import { API_BASE_URL, READY } from "./commons.jsx";

function App() {
	const [isStartingUp, setIsStartingUp] = useState(true);
	const errorModalRef = useRef();
	const { errMsg, setErrMsg } = useContext(BusAppContext);

	useEffect(() => {
		console.log("readying");

		const checkReadyState = () => {
			fetch(`${API_BASE_URL + READY}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("An error occurred while readying the app.");
					}
					return response.json();
				})
				.then((response) => {
					if (response.status === "Ready") {
						setIsStartingUp(false);
					} else {
						setTimeout(checkReadyState, 1000);
					}
				})
				.catch((error) => {
					console.log("in error branch");
					console.log(`err msg logged: ${error.message}`)
					setErrMsg(error.message || "An error occurred.");
					setIsStartingUp(false);
				});
		};

		checkReadyState();
	}, []);

	useEffect(() => {
		console.log("err effect running")
		if (errMsg) {
			errorModalRef.current.open();
		}
	}, [errMsg])

	console.log("App render");
	return (
		<BusAppContextProvider>
			<ErrorModal ref={errorModalRef} />

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
