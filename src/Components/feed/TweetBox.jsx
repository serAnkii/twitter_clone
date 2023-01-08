import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import GifBoxIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
const TweetBox = () => {
  return (
    <div className="tweetbox">
      <Avatar alt="dummy" src="src\images\user1.jpg" />
      <form action="" method="post">
        <input type="text" placeholder="What's happening?" />
        <div id="attachments">
            <ImageIcon  className="input-icons"/>
            <GifBoxIcon className="input-icons"/>
            <PollOutlinedIcon className="input-icons"/>
            <SentimentSatisfiedAltOutlinedIcon className="input-icons"/>
            <PendingActionsOutlinedIcon className="input-icons"/>
            <PlaceOutlinedIcon className="input-icons"/>
            <Button variant="contained" id="tweet-button" className="input-items">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
