import "./allMessages.css";

const AllMessages = ({ otherUser, activeUser }) => {
  const messagesArray = otherUser?.message?.filter((el) => el.id === activeUser?.id);

  return (
    <div className="allMessages">
      {messagesArray?.length ? (
        messagesArray[0]?.userMessage?.map((el, index) => {
          return (
            <div key={index} className={el.name === activeUser?.userName ? "activeUserMessage" : "otherUserMessage"}>
              <p>{el.text}</p>
            </div>
          );
        })
      ) : (
        <h4>Chka namak</h4>
      )}
    </div>
  );
};

export default AllMessages;
