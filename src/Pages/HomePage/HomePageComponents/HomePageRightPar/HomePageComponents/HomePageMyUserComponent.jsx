import { useSelector } from "react-redux";
import { selectUsersData } from "../../../../../store/slices/usersData/userDataSlice";
import { Link } from "react-router-dom";


const HomePageMyUserComponent = () => {
    
const activeUser = useSelector(selectUsersData).activeUser
  return (
    <div className="MyInfo">
      <Link className="ComponentsImgAndName" to={"/userPage"}>
        {/* <div className="ComponentsImgAndName"> */}
          <div className="MyImgDiv">
            <div className="MyImg">
              <img src={activeUser.profileImage} />
            </div>
          </div>
          <div className="NameDiv">
            <span>{activeUser.userName}</span>
            <p>
              {activeUser.firstName} {activeUser.lastName}
            </p>
          </div>
        {/* </div> */}
      </Link>
      <p className="switchItem">Switch</p>
    </div>
  );
};

export default HomePageMyUserComponent;
