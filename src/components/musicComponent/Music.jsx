import React, { useEffect, useState } from 'react';

const musicStyle = {
  height: '152px',
  marginTop: '16px',
  borderRadius: '15px',
  // backgroundColor: '#c4c4c4',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
}

const weatherParameters = {
  "Fair (Day)": {
    mood: "Calm and Peaceful",
    tempo: [60, 90],
    valence: [0.6, 0.9],
    energy: [0.2, 0.4],
    acousticness: [0, 1],
    instrumentallness: [0.4, 1.0]
  },
  "Fair (Night)": {
    mood: "Calm and Peaceful",
    tempo: [60, 90],
    valence: [0.6, 0.9],
    energy: [0.2, 0.4],
    acousticness: [0, 1],
    instrumentallness: [0.4, 1.0]
  },
  "Fair and Warm": {
    mood: "Calm and Peaceful",
    tempo: [60, 90],
    valence: [0.6, 0.9],
    energy: [0.2, 0.4],
    acousticness: [0, 1],
    instrumentallness: [0.4, 1.0]
  },
  "Partly Cloudy (Day)": {
    mood: "Calm and Peaceful",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Partly Cloudy (Night)": {
    mood: "Calm and Peaceful",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Cloudy": {
    mood: "Mysterious and Reflective",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Hazy": {
    mood: "Mysterious and Reflective",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Slightly Hazy": {
    mood: "Mysterious and Reflective",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Mist": {
    mood: "Mysterious and Reflective",
    tempo: [70, 100],
    valence: [0.3, 0.5],
    energy: [0.3, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.2, 0.8]
  },
  "Windy": {
    mood: "Energetic and Lively",
    tempo: [120, 160],
    valence: [0.7, 1.0],
    energy: [0.7, 1.0],
    danceability: [0.6, 1.0],
    acousticness: [0, 1],
  },
  "Light Rain": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Moderate Rain": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Heavy Rain": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Passing Showers": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0.5, 0.9],
    instrumentallness: [0.1, 0.5]
  },
  "Light Showers": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Showers": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Heavy Showers": {
    mood: "Reflective and Somber",
    tempo: [60, 90],
    valence: [0.1, 0.4],
    energy: [0.2, 0.5],
    acousticness: [0, 1],
    instrumentallness: [0.1, 0.5]
  },
  "Thundery Showers": {
    mood: "Intense and Dramatic",
    tempo: [80, 140],
    valence: [0.1, 0.3],
    energy: [0.7, 1.0],
    danceability: [0.3, 0.6],
    acousticness: [0, 1],
  },
  "Heavy Thundery Showers": {
    mood: "Intense and Dramatic",
    tempo: [80, 140],
    valence: [0.1, 0.3],
    energy: [0.7, 1.0],
    danceability: [0.3, 0.6],
    acousticness: [0, 1],
  },
  "Heavy Thundery Showers with Gusty Winds": {
    mood: "Intense and Dramatic",
    tempo: [80, 140],
    valence: [0.1, 0.3],
    energy: [0.7, 1.0],
    danceability: [0.3, 0.6],
    acousticness: [0, 1],
  }
};
const getMusicParameters = (weather) => {
  const parameters = weatherParameters[weather];
  if (!parameters) {
    console.error("Weather condition not recognized.");
    return {};
  }
  const parameterRanges = {};
  Object.keys(parameters).forEach((key) => {
    if (Array.isArray(parameters[key])) {
      // change the parameters to string
      parameterRanges[`min_${key}`] = parameters[key][0].toString();
      parameterRanges[`max_${key}`] = parameters[key][1].toString();
    } else {
      parameterRanges[key] = parameters[key].toString(); // change the parameters to string
    }
  });
  return parameterRanges;
}

const CLIENT_ID = '7fbe5b73e3164ca092e56625154a4406'; // Spotify Client ID
const CLIENT_SECRET = '1cf3f5d861b44aca9fb85715b080e86e'; // Spotify Client Secret

const Music = (props) => {

  const [token, setToken] = useState(null);
  const [musicId, setMusicId] = useState("1dsR6YRjQImtq99v7z9nFX");
  const [musicName, setMusicName] = useState("가을 동화 Main Title");
  const [musicArtist, setMusicArtist] = useState("최태완");

  useEffect(() => {
    const authOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    };

    fetch('https://accounts.spotify.com/api/token', authOptions)
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          setToken(data.access_token);
        }
      })
      .catch(error => {
        console.error('Error during Spotify auth:', error);
      });
  }, []); // get token

  const getMusic = async (url) => {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log("token is: " + token);
    // console.log(data);
    console.log("new music id is: " + data.tracks[0].id);
    setMusicId(data.tracks[0].id);
    setMusicName(data.tracks[0].name);
    setMusicArtist(data.tracks[0].artists[0].name);
  };

  useEffect(() => {
    console.log("weatherFromMapToMusic: " + props.weatherFromMapToMusic);
    if (!token) {
      console.error('No token available');
      return;
    }
    const musicParameters = getMusicParameters(props.weatherFromMapToMusic);
    // console.log(musicParameters);
    const url = `https://api.spotify.com/v1/recommendations?limit=1&market=SG&seed_genres=pop%2Cedm%2Cclassical%2Calternative%2Crock&min_acousticness=${musicParameters.min_acousticness}&max_acousticness=${musicParameters.max_acousticness}&min_tempo=${musicParameters.min_tempo}&max_tempo=${musicParameters.max_tempo}&min_valence=${musicParameters.min_valence}&max_valence=${musicParameters.max_valence}`;
    // const url = `https://api.spotify.com/v1/recommendations?limit=1&market=SG&seed_genres=pop%2Cedm%2Cclassical%2Calternative%2Crock&min_acousticness=0.5&max_acousticness=0.9&min_tempo=60&max_tempo=90&min_valence=0.6&max_valence=0.9`;
    getMusic(url);
  }, [props.matchLocationClicked]);

  useEffect(() => {
    props.setMusicNameToComp(musicName);
    props.setMusicArtistToComp(musicArtist);
    props.setMusicIdToComp(musicId);
  }, [musicId]);

  useEffect(() => {
    console.log("musicIdFromCalendar: " + props.musicIdFromCalendarToMusic);
    if (props.playClickedFromCalendarToMusic !== 0 && props.musicIdFromCalendarToMusic) {
      setMusicId(props.musicIdFromCalendarToMusic);
      setMusicName(props.musicNameFromCalendarToMusic);
      setMusicArtist(props.musicArtistFromCalendarToMusic);
    }
  }, [props.playClickedFromCalendarToMusic]);

  return (
    <div>
      <iframe
        style={musicStyle}
        src={`https://open.spotify.com/embed/track/${musicId}?utm_source=generator`}
        width="100%"
        height="100%"
        marginbutton="0"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  );
};

export default Music;