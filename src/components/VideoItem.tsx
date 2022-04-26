import React from "react";
import { ItemYoutubeVideo } from "../util/youtubeApiTypes";
import "./Shared.css";
import "./VideoItem.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export interface VideoItemProps {
  video: ItemYoutubeVideo;
  onVideoSelect: (video: ItemYoutubeVideo) => void;
}

export default class VideoItem extends React.Component<VideoItemProps> {
  shouldComponentUpdate(nextProps: VideoItemProps) {
    return this.props.video.id.videoId !== nextProps.video.id.videoId;
  }

  render() {
    const {
      snippet: {
        thumbnails: { high: thumbnail },
        title,
        description,
        channelTitle,
        publishedAt,
        channelId,
      },
    } = this.props.video;

    return (
      <Card
        sx={{
          margin: 1,
          display: "flex",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 251 }}
          image={thumbnail.url}
          alt="Video thumbnail"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {description}
            </Typography>
            <span>
              From{" "}
              <a href={"https://www.youtube.com/channel/" + channelId}>
                {channelTitle}
              </a>
              <p>{new Date(publishedAt).toLocaleString()}</p>
            </span>
          </CardContent>
        </Box>
      </Card>
      // <div
      //   className="row video-item"
      //   onClick={() => this.props.onVideoSelect(this.props.video)}>
      //   <div className="video-item__img">
      //     <img src={thumbnail.url} alt="Video thumbnail" />
      //   </div>
      //   <div className="video-item__description">
      //     <h4>{title}</h4>
      //     <span>
      //       From{' '}
      //       <a href={'https://www.youtube.com/channel/' + channelId}>
      //         {channelTitle}
      //       </a>
      //     </span>
      //     <p>{description}</p>
      //     <p>{new Date(publishedAt).toLocaleString()}</p>
      //   </div>
      // </div>
    );
  }
}
