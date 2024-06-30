import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Maps = () => {
  const positionn = [23.744532, 90.414429];
  return (
    <MapContainer
      style={{ width: "100%", height: "334px", borderRadius: "10px" }}
      center={positionn}
      zoom={15}
      maxZoom={20}
      attributionControl={true}
      zoomControl={true}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionn}>
        <Popup>Parcel go</Popup>
      </Marker>
    </MapContainer>
  );
};
