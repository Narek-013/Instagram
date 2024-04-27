import PostAdd from "./PostAdd/PostAdd";
import PostSelect from "./PostSelect/PostSelect";

import "./CreatePost.css"
import { useSelector } from "react-redux";
import { selectUsersData } from "../../store/slices/usersData/userDataSlice";

const CreatePost = ({ createPost }) => {
  const { postsUsers, activeUser } = useSelector(selectUsersData);
  return (
    <div className="CreatePost addModalCre ">
      {postsUsers ? (
        <PostAdd
          postsUsers={postsUsers}
          activeUser={activeUser}
          createPost={createPost}
        />
      ) : (
        <PostSelect />
      )}
    </div>
  );
};

export default CreatePost;
