import { useSelector } from "react-redux";
import { selectUsersData } from "../../../../store/slices/usersData/userDataSlice";
import "./postPage.css";

const PostsProfil = () => {
  const { activeUser } = useSelector(selectUsersData);

  return (
    <div className="posts">
      {
      activeUser.posts.map((el) => {
        return (
          <div className="post" key={activeUser.id}>
            <img src={el} alt="#" />
          </div>
        );
      })}
    </div>
  );
};

export default PostsProfil;
