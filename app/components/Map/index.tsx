// components/MapPage.tsx
import React from 'react';
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, WMSTileLayer, FeatureGroup } from 'react-leaflet';
import useMapContext from './useMapContext';
import 'leaflet-draw/dist/leaflet.draw.css';
import useLeafletWindow from './useLeafletWindow'
import { EditControl } from 'react-leaflet-draw';
import { useResizeDetector } from 'react-resize-detector'


const LeafletMapContainer = dynamic(async () => (await import('./LeafletMapContainer')).LeafletMapContainer, {
    ssr: false,
  })

const MyMap = () => {
    const { map } = useMapContext()
    const leafletWindow = useLeafletWindow()
    const {
        width: viewportWidth,
        height: viewportHeight,
        ref: viewportRef,
      } = useResizeDetector({
        refreshMode: 'debounce',
        refreshRate: 200,
      })
    const isLoading = !map || !leafletWindow || !viewportWidth || !viewportHeight
  return (
    <div>
      <h1>GeoServer Map</h1>
      <div
        className={`absolute w-full left-0`}
        style={{
          top: "115px",
          
          height: '89vh',
        }}
      >
      <LeafletMapContainer
            center={[12.61936 , 77.69417]}
            zoom={16}
            maxZoom={20}
            minZoom={3}
            // style={{ height: '400px', width: '100%' }}
          >
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <TileLayer
         url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
         attribution='Google Satellite'
      />
        <WMSTileLayer
          url="http://localhost:8080/geoserver/geoapp/wms" // Replace with your GeoServer WMS URL
          layers="CGX Industries - Overall Site - December 7 2022 - Global Orthomosaic" // Replace with your layer name
          format="image/png"
          transparent={true}
        />
        <WMSTileLayer
          url="http://localhost:8080/geoserver/geoapp/wms" // Replace with your GeoServer WMS URL
          layers="CGX Industries - Overall Site - boundary" // Replace with your layer name
          format="image/png"
          transparent={true}
        />
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
