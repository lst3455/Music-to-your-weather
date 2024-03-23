import React from 'react';
import Calendar from 'react-calendar';

import MapContainer from './MapContainer';
import 'react-calendar/dist/Calendar.css';
import './css/Cal.css';
import './css/Music.css';
import './css/Weather.css';

let selectedDateGlobal = new Date();

//日历组件，用户选择的时期会被传递到全局变量selectedDateGlobal中
class Cal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = date => {
    this.setState({ date });
    selectedDateGlobal = this.state.date.toDateString();
    // console.log(selectedDateGlobal);
  }
  render() {
    return (
      <div className='app'>
        <h1 className='text-center'>Music to Your Weather</h1>
        <div className='calendar-container'>
          <Calendar onChange={this.onChange} value={this.state.date} locale="en-US"/>
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {this.state.date.toDateString()}
        </p>
      </div>
    );
  }
}
//嵌入式播放器组件
class Music extends React.Component {
  render() {
    return (
      <div className="music-container">
        <iframe 
          style={{borderRadius: '12px'}}
          src="https://open.spotify.com/embed/track/4LB2clNX8xZ065fStce2JF?utm_source=generator" 
          width="80%" 
          height="152" 
          // frameBorder="0" 
          allowFullScreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    );
  }
}
// 天气显示组件
class Weather extends React.Component {
  render() {
    const { condition } = this.props;

    let weatherText = "Current Weather : "+condition

    return (
      <div className="weather-container">
        <p className="weather-text">{weatherText}</p>

      </div>
    );
  }
}

//最上层组件
class App extends React.Component {

  render() {
    // 谷歌地图组件MapContainer在单独的MapContainer.jsx文件中
    return (
      <div className="App">
        <Cal />
        <Music />
        <MapContainer />
        <Weather />
        
      </div>
      
    );
  }
}
export default App;




