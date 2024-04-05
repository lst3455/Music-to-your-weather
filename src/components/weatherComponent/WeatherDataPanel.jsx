import React, { useState, useEffect } from "react";


const styles = {
    div4: {
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap', // assuming a mobile-first approach, where wrap is the default
    },
    div5: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        color: '#fff',
        fontWeight: '700',
        whiteSpace: 'nowrap', // This will be overridden by a media query equivalent in React
        flex: 1,
    },
    div6: {
        padding: '0 15px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        height: '33px',
    },
    div7: {
        display: 'flex',
        marginTop: '7px',
        gap: '10px',
    },
    div8: {
        padding: '0 15px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
        width: '173px',
        height: '33px',
    },
    div9: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: 'Inria Serif, sans-serif',
        color: '#fff',
        borderRadius: '10px',
        borderWidth: '0px',
        backgroundColor: 'rgba(83, 83, 83, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        alignItems: 'start',
        justifyContent: 'center',
        padding: '10px 26px',
        cursor: 'pointer',
        transition: 'all 0.3s ease' // Ensure smooth transition for hover effect
    },
    div9_hover: {
        backgroundColor: 'rgb(141, 141, 141)',
        boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.65)',
        transform: 'scale(1.05)',
    },
    div10: {
        borderRadius: '15px',
        backgroundColor: 'rgba(83, 83, 83, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
        display: 'flex',
        gap: '10px',
        // flex: 1,
        padding: '15px 19px',
    },
    div11: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '43px',
        height: '43px',
        // padding: '0 3px',
    },
    img: {
        aspectRatio: 1,
        objectFit: 'auto',
        objectPosition: 'center',
        width: '37px',
        borderRadius: '50%',
    },
    div12: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        fontWeight: 700,
        margin: 'auto 0',
    },
    div13: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        font: '14px Inria Serif, sans-serif',
    },
    div14: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        font: '10px Inria Serif, sans-serif',
    },
    div15: {
        borderRadius: '15px',
        backgroundColor: 'rgba(83, 83, 83, 1)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
        display: 'flex',
        gap: '13px',
        flex: 1,
        padding: '15px 19px',
    },
    div16: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '43px',
        height: '43px',
        // padding: '0 3px',
    },
    div17: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        fontWeight: 700,
        margin: 'auto 0',
    },
    div18: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        font: '14px Inria Serif, sans-serif',
    },
    div19: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: '4px',
        font: '10px Inria Serif, sans-serif',
    },
};

const WeatherDataPanel = (props) => {
    const [isHovered, setIsHovered] = useState(false); // use for go button hover effect
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [forecast, setForecast] = useState('');
    const [nearestArea, setNearestArea] = useState('');

    useEffect(() => {
        setForecast(props.WeatherDateFromMapToPanel.forecast);
        setNearestArea(props.WeatherDateFromMapToPanel.region);
        console.log("updated weather data by props.WeatherDateFromMapToPanel");
    }, [props.WeatherDateFromMapToPanel.region, props.WeatherDateFromMapToPanel.forecast]); // This effect runs when sharedWeather changes

    // useEffect(() => {
    //     props.setWeatherToComp(forecast);
    //     props.setRegionToComp(nearestArea);
    //     console.log("updated weather data by nearestArea and forecast");
    // }, [nearestArea,forecast]); // This effect runs when sharedWeather(object) changes


    const handleFetchWeather = async () => {
        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

        const getDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = (x) => {
                return (x * Math.PI) / 180;
            }

            var R = 6371; // Radius of the earth in km
            var dLat = toRad(lat2 - lat1);
            var dLon = toRad(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) *
                Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }
        // 检查经纬度是否在有效范围内
        if (!isNaN(lat) && lat >= 1.13 && lat <= 1.47 && !isNaN(lng) && lng >= 103.60 && lng <= 104.05) {
            try {
                const response = await fetch(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`);
                const data = await response.json();
                let nearestDistance = Infinity;
                let nearestArea = null;
                let areaForecast = null;

                data.area_metadata.forEach((area) => {
                    const distance = getDistance(
                        lat,
                        lng,
                        area.label_location.latitude,
                        area.label_location.longitude);
                    if (distance < nearestDistance) {
                        nearestDistance = distance;
                        nearestArea = area.name;
                        areaForecast = data.items[0].forecasts.find((f) => f.area === nearestArea);
                    }
                });

                if (areaForecast) {
                    setNearestArea(nearestArea);
                    setForecast(areaForecast.forecast);
                    props.setLatitudeToComp(lat);
                    props.setLongitudeToComp(lng);
                } else {
                    window.alert("No forecast available for your location.");
                }
            } catch (error) {
                console.error("Failed to fetch weather data", error);
                window.alert("Failed to fetch weather data");
            }
        } else {
            window.alert("Invalid input (Latitude must be between 1.13 and 1.47, Longitude must be between 103.60 and 104.05)");
        }
    };



    return (
        <div>
            <div style={styles.div4}>
                <div style={styles.div5}>
                    <input type="text" style={styles.div6} placeholder="input a lat(1.13-1.47) to go" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
                    <div style={styles.div7}>
                        <input type="text" style={styles.div8} placeholder="input a lng(103.60-104.05) to go" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
                        <button style={isHovered ? { ...styles.div9, ...styles.div9_hover } : styles.div9}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => {
                                handleFetchWeather();
                                // props.setLatitudeToComp(latitude);
                                // props.setLongitudeToComp(longitude);
                            }}
                        >go
                        </button>
                    </div>
                </div>
                <div className="location" style={styles.div10}>
                    <div style={styles.div11}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af6e2ffdb985eb828db3a6c9b06b1e2c5a76ca0b63945020da2b0e26fb9f62f7?apiKey=5c507e50f5eb47f29838914047d19c51&"
                            style={styles.img}
                            alt="Location Icon"
                        />
                    </div>
                    <div style={styles.div12}>
                        <div style={styles.div13}>Your Location:</div>
                        <div style={styles.div14}>{nearestArea}</div>
                    </div>
                </div>
                <div className="weather" style={styles.div15}>
                    <div style={styles.div16}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18814460ef230ec4765dd48479926ed64d7d44e67721352fde269d7510945860?apiKey=5c507e50f5eb47f29838914047d19c51&"
                            style={styles.img}
                            alt="Weather Icon"
                        />
                    </div>
                    <div style={styles.div17}>
                        <div style={styles.div18}>Your Current Weather:</div>
                        <div style={styles.div19}>{forecast}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDataPanel;