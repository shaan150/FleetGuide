'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import styles from '../../styles/Map.module.css';

// Dynamically import the MapContainer, TileLayer, Marker, Popup, and Polyline
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

// Component to initialize and configure Leaflet
const LeafletMapInitializer = dynamic(() => import('./LeafletMapInitializer'), { ssr: false });

// Function to calculate the nearest point on a line to a given point
const findNearestPoint = (line: [number, number][], point: [number, number]) => {
  // Implement your own nearest point calculation here
  // For simplicity, this example just returns the first point of the line
  return line[0];
};

const Map = () => {
    
  // Define the coordinates for the main line
  const mainLine: [number, number][] = [
    [52.901486, -1.4767721],  // Point A
    [52.872045, -1.4506813]    // Point B
  ];

  // Define additional points (e.g., petrol stations)
  const additionalPoints: [number, number][] = [
    [52.901486, -1.4667721],
    [52.851045, -1.4106813],
    [52.836045, -1.4806813]
  ];

  // Create tangent lines from the main line to the additional points
  const tangentLines = additionalPoints.map(point => {
    const nearestPoint = findNearestPoint(mainLine, point);
    return [nearestPoint, point];
  });

  return (
    <div className={styles.mapContainer}>
      <LeafletMapInitializer />
      <MapContainer
        center={[52.901486, -1.4767721]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[52.901486, -1.4767721]}>
          <Popup>
            Point A
          </Popup>
        </Marker>
        <Marker position={[52.872045, -1.4506813]}>
          <Popup>
            Point B
          </Popup>
        </Marker>
        <Polyline positions={mainLine} color="blue" weight={4} />
        {additionalPoints.map((point, index) => (
          <Marker key={index} position={point}>
            <Popup>
              Additional Point {index + 1}
            </Popup>
          </Marker>
        ))}
        {tangentLines.map((line, index) => (
          <Polyline key={index} positions={line} color="red" weight={2} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
