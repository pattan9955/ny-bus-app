import { useMap } from "react-leaflet/hooks";
import { TileLayer, GeoJSON } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { selectGeoJsonData } from "../store/selectors";
import { updateMapCenter } from "../features/mapParamSlice";

export default function MapItem() {
	const map = useMap();
	const geoJsonData = useSelector(selectGeoJsonData);
	const dispatch = useDispatch();

	return (
		<>
			<TileLayer
				eventHandlers={{
					add: () => {
						if (geoJsonData && geoJsonData.features.length > 0) {
							const coordToJump = geoJsonData.features[0].geometry.coordinates[0]
							const latLng = [coordToJump[1], coordToJump[0]]
							map.flyTo(latLng, 9);
							dispatch(updateMapCenter(latLng));
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
