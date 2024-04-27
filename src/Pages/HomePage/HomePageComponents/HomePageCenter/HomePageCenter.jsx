import React from "react";
import HomePageBottomPar from "./HomePageBottom/HomePageBottomPar";
import HomePageTopPar from "./HomePageTop/HomePageTopPar";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../../../store/slices/usersData/userDataSlice";

const HomePageCenter = () => {

  const {allUsersData} = useSelector(selectUsersData)


  return (
    <div className="Homecenter">
      <HomePageTopPar allUsersData={allUsersData} />
      <HomePageBottomPar allUsersData={allUsersData} />
    </div>
  );
};

export default HomePageCenter;
