import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Beluga");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  // useEffect-any time we get a new list of videos, we are going to select the first video

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onFormSubmition={search} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
