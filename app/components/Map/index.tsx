import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, WMSTileLayer, LayersControl, FeatureGroup, useMap } from 'react-leaflet';
import { useRouter } from 'next/router';
import 'leaflet-draw/dist/leaflet.draw.css';
import { EditControl } from 'react-leaflet-draw';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";

const { BaseLayer, Overlay } = LayersControl;

const LeafletMapContainer = dynamic(async () => (await import('./LeafletMapContainer')).LeafletMapContainer, {
  ssr: false,
});

const MyMap = () => {
  const router = useRouter();
  const { query } = router;
  const layer = query.layer as string; // Type assertion to ensure it's a string

  // Define the available overlay layers
  const overlayLayers = [
    { name: 'boundary', layer: 'CGX Industries - Overall Site - boundary' },
    // { name: 'orthomosaic', layer: 'CGX Industries - Overall Site - December 7 2022 - Global Orthomosaic' },
    { name: 'dem', layer: 'CGX Industries - Overall Site - December 7 2022 - Global Elevation Profile'}
  ];

  // Find the selected overlay layer
  const selectedOverlay = overlayLayers.find((item) => item.name.toLowerCase() === layer?.toLowerCase());

  // Set the initial active overlay layer
  const [activeOverlay, setActiveOverlay] = React.useState(selectedOverlay ? selectedOverlay.layer : overlayLayers[0].layer);

  // Update the active overlay when the URL query changes
  useEffect(() => {
    setActiveOverlay(selectedOverlay ? selectedOverlay.layer : overlayLayers[0].layer);
  }, [layer]);

  // Custom hook to log zoom level
  function LogZoom() {
    const map = useMap();
    useEffect(() => {
      const handleZoom = () => {
        console.log('Zoom level:', map.getZoom());
        // You can add logic to increase the zoom level here if needed
      };
      map.on('zoom', handleZoom);
      return () => {
        map.off('zoom', handleZoom);
      };
    }, [map]);

    return null;
  }

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  const [selectedKeysProject, setSelectedKeysProject] = React.useState(new Set(["project"]));
  // const [selectedValueProject, setSelectedValueProject] = useState(''); // Initial selected value for Project Dropdown

  const [selectedKeysDate, setSelectedKeysDate] = React.useState(new Set(["date"]));
  // const [selectedValueDate, setSelectedValueDate] = useState(''); 
  const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint here
        // Example API call using fetch:
        fetch('/api/project')
            .then(response => response.json())
            .then(data => setApiData(data.data))
            .catch(error => console.error(error));
    }, []); // Run this effect only once when the component mounts

  const [apiData2, setApiData2] = useState([]);

  useEffect(() => {
        // Fetch data from your API endpoint here
        // Example API call using fetch:
        fetch('/api/data')
            .then(response => response.json())
            .then(data => {
                // Use a Set to store unique dates
                const uniqueDates = new Set();

                // Filter out duplicates based on the "date" property
                const filteredData = data.data.filter(item => {
                    const date = item.date.split('T')[0]; // Extract date part
                    if (!uniqueDates.has(date)) {
                        uniqueDates.add(date);
                        return true;
                    }
                    return false;
                });

                setApiData2(filteredData);
            })
            .catch(error => console.error(error));
    }, []);

//   useEffect(() => {
//     // Fetch data from your API endpoint here
//     // Example API call using fetch:
//     fetch('/api/data')
//         .then(response => response.json())
//         .then(data => {
//             // Extract and format the date values
//             const formattedData = data.data.map(item => ({
//                 ...item,
//                 date: new Date(item.date).toISOString().split('T')[0], // Format to "yyyy-mm-dd"
//             }));
//             setApiData2(formattedData);
//         })
//         .catch(error => console.error(error));
// }, []);

  return (
    <div>
      <h1>GeoServer Map</h1>
      <div className="mx-20" style={{ display: 'flex', marginTop: '112px', maxWidth: '100px' }}>
            <h3 className="text-2xl font-semibold text-black mt-1 mr-5 col-md-3">Project</h3>
            <Dropdown className="col-md-6" >
                <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                        {selectedKeysProject}
                    </Button>
                </DropdownTrigger>

                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeysProject}
                    onSelectionChange={setSelectedKeysProject}
                >
                    {apiData.map(item => (
                        <DropdownItem key={item.project}>{item.project}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <div className="col-md-9 ml-5 mt-2" style={{ flex: 3 }}></div>
            <h3 className="text-2xl font-semibold text-black mt-1 mr-5 col-md-3">Date</h3>
            <Dropdown className="col-md-6" style={{ width: '300px' }}>
                <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                        {selectedKeysDate}
                    </Button>
                </DropdownTrigger>

                <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeysDate}
                    onSelectionChange={setSelectedKeysDate}
                >
                    {apiData2.map(item => (
                      
                        <DropdownItem key={item.date.split('T')[0]}>{item.date.split('T')[0]}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
      <div className={`absolute w-full left-0`} style={{ top: '195px', height: '79vh' }}>
        <LeafletMapContainer center={[12.61936, 77.69417]} zoom={16} maxZoom={30}>
        <LogZoom />
          <LayersControl position="topright">
            {/* <BaseLayer name="Google Satellite" checked={true}>
              <TileLayer
                url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                attribution="Google Satellite"
              />
            </BaseLayer> */}
            <BaseLayer name="OpenStreetMap" checked={true}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
            </BaseLayer>
            {overlayLayers.map((overlay, index) => (
              <Overlay
                key={index}
                name={overlay.name}
                checked={activeOverlay === overlay.layer}
              >
                <WMSTileLayer
                  url="http://localhost:8080/geoserver/geoapp/wms"
                  layers={overlay.layer}
                  format="image/png"
                  transparent={true}
                />
              </Overlay>
            ))}
          </LayersControl>
          <FeatureGroup>
            <EditControl
            position="topright"
            draw={{
                marker: false
            }}
            // onCreated={displayArea}
            // onDeleted={clearArea}
            />
        </FeatureGroup>
        </LeafletMapContainer>
      </div>
    </div>
  );
};

export default MyMap;
