import React, { useState, useEffect } from "react";
import WeatherDataPanel from "./WeatherDataPanel";

const WeatherDataFetch = (pros) => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [nearestArea, setNearestArea] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const url = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    };
    getWeatherData();
  }, []); // Empty dependency array means this effect only runs once on mount

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (x) => {
      return (x * Math.PI) / 180;
    }

    var R = 6371; // 地球半径（千米）
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

  useEffect(() => {
    if (!weatherData) return;

    const findNearestForecast = () => {
      let nearestDistance = Infinity;
      let nearestArea = null;

      weatherData.area_metadata.forEach((area) => {
        const distance = getDistance(
          pros.sharedLocation.lat,
          pros.sharedLocation.lng,
          area.label_location.latitude,
          area.label_location.longitude
        );
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestArea = area.name;
        }
      });

      setNearestArea(nearestArea);
      console.log(nearestArea);
      const areaForecast = weatherData.items[0].forecasts.find(
        (f) => f.area === nearestArea
      );
      if (areaForecast) {
        setForecast(areaForecast.forecast);
        console.log(forecast);
      }else{
        window.alert("No forecast available for your location");
      }
    };
    findNearestForecast();
  }, [weatherData, pros.sharedLocation]); // This effect runs when weatherData or sharedLocation changes

  return (
    <>
      <WeatherDataPanel sharedWeather={{region: nearestArea, forecast: forecast}}/>
    </>
  );
}

export default WeatherDataFetch;