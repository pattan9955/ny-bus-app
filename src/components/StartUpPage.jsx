import { Bars } from "react-loader-spinner";

export default function StartUpPage() {
	return (
		<div className="flex justify-center align-middle">
			<div className="flex flex-col justify-center h-svh">
				<h1 className="mb-5 text-4xl">Loading...</h1>
				<Bars visible={true} width="150" />
			</div>
		</div>
	);
}
