import { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if window is defined to ensure this code only runs on the client side
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      const map = L.map(mapRef.current).setView([51.505, -0.09], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const wmsLayer = L.tileLayer.wms(
        "http://localhost:8080/geoserver/geoapp/wms", // Replace with your GeoServer WMS URL
        {
          layers: "CGX Industries - Overall Site - December 7 2022 - Global Orthomosaic", // Replace with your layer name
          format: "image/png",
          transparent: true,
          attribution: "Your attribution here", // Add the appropriate attribution
        }
      );

      wmsLayer.addTo(map);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "100vh", width: "100vw" }}
    ></div>
  );
};

export default Map;
