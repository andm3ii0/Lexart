import { useContext } from "react";
import Header from "../Components/Header";
import InputBar from "../Components/InputBar";
import Message from "../Components/Message";
import { ChatPageContainer, Content } from "../Styles/ChatPage";
import Context from "../Context/Context";
import LoanMessage from "../Components/LoanMessage";

function ChatPage() {

  const context = useContext(Context)
  return (
    <ChatPageContainer>
      <Header />
      <Content>
        {context.messages.map(
          (message, index) => message.isLoan ? <LoanMessage isuser={false} text={message.text} />
            : <Message key={index}
              text={message.text}
              isuser={message.isUser} />)}
      </Content>
      <InputBar />
    </ChatPageContainer>
  );
}

export default ChatPage;
