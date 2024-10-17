import { useContext } from "react";
import { useMap } from "react-leaflet/hooks";
import { BusAppContext } from "./BusAppContextProvider";
import { TileLayer, GeoJSON } from "react-leaflet";

export default function MapItem() {
	const map = useMap();
	const { geoJsonData, setMapCenter } = useContext(BusAppContext);

	return (
		<>
			<TileLayer
				eventHandlers={{
					add: () => {
						if (geoJsonData && geoJsonData.features.length > 0) {
							const coordToJump = geoJsonData.features[0].geometry.coordinates[0]
							const latLng = [coordToJump[1], coordToJump[0]]
							map.flyTo(latLng, 9);
							setMapCenter(latLng);
						}
					},
				}}
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<GeoJSON data={geoJsonData} style={{ color: "blue", weight: 2 }} />
		</>
	);
}
