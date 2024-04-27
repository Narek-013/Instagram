import { SearchDeleteIcon } from "../../../components/NavigationMenu/NavigationIcons";

const FollowersActiveUser = ({ followersModal, OtherProfilFollowers,activeUser,activeFollowOther,activeUnFollow }) => {

    const followersModalClose = (e) => {
      if (
        e.target === e.currentTarget ||
        e.target.classList.contains("closeFollowersModal")
      ) {
        followersModal.current.classList.add("followersModalDivNone");
      }
    };

  return (
    <div
      ref={followersModal}
      onClick={followersModalClose}
      className="FollowersModalDiv followersModalDivNone"
    >
      <div className="FollowersModalBox">
        <div className="FollowersTitleDiv">
          <p>Followers</p>
          <div className="FollowersCloseBtn closeFollowersModal">
            <SearchDeleteIcon />
          </div>
        </div>
        <div>
          <input
            type="search"
            className="FollowersInput"
            placeholder="Search"
          />
        </div>
        <div className="FollowersDiv">
          {OtherProfilFollowers?.map((user, index) => {
            return (
              <div key={index}>
                <div className="FollowerUser">
                  <div className="followerNameDiv">
                    <img
                      className="FollowerProfilImg"
                      src={user.profileImage}
                    />
                    <div>
                      <p>{user.userName}</p>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </div>
                  <div>
                    {activeUser?.id !== user.id &&
                      (activeUser?.following.find((el) => el === user.id) ? (
                        <button
                          className="OtherProfilFollowBtn UnFollow"
                          onClick={() => activeUnFollow(user)}
                        >
                          {" "}
                          UnFollow
                        </button>
                      ) : (
                        <button
                          className="OtherProfilFollowBtn"
                          onClick={() => activeFollowOther(user)}
                        >
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

export default FollowersActiveUser;
