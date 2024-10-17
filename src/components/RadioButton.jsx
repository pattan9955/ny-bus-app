import { useContext } from "react";
import { BusAppContext } from "./BusAppContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedMode } from "../store/selectors";
import { updateSelectedMode } from "../features/queryParamSlice";

export default function RadioButton({ labelName, value, ...props }) {
	const selectedMode = useSelector(selectSelectedMode);
	const dispatch = useDispatch();

	return (
		<div {...props}>
			<label className="mr-1">{labelName}</label>
			<input
				type="radio"
				value={value}
				checked={selectedMode === value}
				onClick={() => dispatch(updateSelectedMode(value))}
				onChange={() => {}}
			/>
		</div>
	);
}
