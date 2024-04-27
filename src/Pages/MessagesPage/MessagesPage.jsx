import { useSelector } from 'react-redux';
import MessageLeftBlock from './MessageLeftBlock/MessageLeftBlock';
import { selectUsersData } from '../../store/slices/usersData/userDataSlice';
import MessagInbox from './MessageCent/MessagInbox';
import './messagePage.css'
import { useParams } from 'react-router-dom';


const MessagesPage = () => {
    const { activeUser } = useSelector(selectUsersData);
    
    return (
      <div className="messagePage">
        <MessageLeftBlock activeUser={activeUser} />
        <MessagInbox/>
      </div>
    );
}

export default MessagesPage;
