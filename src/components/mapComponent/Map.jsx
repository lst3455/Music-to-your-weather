import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const location = {
    lat: 37.42216,
    lng: -122.08427,
};

const mapContainerStyle = {
    height: "302px",
    borderRadius: "15px",
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBLi-h_l_iWNI6WYMxwgG8dHEl_fad_iDw",
    });
    if (!isLoaded) {
        return (
            <div>
                <h1>load fail</h1>
            </div>
        );
    }
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={location}
            >
                <Marker position={location} />
            </GoogleMap>
        </div>
    );
};

export default Map;