import React from 'react';
import { ItemYoutubeVideo } from '../util/youtubeApiTypes';
import VideoItem from './VideoItem';

export interface VideoListProps {
  videos: ItemYoutubeVideo[];
  onVideoSelect: (video: ItemYoutubeVideo) => void;
}


const VideoList: React.FunctionComponent<VideoListProps> = ({
  videos,
  onVideoSelect,
}) => {
  const videosList = videos.map((video) => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
    />
  ));
  return (
    <div>
      {videosList}
    </div>
  );
};

export default VideoList;
