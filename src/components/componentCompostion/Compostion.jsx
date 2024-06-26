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
    const [matchLocationClicked, setMatchLocationClicked] = useState(false);
    const [addLikeMusicClicked, setAddLikeMusicClicked] = useState(0);
    const [musicName, setMusicName] = useState("가을 동화 Main Title");
    const [musicArtist, setMusicArtist] = useState("최태완");
    const [musicId, setMusicId] = useState("1dsR6YRjQImtq99v7z9nFX");
    // const [musicIdFromCalendar, setMusicIdFromCalendar] = useState("1dsR6YRjQImtq99v7z9nFX");
    const [playClickedFromCalendar, setPlayClickedFromCalendar] = useState(0);
    const [musicIdFromCalendarAfterPlayClicked, setMusicIdFromCalendarAfterPlayClicked] = useState("1dsR6YRjQImtq99v7z9nFX");
    const [musicNameFromCalendarAfterPlayClicked, setMusicNameFromCalendarAfterPlayClicked] = useState("가을 동화 Main Title");
    const [musicArtistFromCalendarAfterPlayClicked, setMusicArtistFromCalendarAfterPlayClicked] = useState("최태완");

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
    }, [LatitudeFromPanel, LongitudeFromPanel]);

    const matchByCurrentLocation = () => {
        setMatchLocationClicked(!matchLocationClicked); // toggle the button state
    };

    useEffect(() => {
        console.log("currentMusicName: " + musicName);
        console.log("currentMusicArtist: " + musicArtist);
        console.log("currentMusicId: " + musicId);
    }, [musicName, musicArtist, musicId]);

    /**
     * 点击like按钮
     * 希望获得三个变量，track, artist, date
     * date格式为2024-04-10
     */
    const addLikeMusic = () => {
        setAddLikeMusicClicked(addLikeMusic => addLikeMusic + 1); // toggle the button state
    };

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
                    {/* <div class="calendar"> */}
                    <Calendar
                        // LatitudeFromPanelToCalendar={LatitudeFromPanel}
                        // LongitudeFromPanelToCalendar={LongitudeFromPanel}
                        addLikeMusicClickedToCalendar={addLikeMusicClicked}
                        musicNameToCalendar={musicName}
                        musicArtistToCalendar={musicArtist}
                        musicIdToCalendar={musicId}
                        setPlayClickedToComp={setPlayClickedFromCalendar}
                        setMusicIdFromCalendarAfterPlayClickedToComp={setMusicIdFromCalendarAfterPlayClicked}
                        setMusicNameFromCalendarAfterPlayClickedToComp={setMusicNameFromCalendarAfterPlayClicked}
                        setMusicArtistFromCalendarAfterPlayClickedToComp={setMusicArtistFromCalendarAfterPlayClicked}
                    />
                    {/* </div> */}
                    <div class="button-container">
                        <button class="button" onClick={matchByCurrentLocation}>Music To Current Weather</button>
                        <button class="button button-favorite" onClick={addLikeMusic}>Like</button>
                        {/* <button class="button button-right">like</button> */}
                    </div>
                </div>
            </div>
            <div class="music">
                <Music
                    weatherFromMapToMusic={weatherFromMap}
                    regionFromMapToMusic={regionFromMap}
                    matchLocationClicked={matchLocationClicked}
                    setMusicNameToComp={setMusicName}
                    setMusicArtistToComp={setMusicArtist}
                    setMusicIdToComp={setMusicId}
                    musicIdFromCalendarToMusic={musicIdFromCalendarAfterPlayClicked}
                    musicNameFromCalendarToMusic={musicNameFromCalendarAfterPlayClicked}
                    musicArtistFromCalendarToMusic={musicArtistFromCalendarAfterPlayClicked}
                    playClickedFromCalendarToMusic={playClickedFromCalendar}
                />
            </div>
        </div>
    );
}

export default Compostion;
