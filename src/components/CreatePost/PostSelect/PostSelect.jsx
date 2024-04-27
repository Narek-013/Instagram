import { useDispatch, useSelector } from "react-redux";
import { CreateImageIcon } from "../CreateIcons/CreateIcons";
import "./PostSelect.css";
import { changePostImg} from "../../../store/slices/usersData/userDataSlice";

const PostSelect = () => {

  const dispatch = useDispatch()

  const changeCreatePost = (ev) => {
    const postReader = new FileReader();
       if (ev.target.files[0]) {
         postReader.readAsDataURL(ev.target.files[0]);
         postReader.onload = () => {
           dispatch(changePostImg(postReader.result));
         };
       }
  }


    return (
      <div className="postSelectDiv">
        <div className="titleDiv">
          <p className="title">Create new post</p>
        </div>
        <div className="postBottomBox">
          <div className="postBottomDiv">
            <CreateImageIcon />
            <p>Drag photos and videos here</p>
            <label htmlFor="file-uploads" className="custom-file-upload button">
              Select from computer
            </label>
            <input id="file-uploads" type="file" onChange={(ev) => changeCreatePost(ev)}/>
          </div>
        </div>
      </div>
    ); 
}

export default PostSelect;
