 import { Outlet } from "react-router-dom";
import Profils from "./Profils/Profils";

import "./userPage.css";

const UserPage = () => {
  return (
    <div className="UserAllBlocks">
      <div className="userPage">
        <Profils />
      </div>
      <div className="profilNavigationBlocks">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
