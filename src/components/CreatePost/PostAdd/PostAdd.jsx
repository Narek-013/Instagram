import { useDispatch } from "react-redux";
import { CreatePostAddBackIcon, CreatePostAddGalleryIcon, CreatePostAddSelectIcon, CreatePostAddZoomIcon } from "../CreateIcons/CreateIcons";
import "./PostAdd.css";
import { fetchCreatePostsImage } from "../../../store/slices/usersData/API";
import { useNavigate } from "react-router-dom/dist";
import { removePostsAndBack } from "../../../store/slices/usersData/userDataSlice";

const PostAdd = ({ postsUsers, activeUser, createPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const changeActiveUserPostsImg = () => {
    createPost.current.classList.add("noneModalCreate");
    dispatch(fetchCreatePostsImage({ activeUser, postsUsers }));
    navigate("/userPage")
  };

  const removePosts = () => {
    dispatch(removePostsAndBack());
  }

  return (
    <div className="postAddDiv">
      <div className="postAddDivtitleDiv">
        <div onClick={removePosts}>
          <CreatePostAddBackIcon />
        </div>
        <p className="postAddDivtitle">Crop</p>
        <p className="next" onClick={changeActiveUserPostsImg}>
          Next
        </p>
      </div>
      <div className="ImageBox">
        <img className="chooseImage" src={postsUsers} />
      </div>
      <div className="PostAddIconsDiv">
        <div className="leftIcons">
          <div className="IconBackground">
            <CreatePostAddSelectIcon />
          </div>
          <div className="IconBackground">
            <CreatePostAddZoomIcon />
          </div>
        </div>
        <div className="IconBackground">
          <CreatePostAddGalleryIcon />
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
