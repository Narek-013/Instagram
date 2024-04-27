import { useEffect } from "react";
import { LikeMessage, PictureMessage, SmileMessage, VoiceMessage } from "../../../components/NavigationMenu/NavigationIcons";
import { UseRequest } from "../../../hook/UseRequest";
import { ACTIVE_USER, ALL_USERS_URL } from "../../../projectInfo";
import { useDispatch } from "react-redux";
import "./messageFooter.css";
import { fetchSendNewMessage, fetchSendStartMessage } from "../../../store/slices/usersData/API";

const MessageFooterInput = ({ otherUser, activeUser }) => {
  const dispatch = useDispatch();
  const { patch } = UseRequest();

  console.log(activeUser);

  const addNewMessage = async (e) => {
    e.preventDefault();
    const [input] = e.target;
    const newMessageOther = {
      id: activeUser.id,
      userMessage: [{ id: activeUser.id, text: input.value, time: new Date().getHours() + ":" + new Date().getMinutes(), name: activeUser.userName }],
    };
    const newMessageActiveUser = {
      id: otherUser.id,
      userMessage: [{ id: otherUser.id, text: input.value, time: new Date().getHours() + ":" + new Date().getMinutes(), name: activeUser.userName }],
    };

    let otherMessage = otherUser?.message?.find((el) => el.id === activeUser.id);
    let activeUserMassage = activeUser?.message?.find((el) => el.id === otherUser.id);

    if (otherMessage && activeUserMassage) {
      let otheObj = {
        ...otherMessage,
        userMessage: [
          ...otherMessage.userMessage,
          { id: activeUser.id, text: input.value, time: new Date().getHours() + ":" + new Date().getMinutes(), name: activeUser.userName },
        ],
      };
      let activeObj = {
        ...activeUserMassage,
        userMessage: [
          ...activeUserMassage.userMessage,
          { id: otherUser.id, text: input.value, time: new Date().getHours() + ":" + new Date().getMinutes(), name: activeUser.userName },
        ],
      };
      let otherArray = otherUser.message.map((el) => (el.id === otheObj.id ? otheObj : el));
      let activeUserArray = activeUser.message.map((el) => (el.id === activeObj.id ? activeObj : el));

      dispatch(fetchSendNewMessage({ otherUser, activeUser, otherArray, activeUserArray }));
    } else {
      dispatch(fetchSendStartMessage({ otherUser, activeUser, newMessageActiveUser, newMessageOther }));
    }
    e.target.reset();
  };

  return (
    <div className="messageFooter">
      <div className="footMessage">
        <div className="messageBlockInp">
          <form className="smileAndInputDiv" onSubmit={addNewMessage}>
            <SmileMessage />
            <input type="text" className="messageInput" placeholder="Message..." />
            <button>Submit</button>
          </form>
          <div className="messageIcons">
            <VoiceMessage />
            <PictureMessage />
            <LikeMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFooterInput;
