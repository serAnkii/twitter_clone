import React from "react";
import Sidebaroption from "./Sidebaroption";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';

//css
import "../../css/sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <Sidebaroption className="options" active Icon={HomeIcon} text="Home" />
      <Sidebaroption className="options" Icon={SearchIcon} text="Explore" />
      <Sidebaroption className="options" Icon={NotificationsNoneIcon} text="Notifications" />
      <Sidebaroption className="options" Icon={MailOutlineIcon} text="Messages" />
      <Sidebaroption className="options" Icon={BookmarkBorderIcon} text="Bookmarks" />
      <Sidebaroption className="options" Icon={ListAltIcon} text="Lists" />
      <Sidebaroption className="options" Icon={PermIdentityIcon} text="Profile" />
      <Sidebaroption className="options" Icon={MoreHorizIcon} text="More" />

      <Button variant="contained">Tweet</Button>
       
    </div>
  );
};

export default Sidebar;
