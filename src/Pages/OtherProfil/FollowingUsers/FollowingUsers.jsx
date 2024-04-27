import { useDispatch, useSelector } from "react-redux";
import { SearchDeleteIcon } from "../../../components/NavigationMenu/NavigationIcons";
import { selectUsersData } from "../../../store/slices/usersData/userDataSlice";

const FollowingUsers = ({ followingModal, OtherProfilFollowing, unFollowItem, postItemFollowers }) => {
  const { activeUser } = useSelector(selectUsersData);

  const followingModalClose = (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains("closeFollowersModal")) {
      followingModal.current.classList.add("followingModalDivNone");
    }
  };

  return (
    <div ref={followingModal} onClick={followingModalClose} className="FollowersModalDiv followingModalDivNone">
      <div className="FollowersModalBox">
        <div className="FollowersTitleDiv">
          <p>Following</p>
          <div className="FollowersCloseBtn closeFollowersModal">
            <SearchDeleteIcon />
          </div>
        </div>
        <div>
          <input type="search" className="FollowersInput" placeholder="Search" />
        </div>
        <div className="FollowersDiv">
          {OtherProfilFollowing?.map((user) => {
            return (
              <div key={user.id}>
                <div className="FollowerUser">
                  <div className="followerNameDiv">
                    <img className="FollowerProfilImg" src={user.profileImage} />
                    <div>
                      <p>{user.userName}</p>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </div>
                  <div>
                    {activeUser?.id !== user.id &&
                      (activeUser?.followers.find((el) => el === user.id) ? (
                        <button className="OtherProfilFollowBtn UnFollow" onClick={() => postItemFollowers(user)}>
                          {" "}
                          UnFollow
                        </button>
                      ) : (
                        <button className="OtherProfilFollowBtn" onClick={() => unFollowItem(user)}>
                          Follow
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowingUsers;
