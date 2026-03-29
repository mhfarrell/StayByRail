import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons (leaflet + bundler issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const stationIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  className: "station-marker",
});

function HotelMap({ stationGroups, priceMode }) {
  // Collect all markers with valid GPS
  const hotelMarkers = [];
  const stationMarkers = [];

  for (const group of stationGroups) {
    // We don't have station GPS in the results directly, but hotels have nearest_station
    // We'll mark stations from the station data if we can derive it
    for (const hotel of group.hotels) {
      const gps = hotel.gps_coordinates;
      if (gps?.latitude && gps?.longitude) {
        hotelMarkers.push({ ...hotel, lat: gps.latitude, lon: gps.longitude });
      }
    }
  }

  if (hotelMarkers.length === 0) {
    return null;
  }

  // Center on the average of all hotel positions
  const avgLat =
    hotelMarkers.reduce((s, h) => s + h.lat, 0) / hotelMarkers.length;
  const avgLon =
    hotelMarkers.reduce((s, h) => s + h.lon, 0) / hotelMarkers.length;

  return (
    <div className="hotel-map-container">
      <MapContainer
        center={[avgLat, avgLon]}
        zoom={14}
        style={{ height: "450px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hotelMarkers.map((hotel, i) => (
          <Marker key={hotel.name + i} position={[hotel.lat, hotel.lon]}>
            <Popup>
              <div style={{ minWidth: 180 }}>
                <strong>{hotel.name}</strong>
                <br />
                {priceMode === "per_night"
                  ? hotel.price_per_night_str || "N/A"
                  : hotel.total_price_str || "N/A"}
                {priceMode === "per_night" ? " /night" : " total"}
                <br />
                {hotel.overall_rating && <>Rating: {hotel.overall_rating}</>}
                {hotel.walk_minutes != null && (
                  <>
                    <br />
                    {hotel.walk_minutes} min walk to {hotel.nearest_station}
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default HotelMap;
