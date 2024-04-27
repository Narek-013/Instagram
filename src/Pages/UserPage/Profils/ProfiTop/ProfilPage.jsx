import { useSelector } from 'react-redux';
import ProfilBottom from '../ProfilBottom/ProfilBottom';
import ActualProfil from '../acctualBlocks/ActualProfil';
import ProfilTpRight from './ProfilTpRight/ProfilTpRight';
import { selectUsersData } from '../../../../store/slices/usersData/userDataSlice';
import './profilTop.css'

const ProfilPage = () => {
    const { activeUser, allUsersData ,otherUser} = useSelector(selectUsersData);
    return (  
      <div className="container">
        <div className="userTopBlock">
          <div className="userImgBlock">
            <img className="userImg" src={activeUser.profileImage ? activeUser.profileImage : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
          </div>
          <ProfilTpRight activeUser={activeUser} allUsersData={allUsersData} otherUser={otherUser}/>
        </div>
        <ActualProfil />
        <ProfilBottom />
      </div>
    );
}

export default ProfilPage;
