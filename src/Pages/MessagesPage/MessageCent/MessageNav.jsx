import { CallUser, InfoMessage, VideoCall } from "../../../components/NavigationMenu/NavigationIcons";

const MessageNav = ({user}) => {
    return (
      <div className="messageNav">
        <div className="messageNavigation">
          <div className="messNavLeft">
            <img src={user?.profileImage} alt="" className="profilImg" />
            <p>{user?.userName}</p>
          </div>
          <div className="messageNavRight">
            <CallUser />
            <VideoCall />
            <InfoMessage />
          </div>
        </div>
      </div>
    );
}

export default MessageNav;
