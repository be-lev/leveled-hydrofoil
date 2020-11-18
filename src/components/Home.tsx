import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div>
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            title="bgVideo"
            src="https://www.youtube.com/embed/i9yCe6ibhzU?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=i9yCe6ibhzU"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            width="100vw"
            height="100vh"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
