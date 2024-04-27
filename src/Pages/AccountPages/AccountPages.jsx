import { useDispatch, useSelector } from "react-redux";
import AccounBio from "./AccounBio";
import AccountGender from "./AccountGender";
import AccountPageChangePhoto from "./AccountPageChangePhoto";
import AccountPrivacy from "./AccountPrivacy";
import AccountWebsite from "./AccountWebsite";
import Suggestions from "./Suggestions";
import { selectUsersData } from "../../store/slices/usersData/userDataSlice";
import { fetchChaneBioAndGender } from "../../store/slices/usersData/API";
import "./accountPage.css";

const AccountPages = () => {

  const { activeUser } = useSelector(selectUsersData);
  const dispatch = useDispatch()
  
  const changeInfoProfil = (ev) => {
    ev.preventDefault()
    const {bioInput:{value:bioInput},gender:{value:gender}} = ev.target;
    dispatch(fetchChaneBioAndGender({ activeUser, info: { bioInput ,gender} }));
    ev.target.reset()
  }

    return (
      <div className="accountsPage ">
        <AccountPageChangePhoto />
        <AccountWebsite />
        <form onSubmit={changeInfoProfil}>
          <AccounBio />
          <AccountGender activeUser={activeUser} />
          <Suggestions />
          <AccountPrivacy />
          <div className="submitBtnAccount">
            <button className="btnSubAcc">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default AccountPages;
