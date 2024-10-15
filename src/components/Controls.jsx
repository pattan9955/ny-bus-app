import { useContext } from "react";
import { BusAppContext } from "./BusAppContextProvider";

import RadioButton from "./RadioButton";
import Select from "react-select";

export default function Controls() {
	const { selectedMode, target, setSelectedMode, setTarget } =
		useContext(BusAppContext);

    const options = [
        { label: "xdd1", value: "xdd1" },
        { label: "xdd2", value: "xdd2" }
    ];

	return (
		<div className="my-9 pb-10 mx-auto">
			<form className="w-full h-full">
				<RadioButton labelName="xdd" value="xdd" />
				<RadioButton labelName="xdd2" value="xdd2" />
				<Select
                    defaultValue={target}
                    onChange={setTarget}
                    options={options}
                    styles={{
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            'z-index': 1000
                        })
                    }}
                    menuIsOpen={true}
				/>
			</form>
		</div>
	);
}
