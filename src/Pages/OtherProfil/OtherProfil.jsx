import { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/userDataSlice";
import { fetchFollowUser, fetchGetOtherUser, fetchUnFollow, fetchUsersData } from "../../store/slices/usersData/API";

import "./OtherProfil.css";
import { OtherProfilAccountsIcon, OtherProfilBurgerMenu } from "./OtherProfilIcons";
import OtherProfilPostReelTagged from "./OtherProfilPostReelTagged/OtherProfilPostReelTagged";
import FollowersModalBlock from "./FollowersModalBlock/FollowersModalBlock";
import FollowingUsers from "./FollowingUsers/FollowingUsers";
import OtherUsersStorys from "./OtherUsersStorys";

function OtherProfil() {
  const followersModal = useRef(null);
  const followingModal = useRef(null);
  const { activeUser, allUsersData, otherUser } = useSelector(selectUsersData);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGetOtherUser(id));
  }, [id]);

  const OtherProfilFollowing = allUsersData.filter((user) => otherUser?.following?.includes(user.id));
  const OtherProfilFollowers = allUsersData.filter((user) => otherUser?.followers?.includes(user.id));
  const OtherUserId = OtherProfilFollowers?.find((user) => user?.id === activeUser?.id);

  const followingModalAdd = () => {
    followingModal.current.classList.remove("followingModalDivNone");
  };

  const followersModalAdd = () => {
    followersModal.current.classList.remove("followersModalDivNone");
  };

  const postItemFollowers = (otherUser) => {
    dispatch(fetchFollowUser({ otherUser, activeUser }));
  };
  const unFollowItem = (otherUser) => {
    dispatch(fetchUnFollow({ otherUser, activeUser }));
  };

  return (
    <div className="otheruserContainer">
      <div className="OtherProfil">
        <div className="ImageAndRightBox">
          <div>
            <img className="otherUserProfilImage" src={otherUser?.profileImage} />
          </div>
          <div className="otherProfilNameLine">
            <div className="otherProfilIconsDiv">
              <p className="otherUserUserName">{otherUser?.userName}</p>
              <div className="OtherProfilFollowBtnDiv">
                {OtherUserId ? (
                  <button className="OtherProfilFollowBtn UnFollow" onClick={() => unFollowItem(otherUser)}>
                    {" "}
                    UnFollow
                  </button>
                ) : (
                  <button className="OtherProfilFollowBtn" onClick={() => postItemFollowers(otherUser)}>
                    Follow
                  </button>
                )}
              </div>
              <div>
                <div className="AccountsIcon">
                  <OtherProfilAccountsIcon />
                </div>
              </div>
              <div className="BurgerMenuDiv">
                <OtherProfilBurgerMenu />
              </div>
            </div>
            <div className="postfollowDiv">
              <p>
                {otherUser?.posts?.length} <span>posts</span>
              </p>
              <p onClick={followersModalAdd} className="follow">
                {otherUser?.followers?.length} <span>followers</span>
              </p>
              <p onClick={followingModalAdd} className="follow">
                {otherUser?.following?.length} <span>following</span>
              </p>
            </div>
            <div className="nameAndBioDiv">
              <p className="otherUserName">
                {otherUser?.firstName} {otherUser?.lastName}
              </p>
              <p className="otherUserBio">{otherUser?.bio}</p>
            </div>
          </div>
        </div>
        <OtherUsersStorys otherUser={otherUser} />
        <OtherProfilPostReelTagged id={id} />
        <Outlet />
        <FollowersModalBlock
          followersModal={followersModal}
          OtherProfilFollowers={OtherProfilFollowers}
          activeUser={activeUser}
          unFollowItem={unFollowItem}
          postItemFollowers={postItemFollowers}
        />
        <FollowingUsers
          followingModal={followingModal}
          OtherProfilFollowing={OtherProfilFollowing}
          unFollowItem={unFollowItem}
          postItemFollowers={postItemFollowers}
        />
      </div>
    </div>
  );
}

export default OtherProfil;
