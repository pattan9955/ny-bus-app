import { useContext } from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { BusAppContext } from "./BusAppContextProvider";
import MapItem from "./MapItem";

const MapView = () => {
	console.log("Map rendering...");
	const { geoJsonData, mapCenter } = useContext(BusAppContext);
	
	return (
		<div className="flex-grow">
			<MapContainer
				key={JSON.stringify(geoJsonData)}
				center={mapCenter}
				zoom={8}
				style={{ height: "100%", width: "100%" }}
			>
				<MapItem />
			</MapContainer>
		</div>
	);
};

export default MapView;
