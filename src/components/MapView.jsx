import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import MapItem from "./MapItem";
import { useSelector } from "react-redux";
import { selectGeoJsonData, selectMapCenter } from "../store/selectors";

const MapView = () => {
	console.log("Map rendering...");
	const geoJsonData = useSelector(selectGeoJsonData);
	const mapCenter = useSelector(selectMapCenter);
	
	return (
		<div className="w-full h-full">
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
