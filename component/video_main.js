import React from 'react';

function Video() {
  return (
    <div className="videos">
      <div>
        <header>
          {/* Video from coverr.co */}
          <video className="video-bg" autoPlay muted loop>
            <source
              src="https://thumbs.gfycat.com/GoodnaturedElectricChihuahua-mobile.mp4"
              type="video/mp4"
            />
          </video>
        </header>
      </div>
    </div>
  );
}

export default Video;

// width: 100%;
// height: 120vh;