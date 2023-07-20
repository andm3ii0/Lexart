import { useContext, useEffect, useRef } from "react";
import Header from "../Components/Header";
import InputBar from "../Components/InputBar";
import Message from "../Components/Message";
import { ChatPageContainer, Content, ChatPageScrem } from "../Styles/ChatPage";
import Context from "../Context/Context";
import LoanMessage from "../Components/LoanMessage";

function ChatPage() {

  const context = useContext(Context)

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [context.messages]);
  return (
    <ChatPageScrem>
      <ChatPageContainer>
        <Header />
        <Content ref={contentRef}>
          {context.messages.map(
            (message, index) => message.isLoan ? <LoanMessage isuser={false} text={message.text} />
              : <Message key={index}
                text={message.text}
                isuser={message.isUser} />)}
        </Content>
        <InputBar />
      </ChatPageContainer>
    </ChatPageScrem>
  );
}

export default ChatPage;
