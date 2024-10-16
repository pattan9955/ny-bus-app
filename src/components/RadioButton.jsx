import { useContext } from "react";
import { BusAppContext } from "./BusAppContextProvider";

export default function RadioButton({ labelName, value, ...props }) {
	const { selectedMode, setSelectedMode } = useContext(BusAppContext);

	return (
		<div {...props}>
			<label className="mr-1">{labelName}</label>
			<input
				type="radio"
				value={value}
				checked={selectedMode === value}
				onClick={() => setSelectedMode(value)}
				onChange={() => {}}
			/>
		</div>
	);
}
