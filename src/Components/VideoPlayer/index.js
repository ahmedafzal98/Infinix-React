// VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css'; // Import CSS for styling

const VideoPlayer = ({isModalOpen, setIsModalOpen ,videoType }) => {

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const youtubeId = "vfZPX0ig7VY"; 
  const linkedinEmbedUrl ="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7320816146385907713";


  const screenWidth = window.innerWidth;
 
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  if (screenWidth < 600) {
    opts.width = "320"
    opts.height = "195"
  } else {
    opts.width = "640"
    opts.height = "390"
  }

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {videoType === 1 ? (
              // LinkedIn iframe
              <iframe
                src={linkedinEmbedUrl}
                width={opts.width}
                height={opts.height}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="LinkedIn Video"
              ></iframe>
            ) : (
              // Default YouTube
              <YouTube videoId={youtubeId} opts={opts} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
