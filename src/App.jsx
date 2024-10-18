import { useEffect, useRef } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import ErrorModal from "./components/ErrorModal.jsx";
import { API_BASE_URL, READY } from "./commons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectErrMsg, selectIsStartingUp } from "./store/selectors.jsx";
import { updateIsStartingUp } from "./features/appStatusSlice.jsx";
import StartUpPage from "./components/StartUpPage.jsx";

function App() {
	const isStartingUp = useSelector(selectIsStartingUp);
	const errMsg = useSelector(selectErrMsg);
	const dispatch = useDispatch();

	const errorModalRef = useRef();

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
						dispatch(updateIsStartingUp(false));
					} else {
						setTimeout(checkReadyState, 1000);
					}
				})
				.catch((error) => {
					console.log("in error branch");
					console.log(`err msg logged: ${error.message}`)
					dispatch(updateErrMsg(error.message || "An error occurred."));
					dispatch(updateIsStartingUp(false));
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
		<>
			<ErrorModal ref={errorModalRef} />

			{isStartingUp && <StartUpPage />}
			{!isStartingUp && (
				<div className="w-svh h-svh">
					<Controls />
					<MapView />
				</div>
			)}
		</>
	);
}

export default App;
