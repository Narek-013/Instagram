import { DiAptana } from "react-icons/di";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import FollowersModalBlock from "../../../../OtherProfil/FollowersModalBlock/FollowersModalBlock";
import { useRef } from "react";
import FollowingUsers from "../../../../OtherProfil/FollowingUsers/FollowingUsers";
import "./profilTpRight.css";
import { useDispatch } from "react-redux";
import { fetchFollowUser, fetchUnFollow } from "../../../../../store/slices/usersData/API";
import FollowersActiveUser from "../../../FollowersActiveUser/FollowersActiveUser";
import FollowingActiveUser from "../../../FollowingActiveUser/FollowingActiveUser";

const ProfilTpRight = ({ activeUser, allUsersData, otherUser }) => {
  const followersModal = useRef(null);
  const followingModal = useRef(null);
  const dispatch = useDispatch();

  const followersModalAdd = () => {
    followersModal.current.classList.remove("followersModalDivNone");
  };
  const followingModalAdd = () => {
    followingModal.current.classList.remove("followingModalDivNone");
  };

  const OtherProfilFollowers = allUsersData.filter((user) => activeUser?.followers?.includes(user.id));
  const OtherProfilFollowing = allUsersData.filter((user) => activeUser?.following?.includes(user.id));

 const activeUnFollow = (otherUser) => {
  dispatch(fetchUnFollow({ otherUser, activeUser }));
 }
 
 const activeFollowOther = (otherUser) => {
  dispatch(fetchFollowUser({otherUser,activeUser}));
 }

  return (
    <div className="profilTpRight">
      <div className="profilTpRight_top">
        <p>{activeUser.userName}</p>
        <div className="buttonSettingsBlock">
          <Link to="/settings">Edit Profile</Link>
          <Link>View Archive</Link>
        </div>
        <Link to="/settings">
          <DiAptana className="settings" />
        </Link>
      </div>
      <div className="followers">
        <p>{activeUser?.posts?.length} posts</p>
        <p onClick={followersModalAdd}>{activeUser?.followers?.length} followers</p>
        <p onClick={followingModalAdd}>{activeUser?.following?.length} following</p>
      </div>
      <div className="userBio">
        <p className="activeBio">{activeUser?.bio}</p>
        <div className="Bio">
          <button>
            @ {activeUser?.firstName}__ <IoCheckmarkDoneCircle className="doneImg" />
          </button>
        </div>
      </div>
      <FollowersActiveUser followersModal={followersModal} OtherProfilFollowers={OtherProfilFollowers} activeUser={activeUser} activeFollowOther={activeFollowOther} activeUnFollow={activeUnFollow}/>
      <FollowingActiveUser followingModal={followingModal} OtherProfilFollowing={OtherProfilFollowing} activeUnFollow={activeUnFollow}/>
    </div>
  );
};

export default ProfilTpRight;
