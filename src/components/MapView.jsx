import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";

const testgeojsonData = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			properties: { name: "Location 1" },
			geometry: {
				type: "Point",
				coordinates: [-0.09, 51.505],
			},
		},
	],
};

const MapView = ({ geojsonData }) => {
	return (
		<div className="flex-grow">
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				style={{ height: "100%", width: "100%" }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<GeoJSON data={testgeojsonData} />
			</MapContainer>
		</div>
	);
};

export default MapView;
