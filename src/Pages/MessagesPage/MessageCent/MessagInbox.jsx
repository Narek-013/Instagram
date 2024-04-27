import { Messages } from "../../../components/NavigationMenu/NavigationIcons";

const MessagInbox = () => {
    return (
      <div className="rightMessages">
        <Messages />
        <p className="yourMessage">Your messages</p>
        <p className="sendPrivate">
          Send private photos and messages to a friend or group
        </p>
        <button className="messageBtn">Send Message</button>
      </div>
    );
}

export default MessagInbox;
