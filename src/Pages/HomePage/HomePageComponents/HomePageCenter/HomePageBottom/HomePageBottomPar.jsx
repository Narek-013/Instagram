import { Link } from "react-router-dom";
import "./HomePageBottomPar.css";
import { BottomParCommentIcon, BottomParLikeIcon, BottomParMoreIcon, BottomParMuteIcon, BottomParSaveIcon, BottomParSendIcon } from "./HomePageBottomParIcons/HomePageBottomParIcons";

const HomePageBottomPar = ({ allUsersData }) => {
  return (
    <div className="HomeBottom">
      {allUsersData?.map((user)=>{
          return (
            <div className="ComponentCard" key={user.id}> 
              <div className="componentCardTopDiv"> 
                <Link className="ComponentsImgAndName" to={`${user.id}`}>
                  <div className="ComponentImgDiv">
                      <img className="ComponentImg" src={user.profileImage} />
                  </div>
                  <div className="ComponentNameDiv">
                    <span>{user.userName}</span>
                    <p>Original audio</p>
                  </div>
                </Link>
                <div>
                  <BottomParMoreIcon />
                </div>
              </div>
              <div className="componentContentDiv">
                <img src={user.posts[0]} />
                <div className="MuteIcon">
                  <BottomParMuteIcon />
                </div>
              </div>
              <div className="ComponentBottomIconsDiv">
                <div className="LikeCommentSentIconsDiv">
                  <BottomParLikeIcon />
                  <BottomParCommentIcon />
                  <BottomParSendIcon />
                </div>
                <div className="SaveIconDiv">
                  <BottomParSaveIcon />
                </div>
              </div>
              <div className="ComponentLikeNumber">
                <p>71 Likes</p>
              </div>
              <div className="componentCommentInputDiv">
                <form>
                  <input
                    className="input"
                    type="text"
                    placeholder="Add a comment..."
                  />
                </form>
              </div>
            </div>
          )
      })}
    </div>
  );
}; 

export default HomePageBottomPar;
