import { useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";

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
import { useDispatch, useSelector } from "react-redux";
import {
	selectIsLoading,
	selectOptions,
	selectSelectedMode,
	selectTarget,
} from "../store/selectors";
import {
	updateOptions,
	updateSelectedMode,
	updateTarget,
} from "../features/queryParamSlice";
import { updateGeoJsonData } from "../features/mapParamSlice";
import { updateErrMsg, updateIsLoading } from "../features/appStatusSlice";

export default function Controls() {
	const selectedMode = useSelector(selectSelectedMode);
	const target = useSelector(selectTarget);
	const options = useSelector(selectOptions);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

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
			dispatch(updateIsLoading(true));

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Error occurred while fetching query results.");
			}
			const respData = await response.json();
			console.log(respData);

			dispatch(updateGeoJsonData(respData));
			dispatch(updateIsLoading(false));
		} catch (error) {
			console.log(error);
			dispatch(updateErrMsg("An error occurred while fetching results."));
			dispatch(updateIsLoading(false));
		}
	};

	// Fetch new options based on value of selectedMode
	useEffect(() => {
		if (!selectedMode) {
			return;
		} else {
			dispatch(updateIsLoading(true));
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

					dispatch(updateOptions(opts));
					dispatch(updateIsLoading(false));
				})
				.catch((error) => {
					dispatch(updateIsLoading(false));
					dispatch(updateSelectedMode(null));
					dispatch(
						updateErrMsg(
							"An error occurred while fetching options."
						)
					);
					console.error(error);
				});
		}
	}, [selectedMode]);

	const handleButtonClick = (value) => {
		dispatch(updateSelectedMode(value));
	};

	console.log("controls rendered");

	return (
		<div className="pb-10 mx-auto absolute top-5 left-14 z-1000 font-mono">
			<form className="w-auto h-full bg-slate-400/75 px-5 py-3 rounded-md">
				<ButtonGroup>
					<Button
						size="small"
						variant={`${selectedMode === VEH_REF_MODE ? "contained" : "outlined"}`}
						onClick={() => handleButtonClick(VEH_REF_MODE)}
					>
						By Vehicle Reference
					</Button>
					<Button
						size="small"
						variant={`${selectedMode === LINE_NAME_MODE ? "contained" : "outlined"}`}
						onClick={() => handleButtonClick(LINE_NAME_MODE)}
					>
						By Line Name
					</Button>
				</ButtonGroup>
				<Select
					className="w-full h-auto text-sm my-3"
					defaultValue={target}
					placeholder="Choose a target..."
					onChange={(event) =>
						event
							? dispatch(updateTarget(event.value))
							: dispatch(updateTarget(null))
					}
					options={options}
					isClearable={true}
					isLoading={isLoading}
					styles={{
						menu: (baseStyles, state) => ({
							...baseStyles,
							"z-index": 1000,
						}),
					}}
				/>
				<Button size="small" variant="contained" onClick={handleQuery}>
					Query
				</Button>
			</form>
		</div>
	);
}
