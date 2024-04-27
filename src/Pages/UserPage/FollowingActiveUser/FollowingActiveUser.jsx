import { SearchDeleteIcon } from "../../../components/NavigationMenu/NavigationIcons";

const FollowingActiveUser = ({ followingModal, OtherProfilFollowing ,activeUser,activeUnFollow}) => {

     const followingModalClose = (e) => {
       if (
         e.target === e.currentTarget ||
         e.target.classList.contains("closeFollowersModal")
       ) {
         followingModal.current.classList.add("followingModalDivNone");
       }
     };
  return (
    <div
      ref={followingModal}
      onClick={followingModalClose}
      className="FollowersModalDiv followingModalDivNone"
    >
      <div className="FollowersModalBox">
        <div className="FollowersTitleDiv">
          <p>Following</p>
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
          {OtherProfilFollowing?.map((user) => {
            return (
              <div key={user.id}>
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
                    <button className="OtherProfilFollowBtn UnFollow"onClick={() => activeUnFollow(user)}>UnFollow</button>
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

export default FollowingActiveUser;
