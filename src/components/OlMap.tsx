import React, { useRef, useEffect, RefObject } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const OlMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<Map | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapInstance.current = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 3
                })
            });
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.setTarget(undefined);
            }
        };
    }, []);

    return (
        <div ref={mapRef} style={{ width: '100%', height: '1200px', minWidth: '1980px' }}>
            {/* Add your map content here */}
        </div>
    );
};

export default OlMap;