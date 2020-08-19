import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
function Sidebar() {
  return (
    <div className="sidebar">
      <div class="sidebar__section1">
        <SidebarRow title="Home" Icon={HomeIcon} selected />
        <SidebarRow title="Trending" Icon={WhatshotIcon} />
        <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      </div>
      <div className="sidebar__section2">
        <SidebarRow title="Library" Icon={VideoLibraryIcon} />
        <SidebarRow title="History" Icon={HistoryIcon} />
        <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
        <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
        <SidebarRow title="Liked Videos" Icon={ThumbUpIcon} />
        <SidebarRow title="Favorites" Icon={PlaylistPlayIcon} />
      </div>
      <div className="sidebar__suscriptions">
        {/* Suscripciones segun el Usuario */}
      </div>
      <div className="sidebar__section3">
        {/* More from youtube, Gaming, Liver, Learning */}
      </div>
      <div className="sidebar__options">
        {/* Settings, Report History,  Help, Feedback */}
      </div>
      <div className="sidebar__finaltext">{/*  */}</div>
    </div>
  );
}

export default Sidebar;
