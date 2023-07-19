import { MessageBubble, MessageContainer, MessageText } from "../Styles/Message";

function Message({ text, isuser }) {
    return (
      <MessageContainer isuser={isuser}>
        <MessageBubble isuser={isuser}>
          <MessageText>{text}</MessageText>
        </MessageBubble>
      </MessageContainer>
    );
  }
  
  export default Message;