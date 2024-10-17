import { useContext, useEffect } from "react";
import { BusAppContext } from "./BusAppContextProvider";

import RadioButton from "./RadioButton";
import Select from "react-select";
import {
	API_BASE_URL,
	LINE_NAMES,
	VEH_REF,
	LINE_NAME_MODE,
	VEH_REF_MODE,
	BUS_TRIP_BY_VEH_REF,
	BUS_TRIP_BY_LINE_NAME,
} from "../commons";

export default function Controls() {
	const {
		selectedMode,
		target,
		options,
		geoJsonData,
		setOptions,
		setTarget,
		setGeoJsonData,
	} = useContext(BusAppContext);

	const handleQuery = async (event) => {
		event.preventDefault();
		let url = `${
			API_BASE_URL +
			(selectedMode === VEH_REF_MODE
				? BUS_TRIP_BY_VEH_REF
				: BUS_TRIP_BY_LINE_NAME) +
			target
		}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Error occurred while fetching query results.");
			}
			const respData = await response.json();
			console.log(respData);
			setGeoJsonData(respData);
		} catch (error) {
			console.log(error);
		}
	};

	// Fetch new options based on value of selectedMode
	useEffect(() => {
		console.log("Fetching options effect");
		if (!selectedMode) {
			return;
		} else {
			const url =
				selectedMode === VEH_REF_MODE
					? `${API_BASE_URL + VEH_REF}`
					: `${API_BASE_URL + LINE_NAMES}`;

			const errorMsg =
				selectedMode === VEH_REF_MODE
					? "An error occurred while fetching vehicle reference numbers."
					: "An error occured while fetching line names.";

			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw new Error(errorMsg);
					}
					return res.json();
				})
				.then((res) => {
					const opts = res
						.map((refName) => ({
							label: refName,
							value: refName,
						}))
						.sort((a, b) => a.value.localeCompare(b.value));
					setOptions([...opts]);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [selectedMode]);

	return (
		<div className="my-9 pb-10 mx-auto">
			<form className="w-full h-full bg-slate-400 px-5 py-3 rounded-md">
				<div className="flex flex-row">
					<RadioButton
						className="mx-2"
						labelName="By Vehicle Reference"
						value={VEH_REF_MODE}
					/>
					<RadioButton
						className="mx-2"
						labelName="By Line Name"
						value={LINE_NAME_MODE}
					/>
				</div>
				<Select
					className="w-full"
					defaultValue={target}
					placeholder="Choose a target..."
					onChange={(event) =>
						event ? setTarget(event.value) : setTarget(null)
					}
					options={options}
					isClearable={true}
					styles={{
						menu: (baseStyles, state) => ({
							...baseStyles,
							"z-index": 1000,
						}),
					}}
				/>
				<button
					className="bg-slate-300 mt-2 px-3 rounded-md"
					onClick={handleQuery}
				>
					Query
				</button>
			</form>
		</div>
	);
}
