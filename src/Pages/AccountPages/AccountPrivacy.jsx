
import './accountPrivacy.css'

const AccountPrivacy = () => {
    return (
      <div className="AccountPrivacy">
        <p className="privateP">Account Privacy</p>
        <div className="privateBlocks">
          <p>Private account</p>
          <div className="privateRadio">
            <input type="radio" />
          </div>
        </div>
        <ul className="privateInfo">
          <li className="privateAccounPublic">
            When your account is public, your profile and posts can be seen by
            anyone, on or off Instagram, even if they don’t have an Instagram
            account.
          </li>
          <li className="privateAccounPublic">
            When your account is private, only the followers you approve can see
            what you share, including your photos or videos on hashtag and
            location pages, and your followers and following lists.<span className='LearnMorePrivate'> Learn more</span>
          </li>
        </ul>
      </div>
    );
}

export default AccountPrivacy;
