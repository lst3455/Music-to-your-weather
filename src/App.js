import Map from "./components/mapComponent/Map.jsx";
import "./App.css";
import Music from "./components/musicComponent/Music.jsx";
import Calendar from "./components/calendarComponent/Calendar.jsx";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="content">
          <div class="divider"></div>
          <div class="intro">
            <span class="intro-bold">aaaaaaaaaaaaaaaaaaaaaaa</span>
            <span class="intro-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
            <span class="intro-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
          </div>
          <h2 class="heading">music to your weather</h2>
          <div class="main-content">
            <div class="left-column">
              <div class="weather-cards">
                <div class="weather-card">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/009423a15fa8ce64ef240565e2b586be109d10674f98e01c5d7b8e1ab240cb6e?apiKey=5c507e50f5eb47f29838914047d19c51&" alt="Temperature" class="weather-icon" />
                  <div class="weather-title">temperature</div>
                </div>
                <div class="weather-card">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/009423a15fa8ce64ef240565e2b586be109d10674f98e01c5d7b8e1ab240cb6e?apiKey=5c507e50f5eb47f29838914047d19c51&" alt="Humidity" class="weather-icon" />
                  <div class="weather-title">humidity</div>
                </div>
                <div class="weather-card">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06e657045a0430b15da43230976cd2ce7451ac7170fe0fcffde0d716c78191b7?apiKey=5c507e50f5eb47f29838914047d19c51&" alt="Wind Speed" class="weather-icon" />
                  <div class="weather-title">windspeed</div>
                </div>
              </div>
              <div class="weather-details">
                <Map />
              </div>
            </div>
            <div class="right-column">
              <div class="calendar">
                <Calendar />
              </div>
              <div class="button-container">
                <button class="button">generate</button>
                <button class="button button-favorite">favorite</button>
              </div>
            </div>
          </div>
          <div class="music">
            <Music />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
