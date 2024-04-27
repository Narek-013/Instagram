import HomePageMyUserComponent from "./HomePageComponents/HomePageMyUserComponent";
import HomePageRightFooter from "./HomePageComponents/HomePageRightFooter";
import HomePageUsersComponent from "./HomePageComponents/HomePageUsersComponent";
import "./HomePageRightPar.css";

const HomePageRightPar = () => {
  return (
    <div className="HomeRight">
      <HomePageMyUserComponent/>
      <div className="RightParFollows">
        <div className="RightParSuggested">
          <p>Suggested for you</p>
          <span>See All</span>
        </div>
      <HomePageUsersComponent/>
      </div>
      <HomePageRightFooter/>
    </div>
  );
};

export default HomePageRightPar;
