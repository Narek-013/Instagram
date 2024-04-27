import React from "react";
import "./StoryModalWindow.css";
import { StoryInstagramLogo, StoryLikeIcon, StoryMoreIcon, StoryPauseIcon, StorySendIcon, StoryVolumeIcon } from "./StoryIcons/StoryIcons";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../../../../../store/slices/usersData/userDataSlice";
import { Link } from "react-router-dom";

const StoryModalWindow = () => {

  const { storyElm } = useSelector(selectUsersData);


  return (
    <div className="modalStoryWindow">
      <div className="StoryLogoDiv">
        <StoryInstagramLogo />
      </div>
      <div className="animationStoryDiv">
        <div className="animationStory"></div>
      </div>
      <div className="StoryTopPar">
        <Link className="StoryUserDiv" to={`${storyElm.id}`}>
          <div className="StoryUserProfileImgBlock">
            <img className="StoryUserProfileImg" src={storyElm.profileImage} />
          </div>
          <p className="StoryUserName">{storyElm.userName}</p>
        </Link>
        <div className="StoryTopIconsDiv">
          <StoryVolumeIcon />
          <StoryPauseIcon />
          <StoryMoreIcon />
        </div>
      </div>
      <img className="modalStoryImg" src={storyElm.posts} />
      <div className="StoryBottomPar">
        <input type="text" placeholder={`reply to userName`} />
        <div className="StoryIconsDiv">
          <StoryLikeIcon />
        </div>
        <div className="StoryIconsDiv">
          <StorySendIcon />
        </div>
      </div>
    </div>
  );
};

export default StoryModalWindow;
