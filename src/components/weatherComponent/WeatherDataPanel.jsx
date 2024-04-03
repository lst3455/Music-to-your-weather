import React, { useState } from "react";

// const weatherCardContainerStyle = {
//     display: "flex",
//     gap: "15px",
//     flexGrow: 1,
//     color: "#fff",
//     fontSize: "20px",
//     fontWeight: 700,
// }

// const weatherCardStyle = {
//     display: "flex",
//     gap: "20px",
//     flex: 1,
//     padding: "15px 18px",
//     borderRadius: "15px",
//     backgroundColor: "#9a9a9a",
//     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
// }

// const WeatherDataStyle = {
//     margin: "auto 0",
//     flexGrow: 1,
//     fontFamily: "'Inria Serif', sans-serif",
//     fontSize: "14px",
// }

// const WeatherIconStyle = {
//     width: "43px",
//     height: "43px",
//     borderRadius: "50%",
//     backgroundColor: "#fff",
//     objectFit: "cover",
// }

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
        padding: '3px 21px',
        cursor: 'pointer',
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
        font: '12px Inria Serif, sans-serif',
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
        font: '12px Inria Serif, sans-serif',
    },
};

const WeatherDataPanel = (pros) => {
    return (
        <div>
            {/* <div style={weatherCardStyle}>
                <img src={cityIcon} style={WeatherIconStyle} />
                <div style={WeatherDataStyle}>{pros.sharedWeather.region}</div>
            </div>
            <div style={weatherCardStyle}>
                <img src={weatherIcon} style={WeatherIconStyle} />
                <div style={WeatherDataStyle}>{pros.sharedWeather.forecast}</div>
            </div>
            <div style={weatherCardStyle}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06e657045a0430b15da43230976cd2ce7451ac7170fe0fcffde0d716c78191b7?apiKey=5c507e50f5eb47f29838914047d19c51&" alt="Wind Speed" class="weather-icon" />
                <div style={WeatherDataStyle}>windspeed</div>
            </div> */}

            <div style={styles.div4}>
                <div style={styles.div5}>
                    <input type="text" style={styles.div6} placeholder="input a latitude"></input>
                    <div style={styles.div7}>
                        <input type="text" style={styles.div8} placeholder="input a longitude"></input>
                        <button style={styles.div9} onClick={() => {window.alert("button click")}}>go</button>
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
                        <div style={styles.div14}>{pros.sharedWeather.region}</div>
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
                        <div style={styles.div18}>Your Location Weather:</div>
                        <div style={styles.div19}>{pros.sharedWeather.forecast}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDataPanel;