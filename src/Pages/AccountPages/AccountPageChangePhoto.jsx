import { useDispatch, useSelector } from "react-redux";
import { isLoadingFinished, selectUsersData } from "../../store/slices/usersData/userDataSlice";
import { useEffect, useRef, useState } from "react";
import RemoveAndChange from "./RemoveAndChange";
import { fetchActiveItem } from "../../store/slices/usersData/API";

const AccountPageChangePhoto = () => {

  const { activeUser} = useSelector(selectUsersData);
  const changeRef = useRef(null)
  const dispatch = useDispatch()

  const changeImg = () => {
        changeRef.current.classList.add("addBlock")
  }

  useEffect(() => {
    dispatch(fetchActiveItem()); 
  },[activeUser.profileImage])

    return (
      <div>
        <p className="editProfileP">Edit profil</p>
        <div className="profilChanges">
          <div className="changePhotosSettings">
            <img className="circleImgEdit" src={activeUser.profileImage ? activeUser.profileImage : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
            <ul className="NameLastNameEdit">
              <li>{activeUser.userName}</li>
              <li>{activeUser.firstName} {activeUser.lastName}</li>
            </ul>
          </div>
          <button className="changePhotoBtn" onClick={changeImg}>Change photo</button>
        </div>
        <RemoveAndChange changeRef={changeRef}/>
      </div>
    );
}

export default AccountPageChangePhoto;
