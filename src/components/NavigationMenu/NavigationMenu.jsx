import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavigationCreateIcon,SettingsIcon, NavigationExploreIcon, NavigationHomeIcon, NavigationLogoIcon, NavigationMessagesIcon, NavigationMoreIcon, NavigationNotificationsIcon, NavigationReelsIcon, NavigationSearchIcon, NavigationThreadsIcon, Activity, SavedIconModal, LightDarkIcon, ReportedIcon, InstaLogo } from "./NavigationIcons";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchLogos, selectUsersData } from "../../store/slices/usersData/userDataSlice";
import { useRef } from "react";
import "./NavigationMenu.css";
import { fetchDeleteActiveUser } from "../../store/slices/usersData/API";
import useScrollbarSize from "react-scrollbar-size";

const NavigationMenu = ({ createPost}) => {
  const { activeUser, searchUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const modalBox = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.includes("/direct");
  

  const addModal = (ev) => {
    if (ev.target === ev.currentTarget) {
      modalBox.current.classList.toggle("modalNone");
    }
    if (ev.target) {
      modalBox.current.classList.toggle("modalNone");
    }
    if (ev.target.textContent === "LogOut") {
      navigate("/");
    }
  };

  const logOut = () => {
    dispatch(fetchDeleteActiveUser(activeUser));
  };

  const changeSearchIcon = () => {
    dispatch(changeSearchLogos());
  };

  const addModalCreate = () => {
    createPost.current.classList.remove("noneModalCreate");
    
  };


  return (
    <div className="NavigationMenu">
      <div className="NavigationIconsDiv ">
        <NavLink to="/" className="instaLogo" onClick={() => window.scrollTo({top:0})}>
          {searchUser.searchActive || path ? (
            <InstaLogo />
          ) : (
            <NavigationLogoIcon />
          )}
        </NavLink>
        <NavLink to="/" className="topInstagramLogo">
          <NavigationHomeIcon />
        </NavLink>
        <NavLink onClick={changeSearchIcon}>
          <NavigationSearchIcon />
        </NavLink>
        <NavLink>
          <NavigationExploreIcon />
        </NavLink>
        <NavLink>
          <NavigationReelsIcon />
        </NavLink>
        <NavLink to="/direct">
          <NavigationMessagesIcon />
        </NavLink>
        <NavLink>
          <NavigationNotificationsIcon />
        </NavLink>
        <NavLink onClick={addModalCreate}>
          <NavigationCreateIcon />
        </NavLink>
        <NavLink to="/userPage">
          <div className="NavigationProfileDiv NavLink">
            <img
              src={
                activeUser.profileImage
                  ? activeUser.profileImage
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="#"
              className="ProfileImg"
            />
            <span>Profile</span>
          </div>
        </NavLink>
      </div>
      <div className="NavigationIconsDiv">
        <NavLink>
          <NavigationThreadsIcon />
        </NavLink>
        <span onClick={addModal} className="LogOut">
          <div ref={modalBox} className="modalBc modalNone">
            <div className="logOutBlocks ">
              <div className="moadlTopBlock">
                <Link to="/settings" className="settingsModal">
                  <SettingsIcon />
                  <button> Settings</button>
                </Link>
                <div className="settingsModal">
                  <Activity />
                  <button>Your activity</button>
                </div>
                <div className="settingsModal">
                  <SavedIconModal />
                  <button>Saved</button>
                </div>
                <div className="settingsModal">
                  <LightDarkIcon />
                  <button>Switch appearance</button>
                </div>
                <div className="settingsModal">
                  <ReportedIcon />
                  <button>Report a problem</button>
                </div>
              </div>
              <div className="moadlBottomLogout">
                <button>Switch accounts</button>
                <button onClick={logOut}>LogOut</button>
              </div>
            </div>
          </div>
          <NavigationMoreIcon />
        </span>
      </div>
    </div>
  );
};

export default NavigationMenu;
