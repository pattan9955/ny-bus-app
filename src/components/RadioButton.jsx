import { useContext } from "react";
import { BusAppContext } from "./BusAppContextProvider";

export default function RadioButton({ labelName, value }) {
	const {selectedMode, setSelectedMode} = useContext(BusAppContext);
    
    return (
		<label>
			{labelName}
			<input
				type="radio"
				value={value}
				checked={selectedMode === value}
				onClick={() => setSelectedMode(value)}
                onChange={() => {}}
			/>
		</label>
	);
}
