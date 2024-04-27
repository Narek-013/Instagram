import { useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/userDataSlice";

const OtherUserPosts = () => {

    const {otherUser} = useSelector(selectUsersData)

    return (
      <div className="otherUserPostsSection">
        {otherUser?.posts?.map((el, index) => {
          return (
            <div className="otherUserPost" key={index}>
              <img src={el} />
            </div>
          );
        })}
      </div>
    );
}

export default OtherUserPosts;
