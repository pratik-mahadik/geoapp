import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, WMSTileLayer, FeatureGroup } from 'react-leaflet';
import 'leaflet.pm/dist/leaflet.pm.css'; // Import the CSS
import 'leaflet.pm'; // Import the leaflet.pm library
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';

export function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 12);
    return null;
  }

  export default function Map() {
    const [geoData, setGeoData] = useState({ lat:  12.60936 , lng: 77.69417 });
  
    const center = [geoData.lat, geoData.lng];

    // const [area, setArea] = useState(null);

    // const displayArea = (layer) => {
    //     if (layer && layer instanceof L.Polygon) {
    //     const polygon = L.polygon(layer.getLatLngs());
    //     setArea(polygon.getArea());
    //     }
    // };

    // const clearArea = () => {
    //     setArea(null);
    //   };

    return (
        <div className="map-container">
      <MapContainer center={center} zoom={12} style={{ height: '80vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng}
        <ChangeView coords={center} />

        <WMSTileLayer
          url="http://localhost:8080/geoserver/geoapp/wms" // Replace with your GeoServer WMS URL
          layers="CGX Industries - Overall Site - December 7 2022 - Global Orthomosaic" // Replace with your layer name
          format="image/png"
          transparent={true}
        />

        
        <FeatureGroup>
            <EditControl
            position="topright"
            draw={{
                marker: false,
                showArea: true
                
            }}
            // onCreated={displayArea}
            // onDeleted={clearArea}
            />
        </FeatureGroup>
      </MapContainer>
      {/* {area && <div className="area-display">Area: {area.toFixed(2)} square meters</div>} */}
    </div>
    );
  }
  
