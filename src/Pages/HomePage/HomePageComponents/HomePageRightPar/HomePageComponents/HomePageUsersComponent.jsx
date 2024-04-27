import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData } from '../../../../../store/slices/usersData/userDataSlice';
import { Link } from 'react-router-dom';
import { fetchFollowUser, fetchUnFollow } from '../../../../../store/slices/usersData/API';

const HomePageUsersComponent = () => {

  const { allUsersData ,activeUser} = useSelector(selectUsersData)
  const dispatch = useDispatch()

  const users = allUsersData.filter(el => !activeUser.following.includes(el.id))
    
  const postItemFollowers = (otherUser) => {
    dispatch(fetchFollowUser({ otherUser, activeUser }));
  };
  const unFollowItem = (otherUser) => {
    dispatch(fetchUnFollow({ otherUser, activeUser }));
  };


  return (
    <div>
      {users.slice(66, 71).map((user) => {
        return (
          <div key={user.id} className="UserInfo">
            <Link className="UserImgAndName" to={`${user.id}`}>
              <div className="UserImgDiv">
                <div className="UserImg">
                  <img src={user.profileImage} />
                </div>
              </div>
              <div className="UserNameDiv">
                <span>{user.userName}</span>
                <p>Suggested for you</p>
              </div>
            </Link>
            {activeUser?.id !== user.id &&
              (activeUser?.following.find((el) => el === user.id) ? (
                <button
                  className="followHomePage"
                  onClick={() => unFollowItem(user)}
                >
                  {" "}
                  UnFollow
                </button>
              ) : (
                <button
                  className="followHomePage"
                  onClick={() => postItemFollowers(user)}
                >
                  Follow
                </button>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default HomePageUsersComponent