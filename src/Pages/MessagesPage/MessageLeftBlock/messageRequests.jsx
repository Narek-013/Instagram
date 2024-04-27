import { BackRequest, Messages, RequestHidden, RightRequest } from '../../../components/NavigationMenu/NavigationIcons';
import { Link } from 'react-router-dom';
import './requests.css'
import MessagInbox from '../MessageCent/MessagInbox';

const MessageRequests = () => {
    return (
      <div className='reqInfo'>
        <div className="requests">
          <div className="requestBlock">
            <Link to="/direct">
              <BackRequest />
            </Link>
            <p>Message requests</p>
          </div>
          <div className="reqScroll">
            <div className="requestBottom">
              <div className="requestBottomLeft">
                <div className="hiddenBlock">
                  <RequestHidden />
                </div>
                <p className="hiddenRequestP">Hidden Requests</p>
              </div>
              <Link className="hiddenReq">
                <RightRequest />
              </Link>
            </div>
          </div>
        </div>
        <div className="message">
        <MessagInbox/>

        </div>
      </div>
    );
}

export default MessageRequests;
