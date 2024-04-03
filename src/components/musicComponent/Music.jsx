import React from "react";

const musicStyle = {
  height: '152px',
  marginTop: '16px',
  borderRadius: '15px',
  // backgroundColor: '#c4c4c4',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
}

const Music = () => {
  return (
    <div>
      <iframe
        style={musicStyle}
        src="https://open.spotify.com/embed/track/1dsR6YRjQImtq99v7z9nFX?utm_source=generator"
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