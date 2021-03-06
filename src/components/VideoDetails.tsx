import React from 'react';
import { ItemYoutubeVideo } from '../util/youtubeApiTypes';

export interface VideoDetailsProps {
  video: ItemYoutubeVideo;
}

export default class VideoDetails extends React.Component<VideoDetailsProps> {
  shouldComponentUpdate(nextProps: VideoDetailsProps) {
    return this.props.video.id.videoId !== nextProps.video.id.videoId;
  }

  render() {
    const {
      id: { videoId },
      snippet: { title,description },


    } = this.props.video;

    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/' + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <p>{title}</p>
        <p>{description}</p>

      </div>
    );
  }
}
