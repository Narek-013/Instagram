import { NavLink, Outlet } from 'react-router-dom';
import { EditMessage, UserMessageIcon } from '../../../components/NavigationMenu/NavigationIcons';
import './messageLeftBlock.css'
import { useSelector } from 'react-redux';
import { selectUsersData } from '../../../store/slices/usersData/userDataSlice';
import MessagInbox from '../MessageCent/MessagInbox';
import Messages from './Messages';

const MessageLeftBlock = () => {

    const {activeUser} = useSelector(selectUsersData)

    return (
        <div className='messageLeftBlock'>
            <div className='messageLeftTop'>
                <div className='messageNickName'>   
                <p className='userMessage'>{activeUser?.userName}</p>
                  <UserMessageIcon/>
                </div>
                <button><EditMessage/></button>
            </div>
            <div className="messageBottomBlock">
                <p className='messagesPp'>Messages</p>
                <NavLink className="reqTag" to="/direct/requests">Requests</NavLink>
            </div>
            <Messages/>
            <Outlet/>
        </div>
    )
}

export default MessageLeftBlock;