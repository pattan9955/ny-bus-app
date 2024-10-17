import { forwardRef, useRef, useImperativeHandle, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectErrMsg } from "../store/selectors";

const ErrorModal = forwardRef(function ErrorModal(props, ref) {
	const dialogRef = useRef();
	const errMsg = useSelector(selectErrMsg);
	const dispatch = useDispatch();

	useImperativeHandle(ref, () => ({
		open: () => {
			dialogRef.current.showModal();
		}
	}));

    console.log("Error modal rendered");
	return (
		<dialog className="bg-red-500 h-14 w-24" ref={dialogRef}>
			<h2>Error!</h2>
			<p>{errMsg}</p>
			<form method="dialog" onSubmit={() => dispatch(updateErrMsg(null))}>
				<button>Ok</button>
			</form>
		</dialog>
	);
});

export default ErrorModal;
