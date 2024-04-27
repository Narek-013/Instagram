import MessageLeftBlock from "../MessageLeftBlock/MessageLeftBlock";
import AllMessages from "./AllMessages";
import MessageOneItemBlock from "./MessageOneItemBlock";

const OneItemMessages = () => {
  return (
    <div className="allBlockMessage">
      <MessageLeftBlock />
      <MessageOneItemBlock />
    </div>
  );
};

export default OneItemMessages;
