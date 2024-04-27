
const OtherUsersStorys = ({ otherUser }) => {
    
  return (
    <div className="otherUserStorys">
      <div className="otherUserStoryDiv">
        <div className="otherUserStory">
          <img className="otherUserStoryImg" src={otherUser?.profileImage} />
        </div>
        {otherUser?.userName?.length >= 12 ? (
          <p>{otherUser?.userName?.slice(0, 11)}...</p>
        ) : (
          <p>{otherUser?.userName}</p>
        )}
      </div>
      <div className="otherUserStoryDiv">
        <div className="otherUserStory">
          <img className="otherUserStoryImg" src={otherUser?.profileImage} />
        </div>
        {otherUser?.userName?.length >= 12 ? (
          <p>{otherUser?.userName?.slice(0, 11)}...</p>
        ) : (
          <p>{otherUser?.userName}</p>
        )}
      </div>
      <div className="otherUserStoryDiv">
        <div className="otherUserStory">
          <img className="otherUserStoryImg" src={otherUser?.profileImage} />
        </div>
        {otherUser?.userName?.length >= 12 ? (
          <p>{otherUser?.userName?.slice(0, 11)}...</p>
        ) : (
          <p>{otherUser?.userName}</p>
        )}
      </div>
    </div>
  );
};

export default OtherUsersStorys;
