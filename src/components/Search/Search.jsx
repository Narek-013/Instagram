import { useDispatch, useSelector } from "react-redux";
import { searchUserItem, selectUsersData } from "../../store/slices/usersData/userDataSlice";
import "./search.css";
import { SearchDeleteIcon } from "../NavigationMenu/NavigationIcons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Search = ({ searchBox }) => {
  const { allUsersData, searchUser, activeUser } = useSelector(selectUsersData);
  const dispatch = useDispatch();

  const searchUsers = (ev) => {
    const searchItem = allUsersData.filter((el) => el.userName.includes(ev));
    dispatch(searchUserItem(searchItem));
  };

  const users = allUsersData.filter((el) => el.id !== activeUser.id);
  const serachUs = searchUser?.allItemsSearch?.filter((el) => el.id !== activeUser.id);

  return (
    <div ref={searchBox} className="settingsBlock">
      <h2 className="searchTitleDiv">Search</h2>
      <input
        type="search"
        placeholder="Search"
        onChange={(ev) => searchUsers(ev.target.value)}
      />
      <div className="searchDivLine"></div>
      <div className="SearchAllUsers">
        <div className="storyRecentDiv">
          <span>Recent</span>
          <p>Clear all</p>
        </div>
        {searchUser.allItemsSearch?.length
          ? serachUs.map((el) => {
              return (
                <Link to={`${el.id}`} className="searchImgAndName" key={el.id}>
                  <div className="searchDiv">
                    <div className="searchImageDiv">
                      <img className="searchImage" src={el.profileImage} />
                    </div>
                    <div className="searchNameDiv ">
                      <span>{el.userName}</span>
                      <p>
                        {el.firstName} {el.lastName}
                      </p>
                    </div>
                  </div>
                  <SearchDeleteIcon />
                </Link>
              );
            })
          : users.map((el) => {
              return (
                <Link to={`${el.id}`} className="searchImgAndName" key={el.id}>
                  <div className="searchDiv">
                    <div className="searchImageDiv">
                      <img className="searchImage" src={el.profileImage} />
                    </div>
                    <div className="searchNameDiv ">
                      <span>{el.userName}</span>
                      <p>
                        {el.firstName} {el.lastName}
                      </p>
                    </div>
                  </div>
                  <SearchDeleteIcon />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Search;
