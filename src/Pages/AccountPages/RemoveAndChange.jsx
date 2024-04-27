import { useDispatch, useSelector } from "react-redux";
import { fetchChangeProfilImg, fetchDelProfilImg, fetchDeleteProfilImg } from "../../store/slices/usersData/API";
import { selectUsersData } from "../../store/slices/usersData/userDataSlice";
import "./removeAndChange.css";

const RemoveAndChange = ({ changeRef }) => {
  const dispatch = useDispatch();
  const { activeUser } = useSelector(selectUsersData);

  const noneRef = (ev) => {
    if (ev.target === ev.currentTarget || ev.target.className === "cancelImg") {
      changeRef.current.classList.toggle("addBlock");
    }
  };

  const changeProfilImg = (ev) => {
    const reader = new FileReader();
    if (ev.target.files[0]) {
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = () => {
        dispatch(fetchChangeProfilImg({ activeUser, img: reader.result }));
      };
    }
    changeRef.current.classList.toggle("addBlock");
  };

  const deleteProfilImg = () => {
    dispatch(fetchChangeProfilImg({ activeUser , img: ""}));
    changeRef.current.classList.toggle("addBlock");
  };

  return (
    <div ref={changeRef} className="removeAndChange" onClick={noneRef}>
      <div className="settingsRemove">
        <p className="imgChangeP">Change Profile Photo</p>
        <div className="borderImg"></div>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload Photo
        </label>
        <input id="file-upload" type="file" onChange={changeProfilImg} />
        <div className="lineImg"></div>
        <button className="removeImg" onClick={deleteProfilImg}>
          Remove Current Photo
        </button>
        <div className="lineRemove"></div>
        <button className="cancelImg">Cancel</button>
      </div>
    </div>
  );
};

export default RemoveAndChange;
