import { useContext, useState, useEffect } from "react";
import { BusAppContext } from "./BusAppContextProvider";

import RadioButton from "./RadioButton";
import Select from "react-select";
import {
	API_BASE_URL,
	LINE_NAMES,
	VEH_REF,
	LINE_NAME_MODE,
	VEH_REF_MODE,
} from "../commons";

export default function Controls() {
	const { selectedMode, target, options, setOptions, setTarget } =
		useContext(BusAppContext);

	// Fetch new options based on value of selectedMode
	useEffect(() => {
		if (!selectedMode) {
			console.log("blank sawce");
			return;
		} else {
			console.log("fetching sawce for " + selectedMode);

			const url =
				selectedMode === VEH_REF_MODE
					? `${API_BASE_URL + VEH_REF}`
					: `${API_BASE_URL + LINE_NAMES}`;

			const errorMsg =
				selectedMode === VEH_REF_MODE
					? "An error occurred while fetching vehicle reference numbers."
					: "An error occured while fetching line names.";

			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					const opts = res.map((refName) => ({
						label: refName,
						value: refName,
					}));
					setOptions([...opts]);
				});

			// try {
			// 	response = await fetch(url);
			// 	if (!response.ok) {
			// 		throw new Error(errorMsg);
			// 	}
			// 	respData = await response.json();
			// 	const opts = respData.map((refName) => ({
			// 		label: refName,
			// 		value: refName,
			// 	}));
			// 	setOptions([...opts]);
			// } catch (error) {
			// 	// error handling
			// }
		}
	}, [selectedMode]);

	return (
		<div className="my-9 pb-10 mx-auto">
			<form className="w-full h-full">
				<RadioButton
					labelName="By Vehicle Reference"
					value={VEH_REF_MODE}
				/>
				<RadioButton labelName="By Line Name" value={LINE_NAME_MODE} />
				<Select
					className="w-64"
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
			</form>
		</div>
	);
}
