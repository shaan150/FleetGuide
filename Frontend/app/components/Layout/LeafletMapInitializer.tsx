'use client';

import { useEffect } from 'react';
import L from 'leaflet';

const LeafletMapInitializer = () => {
  useEffect(() => {
    // Fix for marker icon URLs
    const DefaultIcon = L.Icon.Default as any;
    delete DefaultIcon.prototype._getIconUrl;

    DefaultIcon.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return null;
};

export default LeafletMapInitializer;
