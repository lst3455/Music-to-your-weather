import Map from "./components/mapComponent/Map.jsx";
import "./App.css";
import Music from "./components/musicComponent/Music.jsx";
import Calendar from "./components/calendarComponent/Calendar.jsx";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="content">
          <div class="top-bar">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca55e90abf60c445c42d4e24d635b289ee520d30c5564458a47583fb96960fae?apiKey=5c507e50f5eb47f29838914047d19c51&" class="circle" />
            <div class="bar"></div>
          </div>
          <div class="intro">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81940b5e4cbfc86c12389dcbcdbee0678d1eab8bce3e4a607cc9a39a1ab9baf1?apiKey=5c507e50f5eb47f29838914047d19c51&"
              class="img-title"
              alt="Descriptive alternative text for the image"
            />
          </div>
          <div class="main-content">
            <div class="left-column">
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
                <button class="button button-right">like</button>
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
