import { useContext } from "react";
import { BusAppContext } from "./BusAppContextProvider";

import RadioButton from "./RadioButton";
import Select from "react-select";

export default function Controls({options}) {
	const { selectedMode, target, setSelectedMode, setTarget } =
		useContext(BusAppContext);

	return (
		<div className="my-9 pb-10 mx-auto">
			<form className="w-full h-full">
				<RadioButton labelName="xdd" value="xdd" />
				<RadioButton labelName="xdd2" value="xdd2" />
				<Select
                    className="w-64"
                    defaultValue={target}
                    placeholder="Choose a target..."
                    onChange={({value}) => setTarget(value)}
                    options={options}
                    styles={{
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            'z-index': 1000
                        })
                    }}
				/>
			</form>
		</div>
	);
}
