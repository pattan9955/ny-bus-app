import { forwardRef, useRef, useImperativeHandle, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectErrMsg } from "../store/selectors";
import { updateErrMsg } from "../features/appStatusSlice";

const ErrorModal = forwardRef(function ErrorModal(props, ref) {
	const dialogRef = useRef();
	const errMsg = useSelector(selectErrMsg);
	const dispatch = useDispatch();

	useImperativeHandle(ref, () => ({
		open: () => {
			dialogRef.current.showModal();
		},
	}));

	console.log("Error modal rendered");
	return (
		<dialog
			className="flex flex-col bg-white h-fit w-1/2 py-3 px-8 font-light text-sm space-y-2 rounded-lg"
			ref={dialogRef}
		>
			<h2 className="text-center font-semibold mb-4 text-lg">An error occurred!</h2>
			<p className="text-center text-base">{errMsg}</p>
			<form
				className="text-right pt-4"
				method="dialog"
				onSubmit={() => dispatch(updateErrMsg(null))}
			>
				<button className="bg-blue-700 text-neutral-200 px-3 py-0.5 rounded-md hover:bg-blue-600 hover:text-neutral-100">
					Ok
				</button>
			</form>
		</dialog>
	);
});

export default ErrorModal;
