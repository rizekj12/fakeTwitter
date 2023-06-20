import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1670871892515799040"} />{" "}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Duncan_kittyrah"
          options={{ height: 400 }}
        />{" "}
        <TwitterShareButton
          url={"discord.gg/7Hm6yneMeV"}
          options={{ text: "#SCSS is awesome", via: "SkyclawMelee" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
