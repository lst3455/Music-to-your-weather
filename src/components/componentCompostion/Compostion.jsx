import React, { useState, useEffect } from "react";
import Map from "../mapComponent/Map.jsx";
import Music from "../musicComponent/Music.jsx";
import Calendar from "../calendarComponent/Calendar.jsx";
import WeatherDataPanel from "../weatherComponent/WeatherDataPanel.jsx";
import './Composition.css';

const Compostion = () => {
    const [regionFromMap, setRegionFromMap] = useState(null);
    const [weatherFromMap, setWeatherFromMap] = useState(null);
    const [LatitudeFromPanel, setLatitudeFromPanel] = useState(1.2983117788159964);
    const [LongitudeFromPanel, setLongitudeFromPanel] = useState(103.77674571647856);

    const getRegionFromMap = (data) => {
        setRegionFromMap(data);
    }
    const getWeatherFromMap = (data) => {
        setWeatherFromMap(data);
    }
    useEffect(() => {
        console.log("regionFromMap: " + regionFromMap);
        console.log("weatherFromMap: " + weatherFromMap);
    }, [regionFromMap, weatherFromMap]);

    const getLatitudeFromPanel = (data) => {
        setLatitudeFromPanel(data);
    };

    const getLongitudeFromPanel = (data) => {
        setLongitudeFromPanel(data);
    };

    useEffect(() => {
        console.log("LatitudeFromPanel: " + LatitudeFromPanel);
        console.log("LongitudeFromPanel: " + LongitudeFromPanel);
    }, [{ LatitudeFromPanel, LongitudeFromPanel }]);

    return (
        <div>
            <div class="main-content">
                <div class="left-column">
                    <div class="weather-details">
                        <WeatherDataPanel
                            WeatherDateFromMapToPanel={{ region: regionFromMap, forecast: weatherFromMap }}
                            setLatitudeToComp={getLatitudeFromPanel}
                            setLongitudeToComp={getLongitudeFromPanel}
                        />
                        <Map
                            setWeatherToComp={getWeatherFromMap}
                            setRegionToComp={getRegionFromMap}
                            LatitudeFromPanelToMap={LatitudeFromPanel}
                            LongitudeFromPanelToMap={LongitudeFromPanel}
                            setLatitudeToComp={setLatitudeFromPanel}
                            setLongitudeToComp={setLongitudeFromPanel}
                        />
                    </div>
                </div>
                <div class="right-column">
                    <div class="calendar">
                        <Calendar
                            LatitudeFromPanelToCalendar={LatitudeFromPanel}
                            LongitudeFromPanelToCalendar={LongitudeFromPanel}
                        />
                    </div>
                    <div class="button-container">
                        <button class="button">match by current Location</button>
                        <button class="button button-favorite">like</button>
                        {/* <button class="button button-right">like</button> */}
                    </div>
                </div>
            </div>
            <div class="music">
                <Music
                    weatherFromMapToMusic={weatherFromMap}
                    regionFromMapToMusic={regionFromMap}
                />
            </div>
        </div>
    );
}

export default Compostion;
