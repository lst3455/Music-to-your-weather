import React, { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import WeatherDataFetch from "../weatherComponent/WeatherDataFetch";

const defaultLocation = {
    lat: 1.2983117788159964,
    lng: 103.77674571647856,
};

const mapContainerStyle = {
    height: "302px",
    marginTop: "16px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.45)",
    border: "2px solid #d9d9d9",
};

const LocationButton = ({ onLocate }) => {
    const button = document.createElement("button");
    button.innerHTML = "Locate Me";

    //Add styles to the button
    button.style.backgroundColor = "#fff";
    button.style.border = "0px solid #ccc";
    button.style.borderRadius = "3px";
    button.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    button.style.cursor = "pointer";
    button.style.marginBottom = "22px";
    button.style.marginTop = "15px";
    button.style.textAlign = "center";
    button.style.height = "30px";
    button.style.width = "100px";
    button.style.outline = "none";

    //adding hover effect
    button.onmouseover = function () {
        button.style.backgroundColor = "#f8f8f8";
    };
    button.onmouseout = function () {
        button.style.backgroundColor = "#fff";
    };
    button.addEventListener("click", () => {
        onLocate();
    });
    return button;
};

const Map = (props) => {
    const [region, setRegion] = useState(null);
    const [weather, setWeather] = useState(null);

    const getRegion = (data) => {
        setRegion(data);
    }

    const getWeather = (data) => {
        setWeather(data);
    };

    useEffect(() => {
        props.setWeatherToComp(weather);
        props.setRegionToComp(region);
    }, [region, weather]);


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBLi-h_l_iWNI6WYMxwgG8dHEl_fad_iDw",
    });

    const [location, setLocation] = useState(defaultLocation);

    // const [locationFromPanel, setLocationFromPanel] = useState(defaultLocation);
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        setLocation({ lat: props.LatitudeFromPanelToMap, lng: props.LongitudeFromPanelToMap });
        console.log("updated location by props.LatitudeFromPanelToMap, props.LongitudeFromPanelToMap");
    }, [props.LatitudeFromPanelToMap, props.LongitudeFromPanelToMap]);

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        const locationButton = LocationButton({
            onLocate: () => locateUser(map)
        });
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    }, []);

    const locateUser = useCallback((map) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setLocation(newPos);
                    setShowInfoWindow(true);

                    // 调用传入的回调函数来更新Composition组件的经纬度状态
                    props.setLatitudeToComp(newPos.lat);
                    props.setLongitudeToComp(newPos.lng);
                },
                () => {
                    alert("Failed to retrieve your location");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, []);

    if (!isLoaded) {
        return <div><h1>load fail</h1></div>;
    }

    return (
        <div>
            {/* convert location to weather component */}
            <WeatherDataFetch locationToFetch={{ lat: location.lat, lng: location.lng }} setWeatherToMap={getWeather} setRegionToMap={getRegion} />
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={location}
                onLoad={onMapLoad}
            >

                {/* when user click locate me, the location will be updated */}
                {showInfoWindow && (
                    <InfoWindow position={location} onCloseClick={() => setShowInfoWindow(false)}>
                        <div>
                            <h3 style={{ margin: "0" }}>Your Location</h3>
                            <p style={{ margin: "0" }}>Latitude: {location.lat}</p>
                            <p style={{ margin: "0" }}>Longitude: {location.lng}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;